import { useState, useTransition, lazy, Suspense } from "react";
const SlowComponent = lazy(() => import("./SlowComponent"));
const LatestReact = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [show, setShow] = useState(false);

  const handleChange = e => {
    setText(e.target.value);

    // slow down CPU -> from devtools (refer README)
    // following code will make input typing much slower
    // const newItems = Array.from({ length: 5000 }, (_, index) => {
    //   return (
    //     <div key={index}>
    //       <img src="/vite.svg" alt="" />
    //     </div>
    //   );
    // });
    // setItems(newItems);

    // using useTransition hook to avoid time lag -> if still observing some time lag, make sure to remove throttle from devtools

    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        );
      });
      setItems(newItems);
    });
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

      {isPending ? (
        "Loading..."
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginTop: "2rem",
          }}
        >
          {items}
        </div>
      )}
      <button onClick={() => setShow(!show)} className="btn">
        toggle
      </button>
      {show && (
        <Suspense fallback={<div>Loading...</div>}>
          <SlowComponent />
        </Suspense>
      )}
    </section>
  );
};
export default LatestReact;
