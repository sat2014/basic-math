import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './styles';

function SimpleAppBar() {
  return (
    <div className={JSON.stringify(styles.root)}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={JSON.stringify(styles.menuButton)} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>        
          <Typography variant="h6" color="inherit" className={JSON.stringify(styles.grow)}>
            Baic Math
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SimpleAppBar;