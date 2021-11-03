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
        alignItems: 'center',
        backgroundColor: 'gray',
        display: 'flex',
        flexDirection: 'row',
        height: '10vh',
        justifyContent: 'center',
        padding: '5PX',
    },
    gridContainer: {
        paddingBottom: 10,
        paddingTop: 10,
    },
    header: {
        backgroundColor: 'gray',
    },
    paddedLink: {
        padding: '10px',
    },
});

export default useStyles;