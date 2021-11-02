import { Product } from '../../utils/types';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
    const { title, price, image } = product;

    return (
        <Grid item md={ 3 }>
            <Card>
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
                <CardActions>
                    <Typography>${ price }</Typography>
                    <Button>Add to cart</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProductCard;