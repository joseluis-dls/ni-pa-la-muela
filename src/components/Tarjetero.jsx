import React from "react";
import "../styles/trajetaDerecha.css"

const Tarjetero =() => {
    return(
            <div className="tarjetero">
            <div className="tarjeta">
                <h1>Conoce las mejores experiencias.</h1>
                <div className="imgTextTarjeta">
                <div className="imagenTarjeta">
                </div>
                <div className="resenaTarjeta">
                    <p>Una degustación de menú es una experiencia única que permite a los comensales probar una variedad de platos cuidadosamente seleccionados por el chef. Los menús de degustación a menudo incluyen una variedad de platos pequeños, que pueden ser especialmente preparados para la ocasión y maridados con vino o bebidas seleccionadas. </p>
                    <p> Un restaurante que cuenta con una cocina abierta o en vivo puede ofrecer una experiencia emocionante para los comensales. Observar a los chefs mientras preparan y cocinan los platos puede ser una forma fascinante de apreciar la habilidad y el talento culinario.</p>
                </div>
                </div>
                
            </div>

            <div className="tarjetaImgDer">
            <h1>Platillos Unicos.</h1>
            <div className="imgTextTarjeta">
            <div className="resenaTarjeta">
                    <p>El sushi es una comida japonesa que consiste en arroz aderezado con vinagre, acompañado de mariscos, pescado crudo, verduras y otros ingredientes. Es un platillo que combina diferentes texturas y sabores, y que se ha vuelto muy popular en todo el mundo.</p>
                    <p>El curry es un platillo de origen indio que se prepara con una mezcla de especias y hierbas, y puede incluir carne, pollo, pescado o vegetales. Es un platillo rico en sabores y aromas, y se sirve generalmente con arroz o pan naan.</p>
                </div>
            <div className="imgDere">
            </div>
            </div>
            </div>
            </div>
        
    )
}

export default Tarjetero;