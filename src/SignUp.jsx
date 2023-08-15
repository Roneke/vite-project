import axios from "axios";

export function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
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
          <input name="name" type="text" />
        </div>
        <div>
          Email:
          <input name="email" type="text" />
        </div>
        <div>
          Password:
          <input name="password" type="password" />
        </div>
        <div>
          Password Confirmation:
          <input name="password_confirmation" type="password" />
        </div>
        <button type="submit"> Sign Up </button>
      </form>
    </div>
  );
}
