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
    <div>
      <h2>Create an Account</h2>

      <form onSubmit={handleSignin}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="text"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Re Enter Password</label>
          <input type="text" placeholder="re enter password" />
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signin;
