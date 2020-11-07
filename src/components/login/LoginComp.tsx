import React, { SyntheticEvent, useState } from "react";
import { Button, Form, Input } from "reactstrap";
import { login } from "../../actions/LoginAction";
import { ILoginState } from "../../reducers";

interface IProps{
    
}

export const LoginComp: React.FC<IProps> = (props:IProps) => 
{

    //assign the username and password initial values
    const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) =>{

        event.preventDefault();
        
        const username = event.currentTarget["username"].value;
        const password = event.currentTarget["password"].value;

        login({"username": username, "password": password});

        alert("given username: " + username + " password: " + password);
        
    }

    return (
    <span>
        <Form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter username" name="username" style={{ margin: 5 }} maxLength={20}/>
            <input type="password" placeholder="**********" name="password" style={{ margin: 5 }} maxLength={20} />
            <input type="submit" name="login-btn" value="LOGIN" style={{ margin: 5 }} />
        </Form>
    </span>
    )
}