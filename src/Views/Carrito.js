import { useContext } from "react";
import { CarritoContext } from "../Context/CarritoContext";


import '../Styles/carrito.css'

const Carrito = () => {
    const { product } = useContext(CarritoContext);

    return (
        <>
            <h1 className="titulo">Detalles del pedido:</h1>
            <div className="container">
                {product.map((products, index) => (
                    <div className="productoscarro" key={index}>
                        <div className="firstItem">
                            <img src={products.img} className="imgcarrito" alt={products.name}
                            ></img>
                            <p>{products.name}</p>
                        </div>
                        <div className="total">
                            <p className="precioTotal">Total: ${products.cantidad * products.price}</p>
                            <p className="texto">Cantidad: {products.cantidad}</p>
                        </div>

                        </div>
                
            ))}
                    </div>
        </>
            );
};

            export default Carrito;