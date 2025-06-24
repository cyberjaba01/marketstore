import { useState, useEffect } from 'react';

export function initProductsProps() {

    const [productsProps, setProductsProps] = useState([])

    useEffect(() => {

        //const eventSource = new EventSource('http://localhost/marketstorewebsite/api/prods/sse.php');
        fetchProds();


        async function fetchProds() {
            try {
                const response = await fetch('http://localhost/marketstorewebsite/api/api.php/products/');
                const data = await response.json();
                updateStock(data);
            } catch (error) {console.log('Error loading json file', error)}
        }

        function updateStock(data) {
                setProductsProps(data.map(item => (
                        {...item, 
                            oldPrice: item.price, 
                            price: item.price - (item.price * (item.discount / 100))}
                )))
        }

        // eventSource.onmessage = (event) => {
        //     fetchProds();
        // };

        // return () => eventSource.close();
    }, [])

    return productsProps;
}