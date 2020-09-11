import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Toolbar, Button, Box, Checkbox, FormControlLabel, Divider, Container } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme) => ({
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
  check: {},
}));

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [deledtodos, setDeltodos] = React.useState([]);
  const [tmp, setTmp] = React.useState();

  //  React.useEffect(() => {
  //    const savedTodos = localStorage.getItem("todos");
  //    if (savedTodos) {
  //      setTodos(todos);
  //    }
  //  });

  const addTask = () => {
    setTodos([...todos, tmp]);
    setTmp('');
    //    setTimeout(() => {
    //      localStorage.setItem('todos', todos);
    //    }, 100);
  };

  const delTask = (e) => {
    const newTodos = todos.filter((todo, todoindex) => {
      return e !== todoindex;
    });

    setDeltodos([...deledtodos, todos[e]]);
    setTodos(newTodos);
  };

  const reTask = (e) => {
    const reTodos = deledtodos.filter((deltodo, deltodoindex) => {
      return e !== deltodoindex;
    });

    setTodos([...todos, deledtodos[e]]);
    setDeltodos(reTodos);
  };

  const classes = useStyle();

  const handleChange = (e) => {
    setTmp(e.target.value);
  };

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChangeCheck = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [checkedB, setFlagB] = React.useState();

  const checkB = (event) => {
    setFlagB(event.target.checked);
  };

  const notAchList = (todo, index) => {
    if (state.checkedA) {
      return (
        <Typography variant="h4">
          {/* eslint-disable-next-line react/no-array-index-key */}
          <li key={index}>
            <Checkbox
              onChange={() =>
                setTimeout(() => {
                  delTask(index);
                }, 1000)
              }
            />
            {todo}
          </li>
        </Typography>
      );
    }

    return <div />;
  };

  const AchedList = (todo, index) => {
    if (checkedB) {
      return (
        <li key={index}>
          <Checkbox
            defaultChecked
            onChange={() =>
              setTimeout(() => {
                reTask(index);
              }, 1000)
            }
          />
          {todo}
        </li>
      );
    }
    return <div />;
  };

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
        <Box textAlign="center">
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
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    addTask();
                  }
                }}
              />
              <Button color="#000" onClick={addTask}>
                追加
              </Button>
            </Typography>
          </div>

          <Box m={2} />

          <div className={classes.check}>
            <FormControlLabel
              control={<Checkbox name="checkedA" onChange={handleChangeCheck} checked={state.checkedA} />}
              label="リスト"
            />
            <FormControlLabel control={<Checkbox name="checkedB" onChange={checkB} />} label="達成済み" />

            <Divider variant="middle" />
          </div>
          <Box m={2} />
        </Box>

        <ui>
          {todos.map((todo, index) => {
            return notAchList(todo, index);
          })}

          {deledtodos.map((todo, index) => {
            return AchedList(todo, index);
          })}
        </ui>
      </Container>
      <style jsx>{`
        ui {
          list-style: none;
        }
        a {
          color: #000;
          text-decoration: none;
        }
        b {
          color: #000;
          opacity: 0.3;
        }
        add {
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default App;
