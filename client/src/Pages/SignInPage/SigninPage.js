import axios from "axios";

const SigninPage = () => {
  return (
    <>
      <form>
        <h1> Log in to add some beans! </h1>
        <input name="email" type="text" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button>Log In</button>
      </form>
    </>
  );
};

export default SigninPage;
