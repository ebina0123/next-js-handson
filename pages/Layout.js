import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    root: {
        width: '100%',
        position: 'fixed',
        left: 0,
        bottom: 0,
        zIndex: 1000,
        textAlign: 'center',
    },
  }));


  const Layout = ({ children }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState();

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                Link href='/ToDo'
                label="ToDo List"
                icon={<DoneAllIcon />}
            />
            <BottomNavigationAction
                Link href='/profile'
                label="Profile"
                icon={<PersonIcon />}
            />
        </BottomNavigation>
    );
};

export default Layout;
