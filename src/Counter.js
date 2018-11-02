import React, { useState, useReducer } from 'react'
import classNames from 'classnames'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useDocumentTitle from './useDocumentTitle';
import styles from './styles';
import theme from './theme'
import reducer from './reducers/reducerCount';
import initialState from './reducers/initialState/initialStateCount';
import SimpleAppBar from './SimpleAppBar'



function Counter() {
  let [mathOperator, setMathOperator] = useState('+')
  let [numberOfDigits, setNumberOfDigits] = useState(1)
  let [minimumNumber, setMinimumNumber] = useState(0)
  let [maximumNumber, setMaximumNumber] = useState(9)  
  // let [questionCount, setQuestionCount] = useState(1)
  let [firstNumber, setFirstNumber] = useState(Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + 0)
  let [secondNumber, setSecondNumber] = useState(Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + 0)
  let [total, setTotal] = useState('')

  let [displayMessage, setDisplayMessage] = useState('Welcome')
  let [snackbarOpen, setSnackbarOpen] = useState(true)

  const [state, dispatch] = useReducer(reducer, initialState);
  

    let message = (
      <span
        id="snackbar-message-id"
        dangerouslySetInnerHTML={{ __html: displayMessage }}
      />
    );

  useDocumentTitle(`Baic Math: ${mathOperator} ${state.questionCount}`)

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
            dispatch({ type: 'incrementQuestionCount' })
            dispatch({ type: 'incrementQuestionCountAddition' })
            // setQuestionCount(++questionCount)
           // useDocumentTitle(`Baic Math: ${mathOperator}`)
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
            dispatch({ type: 'incrementQuestionCount' })
            dispatch({ type: 'incrementQuestionCountSubtraction' })
            // setQuestionCount(++questionCount)
           // useDocumentTitle(`Baic Math: ${mathOperator}`)
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
          dispatch({ type: 'incrementQuestionCount' })
          dispatch({ type: 'incrementQuestionCountMultiplication' })
          // setQuestionCount(++questionCount)
         // useDocumentTitle(`Baic Math: ${mathOperator}`)
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

  // let handleChangeMathOperator = prop => event => {
  //   setMathOperator(event.target.value)
  // }

  

  return (<MuiThemeProvider theme={theme}>
  <SimpleAppBar />
  <div className={styles.root}>
  <br />
  <br />
  <br />
  <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        className={JSON.stringify(styles.margin)}
        message={message}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        open={snackbarOpen}
      />
    <center>
      <FormControl required className={JSON.stringify(styles.formControl)}>
      <InputLabel htmlFor="operator-native-simple">Operator</InputLabel>
          <Select
            native
            value={mathOperator}
            onChange={(e)=>setMathOperator(e.target.value)}
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
  
      
      <FormControl required className={JSON.stringify(styles.formControl)}>
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
      <Paper className={JSON.stringify(styles.root)} elevation={1}>
        <Typography variant="h4" component="h3">
          {firstNumber}
        </Typography>
        <Typography variant="h4" component="h3">
          {mathOperator}
        </Typography>
        <Typography variant="h4" component="h3">
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
          autoFocus={true}
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
      <hr />
      <Paper className={JSON.stringify(styles.root)} elevation={1}>
        <Typography variant="h6" component="h3">
         Summary:
        </Typography>
        <hr />
        <Typography variant="h6" component="h3">
          Addition: {state.questionCountAddition}
        </Typography>
        <Typography variant="h6" component="h3">
          Subtraction: {state.questionCountSubtraction}
        </Typography>
        <Typography variant="h6" component="h3">
          Multiplication: {state.questionCountMultiplication}
        </Typography>
        <Typography variant="h6" component="h3">
          Total:{state.questionCount}
        </Typography>  
      </Paper>
        <hr />
    </center>
  </div>
  </MuiThemeProvider>)
}

export default Counter

// const initialState = {
//   questionCount: 0,
//   questionCountAddition: 0,
//   questionCountSubtraction: 0,
//   questionCountMultiplication: 0
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'reset':
//       return initialState;
//     case 'incrementQuestionCount':
//       return {
//         questionCount: state.questionCount + 1,
//         questionCountAddition: state.questionCountAddition,
//         questionCountSubtraction: state.questionCountSubtraction,
//         questionCountMultiplication: state.questionCountMultiplication
//       };
//     case 'incrementQuestionCountAddition':
//       return {
//         questionCount: state.questionCount,
//         questionCountAddition: state.questionCountAddition + 1,
//         questionCountSubtraction: state.questionCountSubtraction,
//         questionCountMultiplication: state.questionCountMultiplication
//       };
//     case 'incrementQuestionCountSubtraction':
//       return {
//         questionCount: state.questionCount,
//         questionCountAddition: state.questionCountAddition,       
//         questionCountSubtraction: state.questionCountSubtraction + 1,
//         questionCountMultiplication: state.questionCountMultiplication
//       };
//     case 'incrementQuestionCountMultiplication':
//       return {
//         questionCount: state.questionCount,
//         questionCountAddition: state.questionCountAddition,       
//         questionCountSubtraction: state.questionCountSubtraction,
//         questionCountMultiplication: state.questionCountMultiplication + 1
//       };
//     default:
//       console.log('default from reduer!')
//   }
// }

// function useDocumentTitle(title) {
//   useEffect(() => {
//     document.title = title;
//   });
// }

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