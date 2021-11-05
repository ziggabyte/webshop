import NextLink from 'next/link';
import { useCart } from 'react-use-cart';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';

import { Product } from '../../utils/types';

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
                            height="400"
                            image={ image }
                            title={ title }
                        />
                        <CardContent>
                            <Typography noWrap>{ title }</Typography>
                        </CardContent>
                    </CardActionArea>
                </NextLink>
                <CardActions>
                    <Box padding={ 2 }>
                        <Typography variant="h6">${ price.toFixed(2) }</Typography>
                    </Box>
                    <Button onClick={ addToCartHandler } variant="contained">Add to cart</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProductCard;