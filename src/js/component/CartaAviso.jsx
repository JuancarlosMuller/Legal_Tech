import React from 'react';

function CartaAviso({ formData }) {
    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
                <title>Documento DOCX</title>
            </head>
            <body>
                <ul style={{ listStyleType: 'disc' }}>
                    <li><span style={{ background: 'yellow' }}>Nombre de la Empresa:</span> {formData.nombreEmpresa}</li>
                    <li>RUT de la Sociedad: {formData.rutEmpresa}</li>
                    <li>Dirección de la Sociedad: {formData.direccionEmpresa}</li>
                    <li>Nombre del Representante: <strong>{formData.nombreRepresentante}</strong></li>
                    <li>RUT del Representante:{formData.rutRepresentante}</li>
                    <li><strong>Nombre del Trabajador: {formData.nombreTrabajador}</strong></li>
                    <li>RUT del Trabajador: {formData.rutTrabajador}</li>
                    <li>Domicilio del Trabajador: {formData.domicilioTrabajador}</li>
                    <li>Causal de Despido: {formData.causalDespido}</li>
                    <li>Fecha Inicio Contrato de Trabajo: {formData.fechaInicioContrato}</li>
                    <li><strong>Fecha Término Contrato de Trabajo:</strong> {formData.fechaTerminoContrato}</li>
                </ul>
            </body>
        </html>
    );
}

export default CartaAviso;
