import { Product } from '../../utils/types';
import ProductInfo from '../components/ProductInfo';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

const ProductInfoPage = () => {
    const router = useRouter();
    const path = router.asPath;
    const [product, setProduct] = useState<Product>({
        category: 'Loading',
        description: 'Item is loading',
        id: '234',
        image: 'https://i.pinimg.com/originals/10/b2/f6/10b2f6d95195994fca386842dae53bb2.png',
        price: 0.0,
        rating: {
            count: 0,
            rate: 0,
        },
        title: 'Loading',
    });

    const fetchProduct = async () => {
        await fetch(`https://fakestoreapi.com/products${path}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    };

    useEffect(() => {
        fetchProduct();
    });

    return <ProductInfo product={ product }/>;
};

export default ProductInfoPage;