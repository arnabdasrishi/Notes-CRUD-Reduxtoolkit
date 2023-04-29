import { useState } from "react";
import { auth } from "../../firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../redux/authReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const disptch = useDispatch();
  const loginVerify = useSelector((state) => state.auth);
  const navigate = useNavigate()


  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        disptch(getToken({ userCredentials }));
        console.log(userCredentials);
      })
      .catch((err) => console.log(err));

      if(loginVerify){
        alert("Login successful")
        navigate("/")
      }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
