import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from '@material-ui/core'

import Home from './Home'
import PageNotFound from './PageNotFound'
import Notification from '../components/Notification'

export default () => {

    return (
        <Fragment>
            <Container>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route component={PageNotFound} />
                    </Switch>
                </Router>
            </Container>
            
            <Notification />
        </Fragment>
    )
}
