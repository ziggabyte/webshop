import { useCart } from 'react-use-cart';
import { useState } from 'react';
import { Container, Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';

import AddressForm from '../components/checkout/AddressForm';
import OrderSummary from '../components/checkout/OrderSummary';
import { Values } from '../../utils/types';

const Checkout = () => {
    const [orderData, setOrderData] = useState<Values>({
        address1: '',
        city: '',
        country: '',
        email: '',
        firstName: '',
        lastName: '',
        zipCode: '',
    });
    const [thisStep, setThisStep] = useState(0);
    const { clearCartMetadata, emptyCart } = useCart();

    const steps = ['Shipping address', 'Order summary'];
    const handleOrder = () => {
        //Vad som händer med ordern
        //använda values och items fr useCart()
    };
    const getContent = (step: number) => {
        return step === 0 ?
            <AddressForm
                handleNext={ handleNext }
                orderData={ orderData }
            />
            :
            <OrderSummary
                handleBack={ handleBack }
                handleNext={ handleNext }
                orderData={ orderData }
            />;
    };
    const handleNext = (newValues: Values, lastStep = false) => {
        setOrderData((oldValues) => ({ ...oldValues, ...newValues }));
        if (lastStep) {
            handleOrder();
            emptyCart();
            clearCartMetadata();
        }
        setThisStep(thisStep + 1);
    };

    const handleBack = (newValues: Values) => {
        setOrderData((oldValues)=> ({ ...oldValues, ...newValues }));
        setThisStep(thisStep - 1);
    };

    return (
        <Container>
            <Typography variant="h4">Checkout</Typography>
            <Paper variant="outlined">
                <Stepper activeStep={ thisStep }>
                    { steps.map((label) => (
                        <Step key={ label }>
                            <StepLabel>{ label }</StepLabel>
                        </Step>
                    )) }
                </Stepper>
            </Paper>
            <>
                { thisStep === steps.length ? (
                    <>
                        <Typography gutterBottom variant="h5">
                            Thank you for ordering from us!
                        </Typography>
                        <Typography variant="subtitle1">
                            You will recieve an email with your order details within the next 15 minutes.
                            Your order number is KJ98701.
                        </Typography>
                    </>
                ) : (
                    <>
                        { getContent(thisStep) }
                    </>
                ) }
            </>
        </Container>
    );
};

export default Checkout;