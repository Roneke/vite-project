import axios from "axios";
import { useState } from "react";

export function SignUp() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("ERROR", error.reponse.data.errors);
      });
  };
  return (
    <div id="signup">
      <h2>Sign Up</h2>
      <form method="POST" action="http://localhost:3000/users.json">
        <div>
          Name:
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Enter name"
          />
        </div>
        <div>
          Email:
          <input
            name="email"
            type="text"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div>
          Password:
          <input
            name="password"
            type="password"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
          <small id="passwordHelpInline" className="text-muted">
            Must be 8-20 characters long.
          </small>
        </div>
        <div>
          Password Confirmation:
          <input
            name="password_confirmation"
            type="password"
            className="form-control"
          />
        </div>
        <button type="submit"> Sign Up </button>
      </form>
    </div>
  );
}
