import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { Product } from '../../utils/types';
import ProductCard from '../components/ProductCard';
import useStyles from '../../utils/styles';

export default function Home() {
    const classes = useStyles();
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
        await fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <Grid className={ classes.gridContainer } container spacing={ 2 }>
            { products.map((product) => (
                <ProductCard key={ product.id } product={ product } />)) }
        </Grid>
    );
}