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
import Fade from '@material-ui/core/Fade';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccessAlarm from '@material-ui/icons/AccessAlarm'

function Counter() {
  let [welcome, setWelcome] = useState(true)
  let [operations, setOperations] = useState(false)
  let [mathOperator, setMathOperator] = useState('+')
  let [numberOfDigits, setNumberOfDigits] = useState(1)
  let [minimumNumber, setMinimumNumber] = useState(0)
  let [maximumNumber, setMaximumNumber] = useState(9)  
  // let [questionCount, setQuestionCount] = useState(1)
  let [firstNumber, setFirstNumber] = useState(Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + 0)
  let [secondNumber, setSecondNumber] = useState(Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + 0)
  let [total, setTotal] = useState('')

  let [counting, setCounting] = useState(false)
  let [levelCounting, setLevelCounting] = useState(1)
  let [randomNumber1, setRandomNumber1] = useState(0)
  let [randomNumber2, setRandomNumber2] = useState(0)
  let [randomNumber3, setRandomNumber3] = useState(0)
  let [randomNumber4, setRandomNumber4] = useState(0)
  let [randomNumber5, setRandomNumber5] = useState(0)
  let [randomNumber6, setRandomNumber6] = useState(0)
  let [randomNumber7, setRandomNumber7] = useState(0)
  let [randomNumber8, setRandomNumber8] = useState(0)
  let [randomNumber9, setRandomNumber9] = useState(0)
  let [randomNumber10, setRandomNumber10] = useState(0)
  let [randomNumber11, setRandomNumber11] = useState(0)
  let [randomNumber12, setRandomNumber12] = useState(0)
  let [randomNumber13, setRandomNumber13] = useState(0)
  let [randomNumber14, setRandomNumber14] = useState(0)
  let [randomNumber15, setRandomNumber15] = useState(0)
  let [randomNumber16, setRandomNumber16] = useState(0)
  let [randomNumber17, setRandomNumber17] = useState(0)
  let [randomNumber18, setRandomNumber18] = useState(0)
  let [randomNumber19, setRandomNumber19] = useState(0)
  let [randomNumber20, setRandomNumber20] = useState(0)

  let [countTotal, setCountTotal] = useState(0)

  let [displayMessage, setDisplayMessage] = useState('Welcome')
  let [snackbarOpen, setSnackbarOpen] = useState(true)

  //const [state, dispatch] = useReducer(reducer, initialState);
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
    switch(mathOperator) {
      case '+':
          if (parseInt(total) === parseInt((firstNumber + secondNumber))) {
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

  let setRandomValues = () => {
    let random1 = Math.round(Math.random())
    setRandomNumber1(random1)
    let random2 = Math.round(Math.random())
    setRandomNumber2(random2)
    let random3 = Math.round(Math.random())
    setRandomNumber3(random3)
    let random4 = Math.round(Math.random())
    setRandomNumber4(random4)
    let random5 = Math.round(Math.random())
    setRandomNumber5(random5)
    let random6 = Math.round(Math.random())
    setRandomNumber6(random6)
    let random7 = Math.round(Math.random())
    setRandomNumber7(random7)
    let random8 = Math.round(Math.random())
    setRandomNumber8(random8)
    let random9 = Math.round(Math.random())
    setRandomNumber9(random9)
    let random10 = Math.round(Math.random())
    setRandomNumber10(random10)
    let random11 = Math.round(Math.random())
    setRandomNumber11(random11)
    let random12 = Math.round(Math.random())
    setRandomNumber12(random12)
    let random13 = Math.round(Math.random())
    setRandomNumber13(random13)
    let random14 = Math.round(Math.random())
    setRandomNumber14(random14)
    let random15 = Math.round(Math.random())
    setRandomNumber15(random15)
    let random16 = Math.round(Math.random())
    setRandomNumber16(random16)
    let random17 = Math.round(Math.random())
    setRandomNumber17(random17)
    let random18 = Math.round(Math.random())
    setRandomNumber18(random18)
    let random19 = Math.round(Math.random())
    setRandomNumber19(random19)
    let random20 = Math.round(Math.random())
    setRandomNumber20(random20)

    setCountTotal(random1 + random2 + random3 + random4 + random5 + random6 + random7 + random8 + random9 +
      random10+random11+random12+random13+random14+random15+random16+random17+random18+random19+random20)
  }

  let handleCounting = (event) => { 
    // console.log('This is from Counting!')    
    setOperations(false)
    setWelcome(false)
    setCounting(true)
    setRandomValues()
  }

  let handleOperations = (event) => { 
    // console.log('This is from Operations!')
    setCounting(false)
    setWelcome(false)
    setOperations(true)
  }
  
  let handleLevelCounting = props => event => {
    setLevelCounting(event.target.value)  

    // let random1 = Math.round(Math.random())
    // setRandomNumber1(random1)
    // let random2 = Math.round(Math.random())
    // setRandomNumber2(random2)
    // let random3 = Math.round(Math.random())
    // setRandomNumber3(random3)
    // let random4 = Math.round(Math.random())
    // setRandomNumber4(random4)
    // let random5 = Math.round(Math.random())
    // setRandomNumber5(random5)
    // let random6 = Math.round(Math.random())
    // setRandomNumber6(random6)
    // let random7 = Math.round(Math.random())
    // setRandomNumber7(random7)
    // let random8 = Math.round(Math.random())
    // setRandomNumber8(random8)
    // let random9 = Math.round(Math.random())
    // setRandomNumber9(random9)

    // setCountTotal(random1+random2+random3+random4+random5+random6+random7+random8+random9)
  }

  let handleSubmitCounting = (event) => { 
    // console.log('=======')
    // console.log(total)
    // console.log(countTotal)
    if (parseInt(total)===parseInt(countTotal)) {
      setDisplayMessage('Correct!')
      setSnackbarOpen(true)
      // console.log('The counting is correct')
      setTotal('')
      setRandomValues()
    }
    else {
      setDisplayMessage('Oops, try again!')
      setSnackbarOpen(true)
      // console.log('The counting is not correct')
      setTotal('')
    }      
  }

  return (<MuiThemeProvider theme={theme}>
  {/* <SimpleAppBar /> */}
  <AppBar position="static">
    <Toolbar>         
      {/* <Typography variant="h6" color="inherit" className={JSON.stringify(styles.grow)}>
        Basic Math:
      </Typography>          */}
        <Button color="inherit" onClick={()=>handleCounting()}>Counting</Button>
        <Button color="inherit" onClick={()=>handleOperations()}>Operations</Button>   
    </Toolbar>
  </AppBar>
  <div className={styles.root}>
  <br />
  <br />
  <br />
  <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        className={JSON.stringify(styles.margin)}
        message={message}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        open={snackbarOpen}
        TransitionComponent={Fade}
  />
  {
    welcome && 
      <center>
        <Typography variant="h6" color="inherit" className={JSON.stringify(styles.grow)}>
          Welcome to Basic Math training
        </Typography>  
      </center>    
  }
  {operations && 
    <center>
      <FormControl className={JSON.stringify(styles.formControl)}>
      <InputLabel htmlFor="operator-native-simple">Operation</InputLabel>
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
            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
            <option value="*">Multiplication (*)</option>
          </Select>
      </FormControl>
  
      
      <FormControl className={JSON.stringify(styles.formControl)}>
      <InputLabel htmlFor="digits-native-simple">Level</InputLabel>
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
    }
    {
    counting && 
      <center>
        <Typography variant="h6" color="inherit" className={JSON.stringify(styles.grow)}>
          Can you count the number of clocks?
        </Typography>  
        {/* <FormControl className={JSON.stringify(styles.formControl)}>
          <InputLabel htmlFor="digits-native-simple">Level</InputLabel>
          <Select
            native
            value={levelCounting}
            onChange={handleLevelCounting()}
            name="levelCounting"
            inputProps={{
              name: 'levelCounting',
              id: 'levelCounting-native-required',
            }}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>           
          </Select>
      </FormControl>  */}
      <br />
      <br />
      <hr />
      <Paper className={JSON.stringify(styles.root)} elevation={1}>
        {/* <Typography variant="h4" component="h3">
          {firstNumber}
        </Typography>
        <Typography variant="h4" component="h3">
          {mathOperator}
        </Typography>
        <Typography variant="h4" component="h3">
          {secondNumber}
        </Typography> */}
            
            {randomNumber1===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            {randomNumber2===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            {randomNumber3===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            <br />
            {randomNumber4===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            {randomNumber5===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            {randomNumber6===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            <br />
            {randomNumber7===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            {randomNumber8===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            {randomNumber9===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            <br />
            
            {randomNumber10===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            {randomNumber11===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            {randomNumber12===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}           
            {randomNumber13===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            <br />
            {randomNumber14===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            {randomNumber15===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}           
            {randomNumber16===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            {randomNumber17===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            <br />
            {randomNumber18 === 1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            {randomNumber19===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            {randomNumber20===1 && <AccessAlarm className={JSON.stringify(styles.icon)} color="primary" />}
            <br />
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
              onClick={()=>handleSubmitCounting()}
            >
              Submit
            </Button >
                
            {/* {console.log(countTotal)} */}
      </Paper>
      <hr />
      </center>    
  }
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