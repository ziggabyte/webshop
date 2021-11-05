import { FunctionComponent } from 'react';
import NextLink from 'next/link';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Box, Container, Link, Toolbar, Typography } from '@material-ui/core';

import useStyles from '../../utils/styles';

const PageLayout: FunctionComponent = ({ children }) => {
    const classes = useStyles();

    return (
        <>
            <Box className={ classes.header } position="sticky">
                <Toolbar className={ classes.toolbar }>
                    <NextLink href="/" passHref>
                        <Link color="textSecondary" title="Home" underline="none">
                            <Typography component="h1" variant="h2">
                                ZIGGIS WEBSHOP
                            </Typography>
                        </Link>
                    </NextLink>
                    <NextLink href="/cart" passHref>
                        <Link color="textSecondary" title="Cart" underline="none">
                            <Box display="flex" flexDirection="row" justifyContent="space-between" width="7rem">
                                <Typography variant="h5">Cart</Typography>
                                <ShoppingCartIcon fontSize="large" />
                            </Box>
                        </Link>
                    </NextLink>
                </Toolbar>
            </Box>
            <Container>
                <Box>
                    { children }
                </Box>
            </Container>
            <Box className={ classes.footer }>
                <NextLink href="/" passHref>
                    <Link color="textPrimary" title="About us" underline="none">
                        <Typography className={ classes.paddedLink }>
                            About us
                        </Typography>
                    </Link>
                </NextLink>
                <NextLink href="/" passHref>
                    <Link color="textPrimary" title="Privacy policy" underline="none">
                        <Typography className={ classes.paddedLink }>
                            Privacy policy
                        </Typography>
                    </Link>
                </NextLink>
                <NextLink href="/" passHref>
                    <Link color="textPrimary" title="Contact" underline="none">
                        <Typography className={ classes.paddedLink }>
                            Contact
                        </Typography>
                    </Link>
                </NextLink>
            </Box>
        </>
    );
};

export default PageLayout;