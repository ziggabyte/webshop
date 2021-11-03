import NextLink from 'next/link';
import { Product } from '../../utils/types';
import { useCart } from 'react-use-cart';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';

const ProductCard = ({ product }: { product: Product}): JSX.Element => {
    const { title, id, price, image } = product;
    const { addItem } = useCart();

    const addToCartHandler = () => {
        addItem(product, 1);
    };

    return (
        <Grid item lg={ 3 } md={ 4 } sm={ 6 } xs={ 12 }>
            <Card>
                <NextLink href={ `${ id }` } passHref>
                    <CardActionArea>
                        <CardMedia
                            alt={ title }
                            component="img"
                            height="170"
                            image={ image }
                            title={ title }
                        />
                        <CardContent>
                            <Typography noWrap>{ title }</Typography>
                        </CardContent>
                    </CardActionArea>
                </NextLink>
                <CardActions>
                    <Typography>${ price }</Typography>
                    <Button onClick={ addToCartHandler }>Add to cart</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProductCard;