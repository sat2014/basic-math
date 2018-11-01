import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import green from '@material-ui/core/colors/green';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Arial",
      "sans-serif"
    ].join(","),
    useNextVariants: true
  }
  });

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  slider: {
    padding: '22px 0px',
  },
  success: {
    backgroundColor: green[600],
  },
});

function Counter() {
  let [mathOperator, setMathOperator] = useState('+')
  let [numberOfDigits, setNumberOfDigits] = useState(1)
  let [minimumNumber, setMinimumNumber] = useState(0)
  let [maximumNumber, setMaximumNumber] = useState(9)  
  let [questionCount, setQuestionCount] = useState(1)
  let [firstNumber, setFirstNumber] = useState(Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + 0)
  let [secondNumber, setSecondNumber] = useState(Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + 0)
  let [total, setTotal] = useState('')

  let [displayMessage, setDisplayMessage] = useState('Welcome')
  let [snackbarOpen, setSnackbarOpen] = useState(true)

    let message = (
      <span
        id="snackbar-message-id"
        dangerouslySetInnerHTML={{ __html: displayMessage }}
      />
    );

  useDocumentTitle('Baic Math')

  // useEffect(() => {
  //   document.title = `Baic Math: Question ${questionCount}`;
  // });

  let handleChangeTotal = prop => event => {
    setTotal(event.target.value)
  }

  let handleSubmit = (event) => {
    //console.log('Button pressed')
    switch(mathOperator) {
      case '+':
          if (parseInt(total) === parseInt((firstNumber + secondNumber))) {
            //console.log('Total (Addition) is correct!!!')
            setDisplayMessage('Correct!')
            setSnackbarOpen(true)
            setFirstNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
            setSecondNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
            setTotal('')
            setQuestionCount(++questionCount)
          }
          else {
            setDisplayMessage('Oops, try again!')
            setSnackbarOpen(true)
          }
          break;
      case '-':
          if (parseInt(total) === parseInt((firstNumber - secondNumber))) {
            //console.log('Total (Subtraction) is correct!')
            setDisplayMessage('Correct!')
            setSnackbarOpen(true)
            setFirstNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
            setSecondNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
            setTotal('')
            setQuestionCount(++questionCount)
          }
          else {
            setDisplayMessage('Oops, try again!')
            setSnackbarOpen(true)
          }
        break;
      case '*':
        if (parseInt(total) === parseInt((firstNumber * secondNumber))) {
          //console.log('Total (Multiplication) is correct!')
          setDisplayMessage('Correct!')
          setSnackbarOpen(true)
          setFirstNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
          setSecondNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
          setTotal('')
          setQuestionCount(++questionCount)
        }
        else {
          setDisplayMessage('Oops, try again!')
          setSnackbarOpen(true)
        }
        break;
      default:
          console.log('default case...')
    }
  }

  let handleChangeNumberOfDigits = props => event => {
    setNumberOfDigits(event.target.value)
    switch (event.target.value) {
      case '1':
        setMinimumNumber(0) 
        setMaximumNumber(9)
        setFirstNumber(Math.floor(Math.random() * (9 - 0 + 1)) + 0)
        setSecondNumber(Math.floor(Math.random() * (9 - 0 + 1)) + 0)
        break
      case '2':
        setMinimumNumber(10)
        setMaximumNumber(99)
        setFirstNumber(Math.floor(Math.random() * (99 - 10 + 1)) + 0)
        setSecondNumber(Math.floor(Math.random() * (99 - 10 + 1)) + 0)
        break
      case '3':
        setMinimumNumber(100)
        setMaximumNumber(999)
        setFirstNumber(Math.floor(Math.random() * (999 - 100 + 1)) + 0)
        setSecondNumber(Math.floor(Math.random() * (999 - 100 + 1)) + 0)
      break
      case '4':
        setMinimumNumber(1000)
        setMaximumNumber(9999)
        setFirstNumber(Math.floor(Math.random() * (9999 - 1000 + 1)) + 0)
        setSecondNumber(Math.floor(Math.random() * (9999 - 1000 + 1)) + 0)
      break
      default:
        console.log('default case')
        break
    }
  }

  let handleChangeMathOperator = prop => event => {
    setMathOperator(event.target.value)
  }

  

  return (<MuiThemeProvider theme={theme}>
  <div className={styles.root}>
  <br />
  <br />
  <br />
  <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        className={styles.margin}
        message={message}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        open={snackbarOpen}
      />
    <center>
      <FormControl required className={styles.formControl}>
      <InputLabel htmlFor="operator-native-simple">Operator</InputLabel>
          <Select
            native
            value={mathOperator}
            onChange={handleChangeMathOperator()}
            name="mathOperator"
            inputProps={{
              name: 'mathOperator',
              id: 'mathOperator-native-required',
            }}
          >
            <option value="+">Add (+)</option>
            <option value="-">Subtract (-)</option>
            <option value="*">Multiply (*)</option>
          </Select>
      </FormControl>
  
      
      <FormControl required className={styles.formControl}>
      <InputLabel htmlFor="digits-native-simple">Digits</InputLabel>
          <Select
            native
            value={numberOfDigits}
            onChange={handleChangeNumberOfDigits()}
            name="numberOfDigits"
            inputProps={{
              name: 'numberOfDigits',
              id: 'numberOfDigits-native-required',
            }}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </Select>
      </FormControl>    

      <br />
      <br />
      <hr />
      <Paper className={styles.root} elevation={1}>
        <Typography variant="h5" component="h3">
          {firstNumber}
        </Typography>
        <Typography variant="h5" component="h3">
          {mathOperator}
        </Typography>
        <Typography variant="h5" component="h3">
          {secondNumber}
        </Typography>
      </Paper>
      <hr />
      <TextField
          id="total-addition"
          className={classNames(styles.margin, styles.textField)}
          variant="outlined"
          type="number"
          label=""          
          value={total}
           onChange={handleChangeTotal()}        
          InputProps={{
            startAdornment: <InputAdornment position="start">=</InputAdornment>,
          }}
      />
      <p />
      <Button
        variant="contained"
        color="primary"       
        onClick={()=>handleSubmit()}
      >
        Submit
      </Button >
    </center>
  </div>
  </MuiThemeProvider>)
}

export default Counter

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

// function useFormInput(initialValue) {
//   let [value, setValue] = useState(initialValue)

//   function handleChange(e) {
//     setValue(e.target.value)
//   }

//   return {
//     value,
//     onChange: handleChange
//   }
// }