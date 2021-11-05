import { useCart } from 'react-use-cart';
import { ListItem, ListItemText } from '@material-ui/core';

import { Product } from '../../../utils/types';
import useStyles from '../../../utils/styles';

const OrderSummaryItem = ({ product }: { product: Product }): JSX.Element => {
    const { items } = useCart();
    const { title, id } = product;
    const cartItem = items.filter((item) => {
        return item.id === id;
    });
    const quantity = cartItem[0].quantity? cartItem[0].quantity : 0 ;
    const classes = useStyles();
    return (
        <ListItem className={ classes.listItem }>
            <ListItemText primary={ title } />
            <ListItemText primary={ quantity } />
            <ListItemText primary={ `$${cartItem[0].itemTotal?.toFixed(2)}` }/>
        </ListItem>
    );
};

export default OrderSummaryItem;