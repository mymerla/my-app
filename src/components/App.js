import "./App.css";
import React from "react";
import { MyContextProvider } from '../context/MyContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TopMenu } from "./TopMenu";
import HomePage from "../pages/HomePage"
import LoginPage from '../pages/Login'

const RegisterPage = () => {
    return <h1>RegisterPage</h1>
}

function App() {
    
    return (
        <MyContextProvider>
            <div className="App">
                <Router>
                    <div>
                        <TopMenu />
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/register" component={RegisterPage} />
                            <Route path="/login" component={LoginPage} />
                        </Switch>
                    </div>
                </Router>
            </div>
        </MyContextProvider>
    );
}

export default App;
