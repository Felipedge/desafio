import { createContext, useState, useEffect } from 'react';

export const AppPizzaContext = createContext({});

export const AppPizzaContextProvider = ({ children }) => {
    const [pizza, setPizza] = useState([]);

    useEffect(() => {
        const fetchPizzas = async () => {
            const resp = await fetch('/pizzas.json');
            const data = await resp.json();

            setPizza(data);
        };

        fetchPizzas();
    }, []);

    return (
        <AppPizzaContext.Provider value={{ pizza }}>
            {children}
        </AppPizzaContext.Provider>
    );
}