import React from 'react';
import './check_in.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'


const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#616161" ,
    height: 550
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(0, 0, 10),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



const Check_in = () =>{
    const classes = useStyles();
    return(
        <div className={classes.heroContent}>
          <Container maxWidth="Xl" className={classes.container} style={{backgroundSize: "cover" ,
              backgroundImage:`url(${"http://taskforce.nitt.edu/passportmela/wp-content/uploads/2017/02/main2.jpg"})`,
              paddingBottom:100,alignSelf:"center"
          }}>
            <Typography style={{paddingTop: 250, display: 'inline-block'}} component="h1" variant="h3"  color="textPrimary" gutterBottom>
                <Box fontWeight="fontWeightBold" color={'white'}>
              TASKFORCE, NIT TRICHY
                </Box>
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                <Box fontStyle="italic" m={1} color={'white'}>
              "The best way to find yourself is to lose yourself in the service of others"
                </Box>
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
    );
};

export default Check_in;

/*<img src={'http://taskforce.nitt.edu/passportmela/wp-content/uploads/2017/02/main2.jpg'}
                 width={'1300'}
                 height={'700'}
id={'check'} className={'container'}>
            <div className={'Heading'}>
                <h1 className={'con'}>TASKFORCE, NIT TRICHY</h1>
                    <br/>
                <h6>"The best way to find yourself is to lose yourself in the service of others"</h6>
            </div>
            <div className={'background'}>
                <img src={'http://taskforce.nitt.edu/passportmela/wp-content/uploads/2017/02/main2.jpg'}/>
            </div>
                 />*/



