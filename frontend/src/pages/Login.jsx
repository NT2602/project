import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.prevenDefault();
    try {
      const res = await login(form);
      localStorage.setItem("token", res.data.token);
      navigate("/products");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btn-login"
          id="btn-login"
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" for="btn-login">
          Login
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btn-register"
          id="btn-register"
          autoComplete="off"
        />
        <label className="btn btn-outline-primary" for="btn-register">
          Register
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default Login;
