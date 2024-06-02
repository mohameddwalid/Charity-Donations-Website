import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';



const useStyles = makeStyles({
    root: {
      maxWidth: 845,
      maxHeight:7000,
      background:'rgba(0,0,0,0.5)',
      margin: '400px',
      marginBottom:'30px'
    },
    media: {
      height: 440,
    },
    title: {
    //   fontFamily: 'Nunito',
      fontWeight: 'bold',
      fontSize: '2rem',
      color: '#F37054',
      
    },
    desc: {
    //   fontFamily: 'Nunito',
      fontSize: '1.1rem',
      color: '#ddd',
    },

    joinButt:{
        // fontFamily: 'Nunito',
      fontWeight: 'bold',
      fontSize: '30px',
      color: '#fff',            
        
    }
  });


export default function NormalCard() {
    const classes = useStyles();
    const navigate = useNavigate();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={process.env.PUBLIC_URL + './images/featured-causes.jpg.webp'}
        title="About Us Card "
      />
      <CardContent>
        <Typography gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}>
          ABOUT US
        </Typography>
        <Typography variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}>
          Welcome to CharityCatalyst, where compassion meets action. Our platform connects donors with meaningful opportunities to contribute to community initiatives. From donating essential items to volunteering expertise, we empower individuals and organizations to make a tangible difference. Explore diverse donation categories, volunteer teaching or medical services, and engage with registered organizations seamlessly. Together, we're building a stronger, more supportive community, one act of kindness at a time. Join us in creating positive change and fostering a culture of giving
        </Typography>
      </CardContent>
      <Button className={classes.joinButt}
     style={{ 
        marginLeft: "230px",
        marginTop: "5px",
        marginBottom: "20px",
        borderRadius: '10px',
        backgroundColor: '#fd580b',
        color: 'white',
        fontSize: '15px',
        padding: '2px 30px',
        border: '1px solid transparent',
        fontWeight: 600,
        letterSpacing: '0.5px',
        width:'200px',
        // textTransform: 'uppercase',
        cursor: 'pointer',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        '&:hover': {
          backgroundColor: '#ff6e40',
        }
        
    }}
      
      
      > <span className={classes.joinButt} onClick={()=>{navigate("/Login")}}>Join Now</span></Button>
      
    </Card>
  );
}
