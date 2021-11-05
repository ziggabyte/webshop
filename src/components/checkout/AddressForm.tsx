import NextLink from 'next/link';
import { Box, Button, Grid, Link, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';

import { Values as Values } from '../../../utils/types';

interface AddressFormProps {
    handleNext: (values: Values, last?: boolean) => void;
    orderData: Values;
}

const AddressForm = ({ handleNext, orderData }: AddressFormProps): JSX.Element => {
    const onSubmit = (values: Values) => {
        handleNext(values);
    };

    return (
        <Formik
            initialValues={ orderData }
            onSubmit={ onSubmit }>
            { ({ values, handleChange, handleBlur }) =>
                (
                    <Box pt={ 5 }>
                        <Form>
                            <Grid container spacing={ 3 }>
                                <Grid item sm={ 6 } xs={ 12 }>
                                    <TextField
                                        fullWidth
                                        label="First name"
                                        name="firstName"
                                        onBlur={ handleBlur }
                                        onChange={ handleChange }
                                        required
                                        type="text"
                                        value={ values.firstName }
                                    />
                                </Grid>
                                <Grid item sm={ 6 } xs={ 12 }>
                                    <TextField
                                        fullWidth
                                        label="Last name"
                                        name="lastName"
                                        onBlur={ handleBlur }
                                        onChange={ handleChange }
                                        required
                                        type="text"
                                        value={ values.lastName }
                                    />
                                </Grid>
                                <Grid item xs={ 12 }>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        onBlur={ handleBlur }
                                        onChange={ handleChange }
                                        required
                                        type="email"
                                        value={ values.email }
                                    />
                                </Grid>
                                <Grid item xs={ 12 }>
                                    <TextField
                                        fullWidth
                                        label="Street address"
                                        name="address1"
                                        onBlur={ handleBlur }
                                        onChange={ handleChange }
                                        required
                                        type="text"
                                        value={ values.address1 }
                                    />
                                </Grid>
                                <Grid item xs={ 12 }>
                                    <TextField
                                        fullWidth
                                        label="c/o (not required)"
                                        name="address2"
                                        onBlur={ handleBlur }
                                        onChange={ handleChange }
                                        type="text"
                                        value={ values.address2 }
                                    />
                                </Grid>
                                <Grid item sm={ 4 } xs={ 12 }>
                                    <TextField
                                        fullWidth
                                        label="City"
                                        name="city"
                                        onBlur={ handleBlur }
                                        onChange={ handleChange }
                                        required
                                        type="text"
                                        value={ values.city }
                                    />
                                </Grid>
                                <Grid item sm={ 4 } xs={ 12 }>
                                    <TextField
                                        fullWidth
                                        label="Zip code"
                                        name="zipCode"
                                        onBlur={ handleBlur }
                                        onChange={ handleChange }
                                        required
                                        type="text"
                                        value={ values.zipCode }
                                    />
                                </Grid>
                                <Grid item sm={ 4 } xs={ 12 }>
                                    <TextField
                                        fullWidth
                                        label="Country"
                                        name="country"
                                        onBlur={ handleBlur }
                                        onChange={ handleChange }
                                        required
                                        type="text"
                                        value={ values.country }
                                    />
                                </Grid>
                            </Grid>
                            <NextLink href="/cart" passHref>
                                <Link underline="none">
                                    <Button type="button" variant="contained">Back to cart</Button>
                                </Link>
                            </NextLink>
                            <Button
                                type="submit"
                                variant="contained">
                                Next
                            </Button>
                        </Form>
                    </Box>
                )
            }
        </Formik>
    );
};

export default AddressForm;