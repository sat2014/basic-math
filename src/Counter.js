import React, { useState, useReducer } from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useDocumentTitle from './customHooks/useDocumentTitle';
import styles from './style';
import theme from './style/theme'
import reducer from './reducers/reducerCount';
import initialState from './reducers/initialState/initialStateCount';
import Fade from '@material-ui/core/Fade';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import shapes from './style/shapes';
import BarChart from './BarChart'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import shuffle from './utilities/shuffle'

function Counter() {
  let [results, setResults] = useState(false)
  let [welcome, setWelcome] = useState(true)
  let [operations, setOperations] = useState(false)
  let [mathOperator, setMathOperator] = useState('+')
  let [numberOfDigits, setNumberOfDigits] = useState(1)
  let [minimumNumber, setMinimumNumber] = useState(0)
  let [maximumNumber, setMaximumNumber] = useState(9)  
  let [firstNumber, setFirstNumber] = useState(Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + 0)
  let [secondNumber, setSecondNumber] = useState(Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + 0)

  let [counting, setCounting] = useState(false)

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

  let [selectedValue, setSelectedValue] = useState(1)
  let [choice1, setChoice1] = useState(1)
  let [choice2, setChoice2] = useState(2)
  let [choice3, setChoice3] = useState(3)
  let [choice4, setChoice4] = useState(4)

  const [state, dispatch] = useReducer(reducer, initialState);

  let [randomIcon, setRandomIcon] = useState(Math.floor(Math.random() * shapes.length) + 1)

  let message = (
    <span
      id="snackbar-message-id"
      dangerouslySetInnerHTML={{ __html: displayMessage }}
    />
  )

  useDocumentTitle(`Baic Math: ${state.questionCountCounting + state.questionCountAddition + state.questionCountSubtraction + state.questionCountMultiplication}`)

  let setChoicesForOperations = (fNumber, sNumber, operator) => {
    let num = 
      operator === '+' 
        ? fNumber+sNumber : operator === '-' 
        ? fNumber-sNumber : operator === '*' 
        ? fNumber*sNumber : console.log('Unknown operator for operation!') 
    let diff = operator === '*' ? sNumber : 1
    let tempArray=shuffle([num, num-diff, num+diff, num + 2* diff])
    setChoice1(tempArray[0])
    setChoice2(tempArray[1])
    setChoice3(tempArray[2])
    setChoice4(tempArray[3])
    setSelectedValue(1)
  }

  let handleSubmit = (event) => {
    setSelectedValue(event.target.value)
    switch(mathOperator) {
      case '+':
          if (parseInt(event.target.value) === parseInt((firstNumber + secondNumber))) {
            setDisplayMessage('Correct!')
            setSnackbarOpen(true)
            let fNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 0
            setFirstNumber(fNumber)
            let sNumber=Math.floor(Math.random() * (10 - 0 + 1)) + 0
            setSecondNumber(sNumber)            
            // setTotal('')
            // dispatch({ type: 'incrementQuestionCount' })
            dispatch({ type: 'incrementQuestionCountAddition' })
            // setQuestionCount(++questionCount)
           // useDocumentTitle(`Baic Math: ${mathOperator}`)
           setChoicesForOperations(fNumber, sNumber, '+')
          }
          else {
            setDisplayMessage('Oops, try again!')
            setSnackbarOpen(true)
          }
          break;
      case '-':
          if (parseInt(event.target.value) === parseInt((firstNumber - secondNumber))) {
            setDisplayMessage('Correct!')
            setSnackbarOpen(true)
            let fNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 0
            setFirstNumber(fNumber)
            let sNumber=Math.floor(Math.random() * (10 - 0 + 1)) + 0
            setSecondNumber(sNumber)
            // setTotal('')
            // dispatch({ type: 'incrementQuestionCount' })
            dispatch({ type: 'incrementQuestionCountSubtraction' })
            // setQuestionCount(++questionCount)
           // useDocumentTitle(`Baic Math: ${mathOperator}`)
           setChoicesForOperations(fNumber, sNumber, '-')
          }
          else {
            setDisplayMessage('Oops, try again!')
            setSnackbarOpen(true)
          }
        break;
      case '*':
        if (parseInt(event.target.value) === parseInt((firstNumber * secondNumber))) {
          setDisplayMessage('Correct!')
          setSnackbarOpen(true)
          let fNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 0
            setFirstNumber(fNumber)
            let sNumber=Math.floor(Math.random() * (10 - 0 + 1)) + 0
            setSecondNumber(sNumber)
          // setTotal('')
          // dispatch({ type: 'incrementQuestionCount' })
          dispatch({ type: 'incrementQuestionCountMultiplication' })
          // setQuestionCount(++questionCount)
         // useDocumentTitle(`Baic Math: ${mathOperator}`)
         setChoicesForOperations(fNumber, sNumber, '*')
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

    setCountTotal(
      random1 + random2 + random3 + random4 + random5 + random6 + random7 + random8 + random9 +
      random10 + random11 + random12 + random13 + random14 + random15 + random16 + random17 + random18 + random19 + random20
    )
    setRandomIcon(Math.floor(Math.random() * (shapes.length-1) + 1  ))
    
    let num = random1 + random2 + random3 + random4 + random5 + random6 + random7 + random8 + random9 +
      random10 + random11 + random12 + random13 + random14 + random15 + random16 + random17 + random18 + random19 + random20
    let tempArray=shuffle([num, num-1, num+1, num+2])
    setChoice1(tempArray[0])
    setChoice2(tempArray[1])
    setChoice3(tempArray[2])
    setChoice4(tempArray[3])
    setSelectedValue(1)
  }

  let handleCounting = event => {    
    setOperations(false)
    setWelcome(false)
    setResults(false)
    setCounting(true)
    setRandomValues()
  }

  let handleOperations = event => { 
    setCounting(false)
    setWelcome(false)
    setResults(false)
    setOperations(true)
    setChoicesForOperations(firstNumber, secondNumber, mathOperator)
  }

  let handleResults = events => {
    setCounting(false)
    setWelcome(false)  
    setOperations(false)
    setResults(true)
  }

  let handleOperationChange = e => {
    setMathOperator(e.target.value)
    setChoicesForOperations(firstNumber, secondNumber, e.target.value)
  }

  let handleSubmitCounting = event => { 
    setSelectedValue(event.target.value)
    if (parseInt(event.target.value) === parseInt(countTotal)) {
      setDisplayMessage('Correct!')
      setSnackbarOpen(true)
      // setTotal('')
      dispatch({ type: 'incrementQuestionCountCounting' })
      setRandomValues()
      // var delayInMilliseconds = 1000; //2 second
      // setTimeout(function() {
      //   setRandomValues()
      // }, delayInMilliseconds);            
    }
    else {
      setDisplayMessage('Oops, try again!')
      setSnackbarOpen(true)
      // setTotal('')
    }      
  }

  let barChartData = [
    { "y": state.questionCountCounting, "x": "Count" },
    { "y": state.questionCountAddition, "x": "Add" },
    { "y": state.questionCountSubtraction, "x": "Subtract" },
    { "y": state.questionCountMultiplication, "x": "Multiply" }
]

  return (<MuiThemeProvider theme={theme}>
  <AppBar position="static">
    <Toolbar>         
        <Button color="inherit" onClick={()=>handleCounting()}>Counting</Button>
        <Button color="inherit" onClick={() => handleOperations()}>Operations</Button>   
        <Button color="inherit" onClick={()=>handleResults()}>Results</Button>   
    </Toolbar>
  </AppBar>
  <div className={styles.root}>
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
            onChange={handleOperationChange}
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

      <FormControl component="fieldset" className={JSON.stringify(styles.formControl)}>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={JSON.stringify(styles.group)}
          value={selectedValue}
          onChange={handleSubmit}
        >
        <FormControlLabel value={choice1.toString()} control={<Radio />} label={choice1} />
        <FormControlLabel value={choice2.toString()} control={<Radio />} label={choice2} />
        <FormControlLabel value={choice3.toString()} control={<Radio />} label={choice3} />
        <FormControlLabel value={choice4.toString()} control={<Radio />} label={choice4} />
        </RadioGroup>
      </FormControl>

    </center>
    }
    {
    counting && 
      <center>
        <Typography variant="h6" color="inherit" className={JSON.stringify(styles.grow)}>
          Can you count the number of items?
        </Typography>  
      <hr />
      <Paper className={JSON.stringify(styles.root)} elevation={1}>             
        {randomNumber1===1 && shapes[randomIcon]}
        {randomNumber2===1 && shapes[randomIcon]}
        {randomNumber3===1 && shapes[randomIcon]}
        <br />
        {randomNumber4===1 && shapes[randomIcon]}
        {randomNumber5===1 && shapes[randomIcon]}
        {randomNumber6===1 && shapes[randomIcon]}
        <br />
        {randomNumber7===1 && shapes[randomIcon]}
        {randomNumber8===1 && shapes[randomIcon]}
        {randomNumber9===1 && shapes[randomIcon]}
        <br />            
        {randomNumber10===1 && shapes[randomIcon]}
        {randomNumber11===1 && shapes[randomIcon]}
        {randomNumber12===1 && shapes[randomIcon]}           
        {randomNumber13===1 && shapes[randomIcon]}
        <br />
        {randomNumber14===1 && shapes[randomIcon]}
        {randomNumber15===1 && shapes[randomIcon]}           
        {randomNumber16===1 && shapes[randomIcon]}
        {randomNumber17===1 && shapes[randomIcon]}
        <br />
        {randomNumber18 === 1 && shapes[randomIcon]}
        {randomNumber19===1 && shapes[randomIcon]}
        {randomNumber20===1 && shapes[randomIcon]}
        <br />
      </Paper>
      <hr />
      <FormControl component="fieldset" className={JSON.stringify(styles.formControl)}>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={JSON.stringify(styles.group)}
          value={selectedValue}
          onChange={handleSubmitCounting}
        >
        <FormControlLabel value={choice1.toString()} control={<Radio />} label={choice1} />
        <FormControlLabel value={choice2.toString()} control={<Radio />} label={choice2} />
        <FormControlLabel value={choice3.toString()} control={<Radio />} label={choice3} />
        <FormControlLabel value={choice4.toString()} control={<Radio />} label={choice4} />
        </RadioGroup>
      </FormControl>

    </center>    
  }
  {
    results &&  
    <center>
      <BarChart data={barChartData} />
    </center>  
  }
  </div>
  </MuiThemeProvider>)
}

export default Counter