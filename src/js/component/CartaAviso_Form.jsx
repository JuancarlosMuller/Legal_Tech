import React, { useState } from 'react';

import Docxtemplater from 'docxtemplater';
import JSZip from 'jszip'; // Importa JSZip de esta manera
import htmlDocx from 'html-docx-js/dist/html-docx';
import { saveAs } from 'file-saver';
import CartaAviso from './CartaAviso';
import ReactDOMServer from "react-dom/server";




function CartaAviso_Form() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        nombreEmpresa: '',
        rutEmpresa: '',
        direccionEmpresa: '',
        nombreRepresentante: '',
        rutRepresentante: '',
        nombreTrabajador: '',
        rutTrabajador: '',
        domicilioTrabajador: '',
        causalDespido: 'opcion1',
        fechaInicioContrato: '',
        fechaTerminoContrato: '',
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
        const htmlContent = ReactDOMServer.renderToStaticMarkup(<CartaAviso formData={formData} />);
        const convertedDocx = htmlDocx.asBlob(htmlContent);
        const fileName = 'DocumentoGenerado.docx';
        if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(convertedDocx, fileName);
        } else {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(convertedDocx);
            link.download = fileName;
            link.click();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 3) {
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
                        <h3>Sección Empresa</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="nombreEmpresa" className="form-label">
                                        Nombre de la Empresa
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombreEmpresa"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rutEmpresa" className="form-label">
                                        RUT de la Sociedad
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="rutEmpresa"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="direccionEmpresa" className="form-label">
                                        Dirección de la Sociedad
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="direccionEmpresa"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="nombreRepresentante" className="form-label">
                                        Nombre del Representante
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombreRepresentante"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rutRepresentante" className="form-label">
                                        RUT del Representante
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="rutRepresentante"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <h3>Sección Trabajador</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="nombreTrabajador" className="form-label">
                                        Nombre del Trabajador
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombreTrabajador"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rutTrabajador" className="form-label">
                                        RUT del Trabajador
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="rutTrabajador"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="domicilioTrabajador" className="form-label">
                                        Domicilio del Trabajador
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="domicilioTrabajador"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <h3>Datos de Aviso</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="causalDespido" className="form-label">
                                        Causal de Despido
                                    </label>
                                    <select
                                        className="form-select"
                                        id="causalDespido"
                                        onChange={handleInputChange}
                                    >
                                        <option value="opcion1">Opción 1</option>
                                        <option value="opcion2">Opción 2</option>
                                        <option value="opcion3">Opción 3</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fechaInicioContrato" className="form-label">
                                        Fecha Inicio Contrato de Trabajo
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="fechaInicioContrato"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fechaTerminoContrato" className="form-label">
                                        Fecha Término Contrato de Trabajo
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="fechaTerminoContrato"
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
                            {step === 3 ? 'Enviar' : 'Siguiente'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CartaAviso_Form;