import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Notifier, { openSnackbar } from './Notifier';

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


  useDocumentTitle('Baic Math')

  // useEffect(() => {
  //   document.title = `Baic Math: Question ${questionCount}`;
  // });

  let handleChangeTotal = prop => event => {
    setTotal(event.target.value)
    // switch(mathOperator) {
    //   case '+':
    //       if (parseInt(event.target.value) === parseInt((firstNumber + secondNumber))) {
    //         console.log('Total (Addition) is correct!')
    //         setFirstNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
    //         setSecondNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
    //         setTotal('')
    //         setQuestionCount(++questionCount)
    //       }
    //       else console.log('Total (Addition) is not correct')
    //       break;
    //   case '-':
    //       if (parseInt(event.target.value) === parseInt((firstNumber - secondNumber))) {
    //         console.log('Total (Subtraction) is correct!')
    //         setFirstNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
    //         setSecondNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
    //         setTotal('')
    //         setQuestionCount(++questionCount)
    //       }
    //       else console.log('Total (Subtraction) is not correct')
    //     break;
    //   case '*':
    //     if (parseInt(event.target.value) === parseInt((firstNumber * secondNumber))) {
    //       console.log('Total (Multiplication) is correct!')
    //       setFirstNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
    //       setSecondNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
    //       setTotal('')
    //       setQuestionCount(++questionCount)
    //     }
    //     else console.log('Total (Multiplication) is not correct')
    //     break;
    //   default:
    //       console.log('default case...')
    // }
  }

  let handleSubmit = (event) => {
    console.log('Button pressed')
    switch(mathOperator) {
      case '+':
          if (parseInt(total) === parseInt((firstNumber + secondNumber))) {
            console.log('Total (Addition) is correct!!!')
            // openSnackbar({ message: 'Correct answer!' });
            setFirstNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
            setSecondNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
            setTotal('')
            setQuestionCount(++questionCount)
          }
          else console.log('Total (Addition) is not correct')
          break;
      case '-':
          if (parseInt(total) === parseInt((firstNumber - secondNumber))) {
            console.log('Total (Subtraction) is correct!')
            setFirstNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
            setSecondNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
            setTotal('')
            setQuestionCount(++questionCount)
          }
          else console.log('Total (Subtraction) is not correct')
        break;
      case '*':
        if (parseInt(total) === parseInt((firstNumber * secondNumber))) {
          console.log('Total (Multiplication) is correct!')
          setFirstNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
          setSecondNumber(Math.floor(Math.random() * (10 - 0 + 1)) + 0)
          setTotal('')
          setQuestionCount(++questionCount)
        }
        else console.log('Total (Multiplication) is not correct')
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
      
    }
  }

  let handleChangeMathOperator = prop => event => {
    setMathOperator(event.target.value)
  }

  return (<div className={styles.root}>
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
            <option value="+">addition (+)</option>
            <option value="-">subtraction (-)</option>
            <option value="*">multiplication (*)</option>
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
            <option value={5}>5</option>
          </Select>
      </FormControl>    

      <br />
      <br />
      <hr />

      <label>{firstNumber}</label>
      <br />

      <label>{mathOperator}</label>
       
      <br />

      <label >{secondNumber}</label>
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
  </div>)
}

export default Counter

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

function useFormInput(initialValue) {
  let [value, setValue] = useState(initialValue)

  function handleChange(e) {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: handleChange
  }
}