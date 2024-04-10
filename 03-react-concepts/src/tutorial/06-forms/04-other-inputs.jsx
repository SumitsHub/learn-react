/**
 * Handling checkbox and select, option inputs
 */

import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");
  const [favFramework, setFavFramework] = useState("");

  const handleShipping = e => {
    console.log(e.target.checked); // true, false
    setShipping(e.target.checked);
  };
  const handleFramework = e => {
    console.log(e.target.value); // selected value from list options
    setFramework(e.target.value);
  };

  const handleRadio = e => {
    console.log('value: ', e.target.value);
    console.log('checked: ', e.target.checked);
    setFavFramework(e.target.value);
  }
  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <input
            type="checkbox"
            checked={shipping}
            id="shipping"
            name="shipping"
            onChange={handleShipping}
          />
          <label htmlFor="shipping"> Free Shipping </label>
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map(framework => {
              return <option key={framework}>{framework}</option>;
            })}
          </select>
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework2" className="form-label">
            Favorite Framework
          </label>
          <div style={{display: 'flex', gap: '5px'}}>
            {frameworks.map(framework => {
              return <span style={{display: 'flex', gap: '5px'}}>
              <input
                name="framework2"
                id="framework2"
                type="radio"
                value={framework}
                checked={favFramework === framework}
                onChange={handleRadio}
              />
              {framework}
              </span>;
            })}
          </div>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
