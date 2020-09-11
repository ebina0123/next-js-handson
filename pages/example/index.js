import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/styles';
import Constainer from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Example = () => {
  const [text, setText] = React.useState('');

  const classes = useStyle();

  const handleClick = () => {
    setText('');
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
    console.log(`text: ${value}`);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="state" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Change Text
          </Typography>
          <Button color="inherit">
            <HomeIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <Constainer maxWidth="sm">
        <div>
          <Box m={2} />
          <TextField name="example" label="text" value={text} onChange={handleChange} />
          <Button onClick={handleClick}>Clear</Button>
        </div>

        <br />

        <div>text: {text}</div>

        <div style={{ marginTop: 40 }}>
          <Link href="/example">back</Link>
        </div>
      </Constainer>
    </div>
  );
};

export default Example;
