import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const emailIsInvalid = function handleSubmit(event) {
    event.preventDefault();

    console.log(enteredValues);
  };

  function handleInputChage(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  return;
  <form onSubmit={handleSubmit}>
    <h2>Login</h2>

    <div className="control-row">
      <div className="control no-margin">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(event) => handleInputChage("email", event.target.value)}
          value={enteredValues.email}
        />
      </div>

      <div className="control no-margin">
        <label htmlFor="password">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </label>
      </div>
    </div>
  </form>;
}
