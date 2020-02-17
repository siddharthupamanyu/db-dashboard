import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import StorageIcon from '@material-ui/icons/Storage';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DataList from './DataList';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function EnvironmentSelect(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        showImport: false,
        file: 0
    })

    const environmentDb = {
        'EPDx': ['EPDD', 'EPDT', 'EPDU', 'EPFP'],
        'NMAx': ['NMAD', 'NMAT', 'NMAU', 'NMAP'],
        'IFNMAx': ['IFNMAD', 'IFNMAT', 'IFNMAU', 'IFNMAP']
    }

    Object.freeze(environmentDb);

    const handleEnvironment = () => {
        setState({ ...state, showImport: true });
    }

    return (
        <React.Fragment>
            {!state.showImport ?
                <List component="nav" className={classes.root} aria-label="environment">
                    {environmentDb[props.data].map((text) => (
                        <ListItem button id={text} key={text} onClick={handleEnvironment}>
                            <ListItemIcon>
                                <StorageIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                : <DataList/>}
        </React.Fragment>
    );
}