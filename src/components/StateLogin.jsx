import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const emailIsInvalid =
    enteredValues.email !== "" && !enteredValues.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(enteredValues);
  }

  function handleInputChage(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  return (
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
          <div className="control-error">
            {emailIsInvalid && <p>이메일 주소를 입력해주세요!</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={(event) =>
                handleInputChage("password", event.target.value)
              }
              //   ref={password}
            />
          </label>
        </div>
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
