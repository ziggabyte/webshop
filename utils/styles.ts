import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    body: {
        boxSizing: 'border-box',
        height: '95vh',
        margin: 0,
        padding: 0,
        width: '100%',
    },
    cartItemText: {
        fontSize: 20,
    },
    footer: {
        alignItems: 'center',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        height: '10vh',
        justifyContent: 'center',
        padding: '5px',
    },
    gridContainer: {
        paddingBottom: 10,
        paddingTop: 10,
    },
    header: {
        backgroundColor: 'white',
    },
    listItem: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        height: '5rem',
        justifyContent: 'space-between',
        padding: 5,
        width: '100%',
    },
    paddedLink: {
        padding: '10px',
    },
    toolbar: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '12rem',
    },
});

export default useStyles;