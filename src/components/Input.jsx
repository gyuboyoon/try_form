export default function Input({ label, id, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        // id="email"
        // name="email"
        // onBlur={() => handleInputBlur("email")}
        // onChange={(event) => handleInputChage("email", event.target.value)}
        {...props}
      />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
