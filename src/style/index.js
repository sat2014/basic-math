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

  group: {
    margin: `${theme.spacing.unit}px 0`,
  },

  largeIcon: {
    width: 60,
    height: 60,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
});
  
export default styles(theme)