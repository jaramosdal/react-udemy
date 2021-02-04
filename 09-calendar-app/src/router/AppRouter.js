import React from 'react'
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                {/*
                    exact /login - LoginScreen
                    exact / - CalendarScreen
                */}
                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route exact path="/" component={ CalendarScreen } />
                    
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
