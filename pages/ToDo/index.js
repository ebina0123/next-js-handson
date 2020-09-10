import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Toolbar, Container, Button, Box, Checkbox } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import Typography from '@material-ui/core/Typography';

function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '60ch',
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
      <Head>
        <title>ToDo</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Link href="../ToDo/">
            <a>
              <Typography variant="h4" className={classes.title}>
                <DoneAllIcon />
                ToDo List
              </Typography>
            </a>
          </Link>
          <Box m={2} />
          <Link href="../profile/">
            <b>
            <Typography variant="h4" className={classes.title}>
                <PersonIcon />
                Profile
              </Typography>
            </b>
          </Link>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <div>
          <Box m={2} />
          <Typography variant="h3">
            <TextField
              id="standard-full-width"
              name="newtask"
              label="新しい予定を入れてください"
              style={{ width: 300 }}
              size="medium"
              value={tmp}
              onChange={handleChange}
            />
            <Button variant="contained" onClick={addTask}>
              追加
            </Button>
          </Typography>
        </div>

        <Box m={2} />

        {todos.map((todo, index) => {
          return (
            <list>
              <Typography variant="h4">
                <li key={index}>
                  <Checkbox
                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                    onChange={() =>
                      setTimeout(() => {
                        delTask(index);
                      }, 1000)
                    }
                  />
                  {todo}
                </li>
              </Typography>
            </list>
          );
        })}
      </Container>
      <style jsx>{`
        list {
          list-style: none;
        }
        a {
          color: #000;
          text-decoration: none;
        }
        b {
          color: #000;
          opacity:0.3;
        }
        add {
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default App;
