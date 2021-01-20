import * as React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Copyright from '../components/Copyright';

const headingStyles = {
  marginTop: 0,
  marginBottom: 30,
  maxWidth: 920,
  paddingLeft: 140
}
const headingAccentStyles = {
  color: "#663399",
  paddingLeft: 130
}

const textFieldStyles = {
  color: "#663399",
  marginTop: 50,
  paddingLeft: 110,
  marginBottom: 30
}

const buttonStyles = {
  marginTop: 50,
  color: "#663399",
  paddingLeft: 220,
  marginBottom: 30
}

export default function Home() {

  function adduser(e) {
    console.log("Inside adduser")
    e.preventDefault()

    //debugger

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "name":e.target.username.value, "email":e.target.email.value })
    };
    fetch('http://localhost:9100/user', requestOptions)
        .then(response => response.json());
  }

  return (   
  <Container maxWidth="sm">
    <Box my={6}><Typography variant="h5" component="h3" gutterBottom>
    <h1 style={headingStyles}> Welcome! </h1>
       <span style={headingAccentStyles}>You are in Cosmos! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </Typography></Box>
    <Box my={6}>
      
      <form onSubmit={adduser} className="root" noValidate autoComplete="off">
      <span style={textFieldStyles}>
        <TextField id="content1" name="username" label="username" variant="filled" style = {{width: 330}} />
     </span>
     <span style={textFieldStyles}>
         <TextField id="content2" label="Email" name="email" variant="filled" style = {{width: 330}}/>
      </span>
        <Typography variant="h2" component="h1" gutterBottom>
        <span style={buttonStyles}> <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          </span>
        </Typography>
      </form>
      <Box my={10}><Typography variant="h4" component="h2" gutterBottom>
      <Copyright />
      </Typography></Box>
    <Box my={6}></Box>
    </Box>
  </Container>
  );
}