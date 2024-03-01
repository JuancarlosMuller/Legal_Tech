import React, { useState } from 'react';

function VerificationForm() {
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const handleChange = (event) => {
    setVerificationCode(event.target.value);
    setVerificationResult(null); // Limpiar el resultado al cambiar el código
  };

  const handleVerify = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ verification_code: verificationCode }),
      });

      if (response.ok) {
        const data = await response.json();
        setVerificationResult('Éxito');
      } else {
        setVerificationResult('Rechazo');
      }
    } catch (error) {
      console.error('Error al validar el código:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ marginTop: '10px' }}>
        <h2>Código de Verificación</h2>
        <p>Por favor ingresa el código de 11 dígitos que tiene tu documento para continuar.</p>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <input
            type="text"
            value={verificationCode}
            onChange={handleChange}
            placeholder="Ingresa el código aquí"
            style={{ flex: 1, padding: '10px' }}
          />
          <span role="img" aria-label="Código de barra" style={{ fontSize: '24px', marginLeft: '10px' }}>🔢</span>
        </div>
        <br />
        <button onClick={handleVerify} style={{ padding: '10px 20px', fontSize: '16px' }}>Verificar</button>
        {verificationResult && (
          <p style={{ marginTop: '15px', fontSize: '18px', color: verificationResult === 'Éxito' ? '#008000' : '#ff0000' }}>
            {verificationResult === 'Éxito' ? (
              <>
                <span role="img" aria-label="Documento válido">✔️</span> Documento Válido
              </>
            ) : (
              <>
                <span role="img" aria-label="Documento no válido">❌</span> Documento No Válido
              </>
            )}
          </p>
        )}
      </div>
    </div>
  );
}

export default VerificationForm;
