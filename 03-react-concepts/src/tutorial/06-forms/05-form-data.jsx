import { useState } from "react";

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    // NOTE -> currentTarget is the element which triggered the event, this will not change, whereas event.target refers to the element which recieved that event while propogation, digging more into it in next component
    const formData = new FormData(e.currentTarget);
    console.log(formData); // set, get, getAll, delete, append, entries, has, keys, values
    console.log(formData.entries()); // iterator
    console.log(formData.keys()); // iterator
    // get values one by one
    const name = formData.get("name");
    console.log(name);
    // get all of them
    const newUser = Object.fromEntries(formData);
    // do something (post request, add to list, etc)
    console.log(newUser);
    // Gotcha - re-render won't clear out the values
    setValue(value + 1);
    // IMP-> reset values
    e.currentTarget.reset();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-input" id="email" name="email" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default UncontrolledInputs;
