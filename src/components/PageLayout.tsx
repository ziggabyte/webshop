import { FunctionComponent } from 'react';
import NextLink from 'next/link';

import { AppBar, Box, Container, Link, Toolbar, Typography } from '@material-ui/core';

import useStyles from '../../utils/styles';

const PageLayout: FunctionComponent = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={ classes.body }>
            <AppBar className={ classes.header } position="static">
                <Toolbar>
                    <Typography component="h1" variant="h2">
                        MY WEBSHOP
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className={ classes.main }>
                <Box>
                    { children }
                </Box>
            </Container>
            <footer className={ classes.footer }>
                <NextLink href="/" passHref>
                    <Link underline="none">
                        About us
                    </Link>
                </NextLink>
                <NextLink href="/" passHref>
                    <Link underline="none">
                        Privacy policy
                    </Link>
                </NextLink>
                <NextLink href="/" passHref>
                    <Link underline="none">
                        Contact
                    </Link>
                </NextLink>
            </footer>
        </div>
    );
};

export default PageLayout;