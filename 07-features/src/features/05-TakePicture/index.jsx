import React, { useEffect } from 'react';

const TakePicture = () => {
  useEffect(() => {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const snap = document.getElementById('snap');
    const errorMsgElement = document.getElementById('span#ErrorMsg');

    const constraints = {
      audio: true,
      video: {
        width: 250,
        height: 320,
      },
    };

    // access webcam
    async function init() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
      } catch (e) {
        errorMsgElement.innerHTML = `navigator.getUserMedia.error: ${e.toString()}`;
      }
    }

    // success
    function handleSuccess(stream) {
      window.stream = stream;
      video.srcObject = stream;
    }

    // Load init
    init();
    // draw image
    var context = canvas.getContext('2d');
    snap.addEventListener('click', function () {
      context.drawImage(video, 0, 0, 250, 320);
    });
  });

  return (
    <>
      <div id="container">
        {/* <!-- stream video via webcam --> */}
        <div className="video-wrap">
          <video id="video" playsInline autoPlay></video>
        </div>

        {/* <!-- trigger canvas web API --> */}
        <div className="controller">
          <button id="snap">Capture</button>
        </div>
      </div>

      <div id="canvas_div">
        {/* <!-- webcam video snapshot --> */}
        <canvas id="canvas" width={250} height={320}></canvas>
      </div>
    </>
  );
};

export default TakePicture;
