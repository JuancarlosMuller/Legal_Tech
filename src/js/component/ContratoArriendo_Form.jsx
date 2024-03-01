import React, { useState } from 'react';
import ContratoArriendo from './ContratoArriendo';
import ReactDOMServer from "react-dom/server";
import htmlDocx from 'html-docx-js/dist/html-docx';
import html2pdf from 'html2pdf.js';

function ContratoArriendo_Form() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        CiudadArriendo: '',
        FechaFirma: '',
        nombreArrendador: '',
        rutArrendador: '',
        direccionArrendador: '',
        ComunaArrendador: '',
        nombreArrendatario: '',
        rutArrendatario: '',
        ComunaPropiedad: '',
        fechaInicioContrato: '',
        DuracionContrato: '',
        PrecioArriendo: '',
        DiaPago: '',
        ajusteIPC: '',
        GarantiaArriendo: '',
        Aviso: ''
    });
    const [token, setToken] = useState('');
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleNextStep = () => {
        // Validar si todos los campos están llenos antes de pasar al siguiente paso
        const allFieldsFilled = Object.values(formData).every(value => value.trim() !== '');
        if (allFieldsFilled) {
            setStep(step + 1);
        } else {
            alert('Por favor complete todos los campos antes de continuar.');
        }
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const generateDocument = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/documents', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token; // Obtiene el token generado del servidor
                setToken(token);
                console.log('Token generado:', token); // Imprime el token en la consola
                // Guarda el token en el estado del componente
                const htmlContent = ReactDOMServer.renderToStaticMarkup(<ContratoArriendo formData={formData} token={token} />);
                html2pdf().from(htmlContent).save();

                // Opcionalmente, puedes guardar el token en el estado del componente o en sesión
            } else {
                const data = await response.json();
                console.error('Error al crear el documento:', data.message);
                // Aquí puedes mostrar un mensaje de error al usuario si lo deseas
            }
        } catch (error) {
            console.error('Error al generar el documento:', error);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 5) {
            generateDocument();
        } else {
            handleNextStep();
        }
    };


    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div>
                        <h3>Sección Datos Contrato</h3>
                        <p style={{ color: '#7a7a7a', fontSize: '14px' }}>
                            Esta sección es donde se detalla de manera referencial la ciudad en donde se firma el documento 📝 y su fecha 📅.
                        </p>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="CiudadArriendo" className="form-label">
                                        Ciudad de Firma
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="CiudadArriendo"
                                        placeholder="Santiago"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="FechaFirma" className="form-label">
                                        Fecha de Firma
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="FechaFirma"
                                        placeholder="01-10-2024"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <h3>Sección Datos Arrendador:</h3>
                        <p style={{ color: '#7a7a7a', fontSize: '14px' }}>
                            Un arrendador es quien entrega una propiedad 🏠 a la otra persona a cambio de un pago regular conocido como alquiler o arriendo 💰.
                        </p>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="nombreArrendador" className="form-label">
                                        Nombre completo del Arrendador
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombreArrendador"
                                        placeholder="Juan Pérez Soto"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rutArrendador" className="form-label">
                                        RUT del Arrendador, con punto y guion
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="rutArrendador"
                                        placeholder="16.888.495-6"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="direccionArrendador" className="form-label">
                                        Dirección del Arrendador (Calle, Número y Ciudad).
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="direccionArrendador"
                                        placeholder="Abdon Yarra #863, depto 503"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ComunaArrendador" className="form-label">
                                        Comuna del Arrendador
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="ComunaArrendador"
                                        placeholder="Peñalolen"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <h3>Sección Datos Arrendatario</h3>
                        <p style={{ color: '#7a7a7a', fontSize: '14px' }}>
                            Un arrendatario es quien entrega un pago regular conocido como alquiler o arriendo 💰.
                        </p>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="nombreArrendatario" className="form-label">
                                        Nombre completo del Arrendatario
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombreArrendatario"
                                        placeholder="Maria Alejandra Jimenez Baeza"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rutArrendatario" className="form-label">
                                        RUT del Arrendatario, con punto y guion
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="rutArrendatario"
                                        placeholder="17.017.957-4"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step === 4 && (
                    <div>
                        <h3>Sección Datos Propiedad</h3>
                        <p style={{ color: '#7a7a7a', fontSize: '14px' }}>
                            En esta seccion es donde se indican los datos de la propiedad 🏠 a alquilar o arrendar e inicio del arriendo.
                        </p>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="ComunaPropiedad" className="form-label">
                                        Comuna donde se ubica la Propiedad
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="ComunaPropiedad"
                                        placeholder="Estación Central"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fechaInicioContrato" className="form-label">
                                        Fecha de Inicio del Arriendo
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="fechaInicioContrato"
                                        placeholder="05-10-2024"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="DuracionContrato" className="form-label">
                                        Cuanto dura el Contrato (en meses)
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="DuracionContrato"
                                        placeholder="12"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step === 5 && (
                    <div>
                        <h3>Sección Precio, Garantía y Ajustes</h3>
                        <p style={{ color: '#7a7a7a', fontSize: '14px' }}>
                            En esta seccion es donde se indican el monto mensual a pagar por el arriendo, el valor de la garantía y dia de pago 💰.
                        </p>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="PrecioArriendo" className="form-label">
                                        Precio de Arriendo mensual
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="PrecioArriendo"
                                        placeholder="500.000"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="DiaPago" className="form-label">
                                        India el número del Día de Pago
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="DiaPago"
                                        placeholder="5"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="GarantiaArriendo" className="form-label">
                                        Monto de la Garantía de Arriendo
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="GarantiaArriendo"
                                        placeholder="500.000"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Aviso" className="form-label">
                                        Cantidad de días requeridos para dar aviso de Terminación.
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="Aviso"
                                        placeholder="45"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="row">
                    <div className="col-12 mt-3">
                        {step !== 1 && (
                            <button type="button" className="btn btn-primary me-2" onClick={handlePreviousStep}>
                                Anterior
                            </button>
                        )}
                        <button type="submit" className="btn btn-primary">
                            {step === 5 ? 'Enviar' : 'Siguiente'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ContratoArriendo_Form;
