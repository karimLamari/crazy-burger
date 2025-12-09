import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  //Comportements:

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`/order/${inputValue}`);
  };
  //Render

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> Bienvenue chez nous !</h1>
        <p> Connectez-vous</p>
        <label htmlFor="prenom"></label>
        <input
          id="prenom"
          type="text"
          placeholder="Entrez votre prénom"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button type="submit">Accéder a votre espace</button>
      </form>
    </div>
  );
}
export default LoginForm;
