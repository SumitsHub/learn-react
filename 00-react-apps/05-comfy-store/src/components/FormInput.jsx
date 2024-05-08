function FormInput({ label, name, type, defaultValue }) {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder="Type here"
        className="input input-bordered"
      />
    </label>
  );
}
export default FormInput;
