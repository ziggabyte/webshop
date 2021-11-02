import NextLink from 'next/link';
import { Product } from '../../utils/types';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';

const ProductCard = ({ product }: { product: Product}): JSX.Element => {
    const { title, id, price, image } = product;

    return (
        <Grid item md={ 3 }>
            <Card>
                <NextLink href={ `${id }` } passHref>
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
                    <Button>Add to cart</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProductCard;