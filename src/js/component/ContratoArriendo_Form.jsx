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

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const generateDocument = () => {
        const htmlContent = ReactDOMServer.renderToStaticMarkup(<ContratoArriendo formData={formData} />);
        html2pdf().from(htmlContent).save();
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
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="CiudadArriendo" className="form-label">
                                        Ciudad de Arriendo
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="CiudadArriendo"
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
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <h3>Sección Datos Arrendador</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="nombreArrendador" className="form-label">
                                        Nombre del Arrendador
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombreArrendador"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rutArrendador" className="form-label">
                                        RUT del Arrendador
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="rutArrendador"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="direccionArrendador" className="form-label">
                                        Dirección del Arrendador
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="direccionArrendador"
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
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="nombreArrendatario" className="form-label">
                                        Nombre del Arrendatario
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombreArrendatario"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rutArrendatario" className="form-label">
                                        RUT del Arrendatario
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="rutArrendatario"
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
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="ComunaPropiedad" className="form-label">
                                        Comuna de la Propiedad
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="ComunaPropiedad"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fechaInicioContrato" className="form-label">
                                        Fecha de Inicio de Contrato
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="fechaInicioContrato"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="DuracionContrato" className="form-label">
                                        Duración del Contrato (en meses)
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="DuracionContrato"
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
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="PrecioArriendo" className="form-label">
                                        Precio de Arriendo
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="PrecioArriendo"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="DiaPago" className="form-label">
                                        Día de Pago
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="DiaPago"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="GarantiaArriendo" className="form-label">
                                        Garantía de Arriendo
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="GarantiaArriendo"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Aviso" className="form-label">
                                        Aviso de Terminación (en días)
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="Aviso"
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
