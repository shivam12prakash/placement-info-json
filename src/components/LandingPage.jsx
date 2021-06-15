import { Box,makeStyles } from '@material-ui/core';
import go from '../Assets/Images/go.jpg';
import logo from '../Assets/Images/logo.jpg';

const useStyles = makeStyles({
    style: {
        color: 'blue',
        fontFamily: 'Century-gothic',
        textAlign: 'center',
        fontSize: 50,
    }
})

const LandingPage = () => {
    const classes = useStyles();
    return (
        <div>
            <Box>
                <img src={logo} style={{width: '20%',margin: '80px 20px 0 520px'}} />
            </Box>
            <p className = {classes.style}>Fill Your Proper Acdemic Details</p>
        </div>
    )
}

export default LandingPage;