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
  const [completedTodos, setCompletedTodos] = React.useState([]);
  const [newTaskText, setnewTaskText] = React.useState();

  React.useEffect(() => {
    let savedTodos = localStorage.getItem('todos');
    savedTodos = JSON.parse(savedTodos);
    if (savedTodos) {
      setTodos(todos);
    }
  }, []);

  const addTask = () => {
    setTodos([...todos, newTaskText]);
    setnewTaskText('');

    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const delTask = (e) => {
    const newTodos = todos.filter((todo, todoindex) => {
      return e !== todoindex;
    });

    setCompletedTodos([...completedTodos, todos[e]]);
    setTodos(newTodos);
  };

  const reTask = (e) => {
    const reTodos = completedTodos.filter((deltodo, deltodoindex) => {
      return e !== deltodoindex;
    });

    setTodos([...todos, completedTodos[e]]);
    setCompletedTodos(reTodos);
  };

  const classes = useStyle();

  const handleChange = (e) => {
    setnewTaskText(e.target.value);
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

  const NotAchList = ({ todo, index }) => {
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

  const AchedList = ({ todo, index }) => {
    if (checkedB) {
      return (
        <Typography variant="h4">
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
        </Typography>
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
                value={newTaskText}
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
          {todos.map((todo, index) => (
            <NotAchList todo={todo} index={index} key={todo.id} />
          ))}

          <finished>
            {completedTodos.map((todo, index) => (
              <AchedList todo={todo} index={index} />
            ))}
          </finished>
        </ui>
      </Container>
      <style jsx>{`
        ui {
          list-style: none;
        }
        finished {
          color: #9E9E9E;
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
