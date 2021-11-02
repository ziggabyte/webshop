import DeleteIcon from '@material-ui/icons/Delete';
import { Product } from '../../utils/types';
import { useCart } from 'react-use-cart';
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core';

const CartItem = ({ product }: { product: Product }): JSX.Element => {
    const { title, price, id } = product;
    const { removeItem } = useCart();

    const deleteFromCart = () => {
        removeItem(id);
    };

    return (
        <ListItem>
            <ListItemText primary={ title } />
            <Typography>{ price }</Typography>
            <ListItemSecondaryAction>
                <IconButton edge="end" onClick={ deleteFromCart }><DeleteIcon /></IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default CartItem;


