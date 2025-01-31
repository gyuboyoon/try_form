import { useState } from "react";

import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputChage: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChage: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  //   const emailIsInvalid =
  //     didEdit.email &&
  //     !isEmail(enteredValues.email) &&
  //     !isNotEmpty(enteredValues.email);

  //   const passwordIsInvalid =
  //     didEdit.password && !hasMinLength(enteredValues.password, 6);

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "유효한 이메일을 입력해주세요."}
        />
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(event) => handleInputChage("email", event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>이메일 주소를 입력해주세요!</p>}
          </div>
        </div> */}

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "유효한 비밀번호를 입력해주세요."}
        />

        {/* <div className="control no-margin">
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
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
