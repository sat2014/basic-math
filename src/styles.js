import green from '@material-ui/core/colors/green';  
import theme from './theme'

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
    resize:{
      fontSize:50
    },
    multilineColor:{
      color:'red',
    },
});
  
export default styles(theme)