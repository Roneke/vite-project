import axios from "axios";

export function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log("ERROR", error.reponse.data.errors);
      });
  };
  return (
    <div id="login">
      <h2>Login</h2>
      <form>
        <div>
          Email: <input name="email" type="text" />
        </div>
        <div>
          Password: <input name="password" type="text" />
        </div>
        <div>
          <button type="submit"> Login </button>
        </div>
      </form>
    </div>
  );
}
