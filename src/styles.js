import green from '@material-ui/core/colors/green';  
import theme from './theme'

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
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
  menuButton: {
    marginLeft: -12,
    marginRight: 16,
  },

  rightToolbar: {
    marginLeft: 'auto',
    marginRight: -12,
  },

  icon: {
    margin: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});
  
export default styles(theme)