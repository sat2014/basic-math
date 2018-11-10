import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
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
          {/* <section className={JSON.stringify(styles.rightToolbar)}>
            <IconButton color="inherit" aria-label="More Options">
                <MoreIcon />
            </IconButton>
            <Button color="inherit">Login</Button>
          </section> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SimpleAppBar;