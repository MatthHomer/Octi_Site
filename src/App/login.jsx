import React, { useState } from "react";
import { login } from "../Backend/Login";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Enviando dados de login:", { user, password }); // Log para depuração
    const loggedInUser = await login(user, password);
    if (loggedInUser) {
      console.log("Login bem-sucedido:", loggedInUser);
      // Redirecionar ou fazer algo após o login bem-sucedido
    } else {
      setError("Usuário ou senha incorretos");
    }
  };

  return (
    <div style={styles.safeArea}>
      <h1 style={styles.titleH1}>Login</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Usuário"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Entrar</button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

const styles = {
  safeArea: {
    display: "flex", // Necessário para aplicar flexbox
    flexDirection: "column", // Organiza os filhos em uma coluna
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
    height: "100vh", // Altura total da viewport
    backgroundColor: "#f5f5f5", // Fundo claro
  },
  titleH1: {
    color: "#000", // Preto válido
    textAlign: "center", // Centraliza o texto no eixo horizontal
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    fontSize: "16px",
    width: "200px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};

export default Login;
