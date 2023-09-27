const EventExample = () => {
  function handleInput(e) {
    let { name, value } = e.target;
    console.log(name, value);
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(e);
  }

  const handleFormSubmit = e => {
    // Becuase of form element -> this get's called on click of button inside form and also when user hits enter on input
    // Imp -> in order to get onSubmit of form called on click of button, button needs to be inside form tag
    e.preventDefault();
    console.log(e);
  };

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleInput}
          onPaste={() => {
            console.log("called");
            // On paste -> onPaste gets called then onChange also gets called
          }}
        />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default EventExample;
