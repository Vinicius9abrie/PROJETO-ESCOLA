import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // para navegação entre páginas
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

    // Verificar se o usuário existe no arquivo JSON
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      // Redirecionar para a página principal ou dashboard, passando informações do usuário
      navigate('/', { state: { username: user.username, genero: user.genero } });
    } else {
      setError('Usuário ou senha incorretos');
    }
  };
  return (
    <div className="loginPage">
        <div className="login-container">
            <InputGroup id="user" type="email" onChange={setEmail} label="Usuário:" placeholder="Digite seu email"></InputGroup>
            <InputGroup id="senha" type="password" onChange={setPassword} label="Senha:" placeholder="Digite sua senha"></InputGroup>
            <Button variant="primary" onClick={handleLogin}>Login</Button>
        </div>
    </div>
  )
}
