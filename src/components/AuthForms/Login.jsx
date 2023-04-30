import { useState } from "react";
import { auth } from "../../firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../redux/authReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loginVerify = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        dispatch(getToken({ userCredentials }));
        console.log(userCredentials);
        if (userCredentials && userCredentials.user.email) {
          alert("Login successful");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-50 justify-content-center align-item-center mt-4">
      <form
        className="w-50 border bg-dark text-white p-5 rounded"
        onSubmit={handleLogin}
      >
        <div>
          <h2>Login</h2>

          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="enter email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="enter password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-success my-3" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
