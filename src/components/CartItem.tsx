import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NextLink from 'next/link';
import { Product } from '../../utils/types';
import RemoveIcon from '@material-ui/icons/Remove';
import { useCart } from 'react-use-cart';
import useStyles from '../../utils/styles';
import { Avatar, Box, Button, IconButton, Link, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core';

const CartItem = ({ product }: { product: Product }): JSX.Element => {
    const { title, id, image } = product;
    const { removeItem, items, updateItemQuantity } = useCart();
    const classes = useStyles();
    const item = items.filter((item) => {
        return item.id === id;
    });

    const quantity = item[0].quantity? item[0].quantity : 0 ;

    const deleteFromCart = () => {
        removeItem(id);
    };
    const increaseQuantity = () => {
        updateItemQuantity(id, quantity + 1);
    };
    const decreaseQuantity = () => {
        updateItemQuantity(id, quantity - 1);
    };

    return (
        <ListItem>
            <Box className={ classes.cartItem }>

                <NextLink href={ `/${id}` } passHref>
                    <Link underline="none">
                        <Box display="flex" flexDirection="row">
                            <ListItemAvatar>
                                <Avatar alt={ title } src={ image } />
                            </ListItemAvatar>
                            <ListItemText primary={ title } />
                        </Box>
                    </Link>
                </NextLink>
                <Box display="flex" flexDirection="row">
                    <Box display="flex" flexDirection="row">
                        <Button onClick={ decreaseQuantity }>
                            <RemoveIcon fontSize="small"/>
                        </Button>
                        <ListItemText primary={ quantity } />
                        <Button onClick={ increaseQuantity }>
                            <AddIcon fontSize="small"/>
                        </Button>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="flex-end" width="3rem">
                        <ListItemText className={ classes.cartItemText } primary={ `$${item[0].itemTotal}` }/>
                    </Box>
                </Box>
            </Box>
            <ListItemSecondaryAction>
                <IconButton edge="end" onClick={ deleteFromCart }><DeleteIcon /></IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default CartItem;


