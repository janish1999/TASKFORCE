import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
   barSize:{
      minHeight: 300
   }
});

const Header =()=>
{
    return (
        <div >
            <nav>
            <AppBar position="sticky" color={'inherit'} style={{minHeight: 100,backgroundColor: "grey"}} >
                <Toolbar >
                    <Grid container justify="" alignItems="center" style={{minHeight: 100}} >
                        <img style={{height: 100 , width: 80}} alt="Remy Sharp" src="http://taskforce.nitt.edu/passportmela/wp-content/uploads/2017/02/LOGO.png" className={useStyles.bigAvatar} />
                    </Grid>
                    <Button color="inherit" style={{
                        color:"white",
                        margin: 10,
                        paddingTop: 20
                    }}>Home</Button>
                    <Button color="inherit" style={{
                        color:"white",
                        margin: 10,
                        paddingTop: 20
                    }}>Transcript</Button>
                    <Button color="inherit" style={{
                        color:"white",
                        margin: 10,
                        paddingTop: 20
                    }}>Login</Button>
                </Toolbar>
            </AppBar>
            </nav>
        </div>

    );
};

export default Header;