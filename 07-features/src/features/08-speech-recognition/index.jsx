import { useState, useEffect, useMemo } from "react";
import "./index.css";

const SpeechRecognitionComponent = () => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [language, setLanguage] = useState("en-US"); // Default to English

  // Initialize SpeechRecognition only once using useMemo
  const recognition = useMemo(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recObj = new SpeechRecognition();

    recObj.continuous = true; // Enable continuous listening
    recObj.interimResults = true; // Show interim results as well
    recObj.lang = language; // Use the selected language

    return recObj;
  }, [language]); // Reinitialize when language changes

  const startListening = () => {
    setListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setListening(false);
    recognition.stop();
  };

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === "en-US" ? "hi-IN" : "en-US"));
  };

  useEffect(() => {
    // Handle speech recognition results
    recognition.onresult = event => {
      const currentTranscript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join(" ");
      setTranscript(currentTranscript);
    };

    recognition.onend = () => {
      if (listening) {
        recognition.start(); // Restart recognition to maintain continuous listening
      }
    };

    return () => {
      recognition.onresult = null;
      recognition.onend = null;
    };
  }, [recognition, listening]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Speech Recognition Demo (English & Hindi)</h2>
      <button className="listen-button" onClick={listening ? stopListening : startListening}>
        {listening ? "Stop Listening" : "Start Listening"}
      </button>
      <button className="toggle-button" onClick={toggleLanguage} style={{ marginLeft: "10px" }}>
        Switch to {language === "en-US" ? "Hindi" : "English"}
      </button>
      {listening && (
        <div className="listening-indicator">
          🎙️ Listening ({language === "en-US" ? "English" : "Hindi"})...
        </div>
      )}
      <div className="transcript-box">
        <p>{transcript || "Your transcript will appear here..."}</p>
      </div>
    </div>
  );
};

export default SpeechRecognitionComponent;
