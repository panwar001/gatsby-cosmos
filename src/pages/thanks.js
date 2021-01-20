import React,{useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import Button from '@material-ui/core/Button';

const headingStyle = {
    marginTop: 0,
    marginBottom: 40,
    maxWidth: 1220,
    paddingLeft: 20
  }

const headingAccentStyles = {
    color: "#663399",
    paddingLeft: 200,
    marginBottom: 30
  }

const buttonStyles = {
    marginTop: 50,
    color: "#663399",
    paddingLeft: 160,
    marginBottom: 30
  }

export default function About() {
    const [participant, setParticipant] = useState();
    function allUsers() {
        console.log("Inside allUsers")
        fetch('http://localhost:9100/users')
            .then(response => response.json())
            .then(function(response){
                setParticipant(response);
            })
    }
  return (
    <Container maxWidth="sm">
      <Box my={4}>
      <span style={headingStyle}>
        <Typography variant="h4" component="h1" gutterBottom>
          Thank You for Joining Cosmos !
        </Typography>
        </span>
        <span style={headingAccentStyles}>
        <Link to="/">Go to the main page</Link>
        </span>
        <span style={buttonStyles}> 
        <Button name ="allusers" onClick={allUsers} variant="contained" color="primary">
            All Participants List
          </Button>
          </span>
          <pre>{JSON.stringify(participant, null, 2)}</pre>
        <Copyright />
      </Box>
    </Container>
  );
}