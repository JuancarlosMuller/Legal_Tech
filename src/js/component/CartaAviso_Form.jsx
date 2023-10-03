import React, { useState } from 'react';

import Docxtemplater from 'docxtemplater';
import JSZip from 'jszip'; // Importa JSZip de esta manera
import htmlDocx from 'html-docx-js/dist/html-docx';
import { saveAs } from 'file-saver';
import CartaAviso from './CartaAviso';
import ReactDOMServer from "react-dom/server";




function CartaAviso_Form() {
    const [decodedData, setDecodedData] = useState('');

    const [formData, setFormData] = useState({
        nombreEmpresa: '',
        rutEmpresa: '',
        direccionEmpresa: '',
        nombreRepresentante: '',
        rutRepresentante: '',
        nombreTrabajador: '',
        rutTrabajador: '',
        domicilioTrabajador: '',
        causalDespido: 'opcion1', // Valor predeterminado
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


    const generateDocument = () => {
        // Renderizar el componente HTMLContent con los datos del formulario
        const htmlContent = ReactDOMServer.renderToStaticMarkup(<CartaAviso formData={formData} />);
        console.log('HTML Content:', htmlContent);
        // Convertir el documento HTML a DOCX
        const convertedDocx = htmlDocx.asBlob(htmlContent);

        // Descargar el documento generado como un archivo DOCX
        const fileName = 'DocumentoGenerado.docx';
        if (window.navigator.msSaveBlob) {
            // Manejar la descarga en navegadores IE/Edge
            window.navigator.msSaveBlob(convertedDocx, fileName);
        } else {
            // Descargar en navegadores modernos
            const link = document.createElement('a');
            link.href = URL.createObjectURL(convertedDocx);
            link.download = fileName;
            link.click();
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault(); // Evita el envío del formulario
        generateDocument(); // Genera el documento al hacer clic en Enviar
    };


    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Sección Empresa</h3>
                        {/* Nombre de la Empresa */}
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
                        {/* RUT de la Sociedad */}
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
                        {/* Dirección de la Sociedad */}
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
                        {/* Nombre del Representante */}
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
                        {/* RUT del Representante */}
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
                    <div className="col-md-6">
                        <h3>Sección Trabajador</h3>
                        {/* Nombre del Trabajador */}
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
                        {/* RUT del Trabajador */}
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
                        {/* Domicilio del Trabajador */}
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
                <div className="mt-4">
                    <h3>Datos de Aviso</h3>
                    {/* Causal de Despido */}
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
                    {/* Fecha Inicio Contrato de Trabajo */}
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
                    {/* Fecha Término Contrato de Trabajo */}
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
                    {/* Agregar más campos aquí según tus necesidades */}
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default CartaAviso_Form;
