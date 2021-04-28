import React from 'react'

//Components
import {Container } from './styles';

const LoginContent = () => {

    const [register, setRegister] = React.useState(false);
    
    
    if(register){
        return(
        <Container>
            <form>
                <h3>Register</h3>
                <label>Username</label>
                <input type="text"/>
                <label>Password</label>
                <input type="password"/>
                <label>Repeat Password</label>
                <input type="password"/>
                <p>Already have an account?<br></br>  Log in <span onClick={() => {setRegister(!register)}}>here.</span></p>
            </form>

        </Container>
        )
    } else {
        return(
        <Container>
            <form>
                <h3>Login</h3>
                <label>Username</label>
                <input type="text"/>
                <label>Password</label>
                <input type="password"/>
                <p>Don't have an account yet?<br></br> Register <span onClick={() => {setRegister(!register)}}>here.</span></p>
            </form>

        </Container>
        )
    }


}

export default LoginContent;