import React from "react";
import validation from "./validation";

export default function Form(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });
  const [userErrors, setUserErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setUserErrors(validation({ ...userData, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor=""></label>
      <input
        type="text"
        value={userData.username}
        name="username"
        onChange={handleInputChange}
        placeholder="Ingresar usuario"
      />
      {userErrors.username && <span>{userErrors.username}</span>}
      <br />
      <label htmlFor=""></label>
      <input
        type="text"
        value={userData.password}
        name="password"
        onChange={handleInputChange}
        placeholder="Ingresar contraseña"
      />
      {userErrors.password && <span>{userErrors.password}</span>}
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
