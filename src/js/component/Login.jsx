import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        if (event.target.name === 'email') {
            setEmail(event.target.value);
        } else if (event.target.name === 'password') {
            setPassword(event.target.value);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mail: email, password }),
            });

            const data = await response.json(); // Parsea la respuesta como JSON

            if (response.ok) {
                console.log("Inicio exitoso, Token generado", data)

            } else {

                // Muestro un mensaje de error al usuario.
                setError(data.message); // Utiliza el mensaje de error proporcionado por el servidor.
            }
        } catch (err) {
            console.error('Error en la solicitud:', err);
            setError('Error en la solicitud. Por favor, inténtalo de nuevo más tarde.');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="container mt-4">
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleInputChange} />
            </div>

            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" className="form-control" id="password" name="password" value={password} onChange={handleInputChange} />
            </div>

            <button type="submit" className="btn btn-primary">
                Iniciar sesión
            </button>
        </form>
    );
}

export default Login;
