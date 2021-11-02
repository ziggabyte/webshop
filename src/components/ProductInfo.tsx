import Image from 'next/image';
import NextLink from 'next/link';
import { Product } from '../../utils/types';
import { Button, Grid, Link, List, ListItem, Typography } from '@material-ui/core';

const ProductInfo = ({ product }: { product: Product }): JSX.Element => {
    const { title, image, description, price, rating } = product;
    return (
        <>
            <NextLink href="/" passHref>
                <Link>
                    <Button>Go back</Button>
                </Link>
            </NextLink>
            <Grid alignItems="center" container spacing={ 5 }>
                <Grid item md={ 4 } xs={ 12 }>
                    <Image
                        alt={ title }
                        height={ 200 }
                        layout="responsive"
                        src={ image }
                        width={ 150 }
                    />
                </Grid>
                <Grid item md={ 4 } xs={ 12 }>
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
                            <Typography variant="h5">${ price }</Typography>
                        </ListItem>
                        <ListItem>
                            <Button color="primary">Add to cart</Button>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </>

    );
};

export default ProductInfo;