import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    body: {
        boxSizing: 'border-box',
        height: '95vh',
        margin: 0,
        padding: 0,
        width: '100%',
    },
    footer: {
        backgroundColor: 'gray',
        color: 'white',
        height: '10vh',
        textAlign: 'center',
    },
    header: {
        backgroundColor: 'gray',
    },
    main: {
        height: '75vh',
    },
});

export default useStyles;