import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import logo from '../login1.png'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CustomBtn from './CustomBtn'


const paperStyle={padding :30,height:'',width:350, margin:" auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const styles = makeStyles({
        wrapper: {
           display: "flex",
           flexDirection: "column", 
           alignItems: "center", 
           padding: "0 5rem 0 5rem"
        }, 
        item: {
           paddingTop: "1rem"
        }
    })


function Login(props) {
    const {icon, title, btnTitle} = props;
    const classes = styles();
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                
                    <h2>Sign up</h2>
                    <img src={logo} width="350" height="250" style={{position: 'relative'}} alt="login"/>
                </Grid>
                
                <TextField name ="firstname" label='First name' placeholder='Enter First name' fullWidth required/>
                <TextField name ="lastname" label='Last name' placeholder='Enter Last name' fullWidth required/>
                <TextField name ="username" label='Username' placeholder='Enter username' fullWidth required/>
                <TextField name ="email" label='Email' placeholder='Enter Email' fullWidth required/>
                <TextField name ="password" label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <TextField name ="studentnumber" label='Student number' placeholder='Enter Student number' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                
            </Paper>
        </Grid>
    )
}

export default Login
