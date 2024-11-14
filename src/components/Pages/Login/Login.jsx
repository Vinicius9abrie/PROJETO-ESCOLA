import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // para navegação entre páginas
import users from '/src/data/users.json'; // importe o arquivo JSON com os usuários
import InputGroup from '../../Calculadora/InputGroup/InputGroup';
import "./Login.css"
import Button from '../../Button/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.username === email || u.email === email && u.password === password);
    console.log(user);
    if (user) {
      navigate('/dicas', { state: { username: user.username, genero: user.genero } });
    } else {
      setError('Usuário ou senha incorretos');
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };
  return (
    <div className="loginPage">
        <div className="login-container">
            <InputGroup id="user" type="email" onChange={setEmail} label="Usuário:" placeholder="Digite seu email"></InputGroup>
            <InputGroup id="senha" type="password" onChange={setPassword} label="Senha:" placeholder="Digite sua senha"></InputGroup>
            <Button variant="primary" onClick={handleLogin}>Login</Button>
            {(error) ? <p style={{color: "red"}}>{error}</p> : <></>}
        </div>
    </div>
  )
}
