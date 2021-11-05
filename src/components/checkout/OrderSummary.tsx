import { useCart } from 'react-use-cart';
import { Box, Button, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';

import OrderSummaryItem from './OrderSummaryItem';
import { Product, Values } from '../../../utils/types';

interface OrderSummaryProps {
    handleBack: (values: Values) => void;
    handleNext: (values: Values, last?: boolean) => void;
    orderData: Values;
}

const OrderSummary = ({ handleBack, handleNext, orderData }: OrderSummaryProps): JSX.Element => {
    const { cartTotal, items } = useCart();
    const products = items as Product[];

    const onSubmit = (values: Values) => {
        handleNext(values, true);
    };

    return (
        <Formik
            initialValues={ orderData }
            onSubmit={ onSubmit }>
            { ({ values }) => (
                <Form>
                    <Box marginTop={ 4 }>
                        <Box display="flex" flexDirection="row" justifyContent="space-between">
                            <Typography>Product</Typography>
                            <Typography>Quantity</Typography>
                            <Typography>Price</Typography>
                        </Box>
                        { products.map((product) => <OrderSummaryItem key={ product.id } product={ product } />) }
                        <Box display="flex" flexDirection="row" justifyContent="flex-end">
                            <Typography>TOTAL: ${ cartTotal }</Typography>
                        </Box>
                        <Button
                            onClick={ () => {
                                handleBack(values);
                            } }
                            type="button"
                            variant="contained">
                            Back to Shipping Address
                        </Button>
                        <Button
                            type="submit"
                            variant="contained">
                            Place order
                        </Button>
                    </Box>
                </Form>
            ) }
        </Formik>
    );
};

export default OrderSummary;

/* { ({ values }) => {

};
} */