import PageLayout from '../components/PageLayout';
import { Product } from '../../utils/types';
import ProductInfo from '../components/ProductInfo';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

const ProductInfoPage = () => {
    const router = useRouter();
    const path = router.asPath;
    const [product, setProduct] = useState<Product>({
        category: 'Loading',
        description: 'Testing the test',
        id: '34',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        price: 23345.54,
        rating: {
            count: 34,
            rate: 45,
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

    return (
        <PageLayout>
            <ProductInfo product={ product }/>
        </PageLayout>
    );
};

export default ProductInfoPage;