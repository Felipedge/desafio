import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext({});

export const CarritoContextProvider = ({ children }) => {
    const [checkout, setCheckout] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchPizzas = async () => {
            const resp = await fetch("/pizzas.json");
            const data = await resp.json();
            data.map((product) => (product.cantidad = 0));

            setCheckout(data);
        };

        fetchPizzas();
    }, []);

    const addItemToCart = (id) => {
        setProduct();

        const findPizza = checkout.filter((product) => product.id === id);
        console.log("find", findPizza);
        if (findPizza.length > 0) {
            findPizza[0].cantidad += 1;
            const newCheckout = product.filter((product) => product.id !== id);
            setProduct([...newCheckout, findPizza[0]]);
        }
        
        
    };



    return (
        <CarritoContext.Provider
            value={{ addItemToCart, product, setCheckout }}
        >
            {children}
        </CarritoContext.Provider>
    );
};