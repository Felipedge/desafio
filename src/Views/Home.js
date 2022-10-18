import { useContext } from "react";

import { AppPizzaContext } from "../Context/AppPizzaContext";
import { CarritoContext } from "../Context/CarritoContext";

import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";

import '../Styles/home.css'


const Home = () => {
    const navigate = useNavigate();
    const { pizza } = useContext(AppPizzaContext);

    const navigatePizza = (id) => {
        navigate(`/pizza/${id}`);
    };
    const { addItemToCart } = useContext(CarritoContext);

    return (
        <>
            <div className="cards">
                {pizza.map((products, index) => (
                    <Card key={index} classname="col-sm-3">
                        <Card.Img  className="img" variant="top" src={products.img} alt="{products.name" />
                        <Card.Body>
                            <Card.Title>{products.name}</Card.Title>

                            <h5 className="ingredientes">Ingredientes:</h5>
                            <p>-{products.ingredients[0]}</p>
                            <p>-{products.ingredients[1]}</p>
                            <p>-{products.ingredients[2]}</p>
                            <p>-{products.ingredients[3]}</p>
                            <h3 className="preciopizza">${products.price}</h3>
                            <Button onClick={() => navigatePizza(products.id)}variant="primary">
                                Detalles
                            </Button>{" "}
                            <Button
                                variant="primary"onClick={() => addItemToCart(products.id)}>
                                Añadir al carrito
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default Home;