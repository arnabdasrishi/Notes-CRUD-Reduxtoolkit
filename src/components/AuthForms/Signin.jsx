import { useState } from "react";
import { auth } from "../../firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex w-100 vh-50 justify-content-center align-item-center mt-4">
      <form
        className="w-50 border bg-dark text-white p-5 rounded"
        onSubmit={handleSignin}
      >
        <div>
          <h2>Create an Account</h2>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="enter email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="text"
            placeholder="enter password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Re Enter Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="re enter password"
          />
        </div>

        <button className="btn btn-warning my-3" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signin;
