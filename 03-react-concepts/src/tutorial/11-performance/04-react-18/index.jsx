import { useState } from "react";
const LatestReact = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = e => {
    setText(e.target.value);

    // slow down CPU -> from devtools (refer README)
    // following code will make input typing much slower
    const newItems = Array.from({ length: 5000 }, (_, index) => {
      return (
        <div key={index}>
          <img src="/vite.svg" alt="" />
        </div>
      );
    });
    setItems(newItems);
  };
  return (
    <section>
      <form className="form">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          marginTop: "2rem",
        }}
      >
        {items}
      </div>
    </section>
  );
};
export default LatestReact;
