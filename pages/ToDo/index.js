import React, { useState } from 'react';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Tab, Toolbar, Container, Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import DoneAllIcon from '@material-ui/icons/DoneAll';

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

const App = () => {
  const [todos, setTodos] = useState([]);
  const [tmp, setTmp] = useState();

  const addTask = () => {
    setTodos([...todos, tmp]);
    setTmp('');
  };

  const handleChange = (e) => {
    setTmp(e.target.value);
  };

  const delTask = (e) => {
    const newTodos = todos.filter((todo, todoindex) => {
      return e !== todoindex;
    });
    setTodos(newTodos);
  };

  const classes = useStyle();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link href="../ToDo/">
            <a>
              <DoneAllIcon /> ToDo List
            </a>
          </Link>
          <Link href="../profile/">
            <a>
              <PersonIcon /> Profile
            </a>
          </Link>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <div>
          <TextField name="newtask" label="newtask" value={tmp} onChange={handleChange} />
          <Button onClick={addTask}>Add</Button>
        </div>

        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <Button onClick={() => delTask(index)}>×</Button>
              {todo}
            </li>
          );
        })}
      </Container>
    </div>
  );
};

export default App;
