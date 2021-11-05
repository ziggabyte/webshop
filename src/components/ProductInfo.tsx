import Image from 'next/image';
import NextLink from 'next/link';
import { Product } from '../../utils/types';
import { useCart } from 'react-use-cart';
import { Button, Grid, Link, List, ListItem, Typography } from '@material-ui/core';

const ProductInfo = ({ product }: { product: Product }): JSX.Element => {
    const { title, image, description, price, rating } = product;
    const { addItem } = useCart();

    const addToCartHandler = () => {
        addItem(product, 1);
    };

    return (
        <>
            <NextLink href="/" passHref>
                <Link>
                    <Button variant="contained">Go back</Button>
                </Link>
            </NextLink>
            <Grid alignItems="center" container spacing={ 5 }>
                <Grid item md={ 6 } xs={ 12 }>
                    <Image
                        alt={ title }
                        height={ 200 }
                        layout="responsive"
                        src={ image }
                        width={ 150 }
                    />
                </Grid>
                <Grid item md={ 6 } xs={ 12 }>
                    <List>
                        <ListItem>
                            <Typography variant="h4">{ title }</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>{ description }</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>{ rating.rate }/5 stars</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="h5">${ price.toFixed(2) }</Typography>
                        </ListItem>
                        <ListItem>
                            <Button color="primary" onClick={ addToCartHandler } variant="contained">Add to cart</Button>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </>

    );
};

export default ProductInfo;