import { FunctionComponent } from 'react';
import NextLink from 'next/link';

import { AppBar, Box, Container, Link, Toolbar, Typography } from '@material-ui/core';

import useStyles from '../../utils/styles';

const PageLayout: FunctionComponent = ({ children }) => {
    const classes = useStyles();

    return (
        <>
            <AppBar className={ classes.header } position="static">
                <Toolbar>
                    <NextLink href="/" passHref>
                        <Link color="textSecondary" underline="none">
                            <Typography component="h1" variant="h2">
                                MY WEBSHOP
                            </Typography>
                        </Link>
                    </NextLink>
                </Toolbar>
            </AppBar>
            <Container>
                <Box>
                    { children }
                </Box>
            </Container>
            <Box className={ classes.footer }>
                <NextLink href="/" passHref>
                    <Link color="textPrimary" underline="none">
                        <Typography className={ classes.paddedLink }>
                            About us
                        </Typography>
                    </Link>
                </NextLink>
                <NextLink href="/" passHref>
                    <Link color="textPrimary" underline="none">
                        <Typography className={ classes.paddedLink }>
                            Privacy policy
                        </Typography>
                    </Link>
                </NextLink>
                <NextLink href="/" passHref>
                    <Link color="textPrimary" underline="none">
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