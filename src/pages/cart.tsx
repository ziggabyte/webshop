import CartItem from '../components/CartItem';
import { Product } from '../../utils/types';
import { useCart } from 'react-use-cart';
import { Button, List, ListItem, ListItemText, Typography } from '@material-ui/core';

const Cart = () => {
    const { clearCartMetadata, emptyCart, items, cartTotal } = useCart();
    const products = items as Product[];

    const clearCart = () => {
        emptyCart();
        clearCartMetadata();
    };

    return (
        <>
            { items.length === 0 ?
                <Typography variant="h4">Cart is empty</Typography>
                :
                <>
                    <Typography variant="h4">Cart</Typography>
                    <List>
                        { products.map((product) => <CartItem key={ product.id } product={ product } />) }
                        <ListItem>
                            <ListItemText primary="TOTAL" />
                            <Typography>{ cartTotal }</Typography>
                        </ListItem>
                    </List>
                    <Button onClick={ clearCart }>Clear cart</Button>
                </>
            }
        </>
    );
};

export default Cart;