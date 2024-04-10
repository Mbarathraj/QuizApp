import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Login.css'

import Button from '@mui/material/Button';

export default function Login() {
  return (
    <Box
    id="box"
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        helperText="Please enter your Username"
        id="user"
        label="Username"
        className='textBox'
      />
      <TextField
        className='textBox'
        helperText="Please enter your Password"
        id="pass"
        label="Password"
        type="password" // Add this line
      />
      <Button variant="contained" color="success">
        Submit
      </Button>
    </Box>
  );
}