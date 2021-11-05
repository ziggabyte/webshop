import CartItem from '../components/CartItem';
import NextLink from 'next/link';
import { Product } from '../../utils/types';
import { useCart } from 'react-use-cart';
import { Box, Button, Container, Link, List, ListItem, ListItemText, Typography } from '@material-ui/core';

const Cart = () => {
    const { clearCartMetadata, emptyCart, items, cartTotal } = useCart();
    const products = items as Product[];

    const clearCart = () => {
        emptyCart();
        clearCartMetadata();
    };

    return (
        <Container>
            { items.length === 0 ?
                <>
                    <Typography gutterBottom variant="h4">Cart is empty</Typography>
                    <NextLink href="/" passHref>
                        <Link underline="none">
                            <Button>Continue shopping</Button>
                        </Link>
                    </NextLink>
                </>
                :
                <>
                    <Typography gutterBottom variant="h4">Cart</Typography>
                    <List>
                        { products.map((product) => <CartItem key={ product.id } product={ product } />) }
                        <ListItem>
                            <ListItemText primary="TOTAL" />
                            <Typography>{ `$${ cartTotal }` }</Typography>
                        </ListItem>
                    </List>
                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                        <NextLink href="/" passHref>
                            <Link underline="none">
                                <Button>Continue shopping</Button>
                            </Link>
                        </NextLink>
                        <Button onClick={ clearCart }>Clear cart</Button>
                        <NextLink href="/checkout" passHref>
                            <Link underline="none">
                                <Button>Go to checkout</Button>
                            </Link>
                        </NextLink>
                    </Box>
                </>
            }
        </Container>
    );
};

export default Cart;