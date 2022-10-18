import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CarritoContext } from "../Context/CarritoContext";
import { AppPizzaContext } from "../Context/AppPizzaContext";
import Button from "react-bootstrap/Button";
import '../Styles/detalles.css';


const Detalles = () => {
    const { id } = useParams();
    const { pizza } = useContext(AppPizzaContext);
    const { addItemToCart } = useContext(CarritoContext);

    useEffect(() => {
        console.log(typeof id);
    }, [id, pizza]);

    return (
        <>
            {pizza.filter((product) => product.id === id).map((product, i) => (
                    <div key={i}>
                        <section className="detail">
                            <div>
                                <img className="image" src={product.img} alt=""></img>
                            </div>
                            <div className="detailsPizza">
                                <h1 className="productName">{product.name}</h1>
                                <p className="texto">{product.desc}</p>
                                <p className="texto">Ingredientes:</p>
                                <p className="texto">{product.ingredients[0]}</p>
                                <p className="texto">{product.ingredients[1]}</p>
                                <p className="texto">{product.ingredients[2]}</p>
                                <p className="texto">{product.ingredients[3]}</p>
                                <h1 className="texto">Precio: ${product.price}</h1>
                                <Button
                                    variant="primary"
                                    onClick={() => addItemToCart(product.id)}
                                >
                                    Añadir
                                </Button>
                            </div>
                        </section>
                    </div>
                ))}
        </>
    );
};

export default Detalles;