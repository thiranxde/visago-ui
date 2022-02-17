import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from './components/NavBar'
import Login from './components/login'
import Footer from './components/Footer'
import './App.css';
import Signup from './components/signup';
import { Route, Routes } from 'react-router-dom'
//changes to imports 


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

function App() {
  const classes = styles();

  return (
   <div className="App">
        <ThemeProvider theme={theme}>
          <NavBar />
          <div className="App">
            <Login />
          </div>
          <Routes>
        <Route element={<Signup/>} />
          </Routes>
          <div className={classes.bigSpace}>
            <Footer />
          </div>
        </ThemeProvider>
      </div> 

  );
}

export default App;
