import React from 'react';

function ContratoArriendo({ formData }) {
    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
                <title>Documento DOCX</title>
            </head>
            <body>
                <h4> CONTRATO DE ARRIENDO</h4>

                <p>En{formData.CiudadArriendo}, {formData.FechaFirma}, , entre: Por una parte el <b>ARRENDADOR, </b>don {formData.nombreArrendador} , C.I. N° {formData.rutArrendador} domiciliado en {formData.direccionArrendador}, Comuna de {formData.ComunaArrendador}, y por la otra parte el <b>ARRENDATARIO </b>don {formData.nombreArrendatario}, C.I. N° {formData.rutArrendatario}; Mayores de edad quienes acreditan su identidad con las cédulas mencionadas y exponen: Que han convenido en el contrato de arrendamiento que consta de las siguientes cláusulas:</p>

                <p><b>PRIMERO:</b> EL ARRENDADOR da en arrendamiento al arrendatario, quien acepta para sí el inmueble ubicado en, Comuna de {formData.ComunaPropiedad}, , con el único objeto de destinarlo para USO HABITACION quedando incluida las especies inmuebles detalladas en el inventario que se suscribe aceptado por ambas y pasan a ser parte integrante del contrato.</p>

                <p><b>SEGUNDO:</b> El contrato comienza a regir {formData.fechaInicioContrato}, y tendrá una duración {formData.DuracionContrato}meses, plazo fijo y renovable automáticamente si ambas partes están de acuerdo.</p>

                <p><b>TERCERO:</b> La renta del arrendamiento pactada de común acuerdo entre las partes será de ${formData.PrecioArriendo}, que el arrendatario está obligado a pagar por mensualidades anticipadas dentro de los {formData.DiaPago}, primeros días de cada mes. Esta renta de arrendamiento se reajustará cada {formData.ajusteIPC} meses en la misma variación del IPC del semestre inmediatamente anterior, o su equivalente. Este reajuste se aplicará automáticamente sin que sea necesario aviso previo al arrendatario.</p>

                <p>El valor del arrendamiento será cobrado mensualmente en la fecha señalada.</p>

                <p><b>CUARTO:</b> El arrendatario, a la firma de este contrato, entregará al arrendador el valor de ${formData.GarantiaArriendo}, por concepto de garantía, que será devuelto definitivamente cuando el inmueble arrendado sea entregado a plena satisfacción del arrendador, y luego de corregido y reparado los deterioros que pudieran haber ocurrido en el inmueble durante el período de arrendamiento, y también una vez pagados totalmente, según comprobantes, los servicios de agua, luz, gas, gastos comunes si los hubiera.</p>

                <p>Se deja expresa constancia que la garantía en ningún caso podrá ser aplicada como renta de arrendamiento, la cual será devuelta a los treinta días de entregada la propiedad.</p>

                <p>Las partes podrán poner termino a este contrato luego de cumplido el primer período, dando un aviso anticipado de {formData.Aviso} días, el cual deberá ser notificado por carta certificada.</p>

                <p><b>QUINTO:</b> En caso de atrasos reiterados en el pago de renta de arrendamiento, el arrendador queda autorizado para enviar el presente contrato a una oficina de Cobranza Externa con el fin de exigir su pago. Los honorarios que originen por este trámite serán de exclusiva responsabilidad del arrendatario.</p>

                <p><b>SEXTO:</b> El no pago del arriendo en las condiciones estipuladas, o incumplimiento de cualquiera de las cláusulas del presente contrato, dará derecho al arrendador para considerarlo terminado inmediatamente y se solicitará la entrega del inmueble arrendado sin trámite ni juicio alguno.</p>

                <p><b>SÉPTIMO:</b> El arrendatario estará obligado a cancelar los consumos de agua, luz, gas, extracción de basura, gastos comunes si los hubiera, y presentar los recibos debidamente cancelados al término del contrato.</p>

                <p><b>OCTAVO:</b> El arrendatario declara recibir a su entera satisfacción el inmueble materia de este contrato (y las especies a que se refiere el inventario,) obligándose a restituirlo TODO en el mismo estado que lo recibió, previa consideración del desgaste producido por el tiempo y uso legítimo.</p>

                <p><b>NOVENO:</b> Se prohíbe al arrendatario hacer alteraciones al inmueble (estucos, pintura, papeles, instalaciones, etc.), sin autorización por escrito del arrendador.</p>

                <p>Cualquier mejora que se hiciera, aún con dicha autorización, quedará a beneficio del inmueble, sin costo alguno para el arrendador, salvo que se pactarán condiciones distintas al respecto.</p>

                <p>Está prohibido Subarrendar parte o la totalidad del inmueble.</p>

                <p><b>DECIMO:</b> Se obliga al arrendatario a mantener en perfectas condiciones el inmueble, y en general se obliga a efectuar oportunamente las mejoras de cualquier naturaleza para la conservación y el buen funcionamiento en relación a las disposiciones municipales vigentes sobre aseo u ornato.</p>

                <p><b>DECIMO PRIMERO:</b> El arrendador no responderá de manera alguna, por robo que pudieren ocurrir en el inmueble, o por perjuicios que pudieran producirse en las especies del arrendamiento, producto de incendios, temblores, inundaciones, filtraciones, efectos de humedad o calor, etc.</p>

                <p><b>DECIMO SEGUNDO:</b> Se establece que el arrendador podrá visitar el inmueble para verificar su estado de conservación.</p>

                <p><b>DECIMO TERCERO: </b>Para todos los efectos derivados de este contrato, las partes fijan su domicilio en la ciudad de Santiago y se someten a la jurisdicción de sus Tribunales de Justicia.</p>

                <p>Para constancia firman y ratifican su firma, recibiendo cada parte una copia del presente contrato.</p>

                <p>_____________________________ ______________________________</p>

                <p><b> Arrendador Arrendatario</b></p>

            </body>
        </html>
    );
}

export default ContratoArriendo;
