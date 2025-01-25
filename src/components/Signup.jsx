export default function Signup() {
  function handleSubmit(event) {
    event.preventDefault();
    // 자동으로 생성되는 HTTP요청이 전송되지 않도록 하기위해서

    const fd = new FormData(event.target);
    // 브라우저에 내장된 함수, 양식에 입력된 각기 다른 값들을 쉽게 얻을 수 있도록 도와주는 객체
    // form 양식에 name속성이 설정되어있어야 추출이 가능하다.

    const enteredEmail = fd.get("email");
    const enteredPassword = fd.get("password");
    // 위처럼 하면 너무 많은 변수가 생기기 때문에 아래에 있는 방법으로 객체화 시켜서 데이터를 사용한다.
    const acquisitionChannel = fd.getAll("acquisition");
    // 이름 속성이 다중값인 경우 위 처럼 추출을해서 직접 객체에 추가해줘야한다.
    const data = Object.fromEntries(fd.entries());
    data.aqcuisition = acquisitionChannel;
    console.log(data);

    // event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
