import React from 'react'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
/** containers **/
import App from "./containers/App/App"

const Routes = () => {
  return(
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  )
}
export default Routes;