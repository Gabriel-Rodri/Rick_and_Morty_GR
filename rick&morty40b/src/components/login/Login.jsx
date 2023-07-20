import React, { useState } from 'react';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para autenticar al usuario
    console.log('Iniciando sesión con:', email, password);
  };

  const validateEmail = (email) => {
    // Expresión regular para validar el formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Expresión regular para validar el formato de contraseña (mínimo 8 caracteres, al menos una letra y un número)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div id="contenedor">
    <div id="central">
        <div id="login">
            <div class="titulo">
                Iniciar sesión
            </div>
            <form id="loginform">
                <input
                type="text"
                placeholder="Nombre de usuario"
                required
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {email && !validateEmail(email) && <p className='parrafo'>Ingrese un correo electrónico válido</p>}
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {password && !validatePassword(password) && <p className='parrafo'>La contraseña debe tener al menos 8 caracteres, una letra y un número</p>}
              <button onClick={handleLogin}>Iniciar sesión</button>
            </form>
            <div class="pie-form">
                <a href="*">¿Perdiste tu contraseña?</a>
                <a href="*">¿No tienes Cuenta? Registrate</a>
            </div>
        </div>
        <div class="inferior">
            <a href="/home">Volver</a>
        </div>
    </div>
</div>

  );
};

export default Login;