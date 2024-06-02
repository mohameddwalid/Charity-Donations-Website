import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '-1 auto',
    display:'flex',
  },
  appbarTitle: {
    margin:0,
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },

//   '#F37054'
  colorText: {
    color:  '#fd580b',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#fd580b',
    fontSize: '4rem',
  },


//   img :{
//     width: '100px',
//     height: '100px',
//     margintop: '10px',
//     marginleft: '20px',
//   },

  flexContainer :{
    display: 'flex',
    alignitems: 'center', 
    
  }

  

}));


export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);





  return (
    <div className={classes.root} id="header">
    <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
            <div className={classes.flexContainer}>
                <div className={classes.img} style={{ width: '100px', height: '50px' }}>
                    <img src=".images/Logo2.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }} />
                </div>
                <div className={classes.titleContainer}>
                    <h1 className={classes.appbarTitle}>
                        Charity<span className={classes.colorText}>Catalyst.</span>
                    </h1>
                </div>
            </div>
        </Toolbar>
    
    
</AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            Charity<span className={classes.colorText}>Catalyst.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}