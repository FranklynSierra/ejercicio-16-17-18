import { BrowserRouter as Router, Route, Routes,Navigate as Redirect, } from 'react-router-dom';

import Dashboardpage from './pages/dashboard/DashBoard';
import { Notfoundpage } from './pages/404/NotFounPage';

function AppRoutingFinal() {
  let loggedIn = true;

  return (
    <Router>
      {/* Route Switch */}
      <Routes>
        {/* Redirections to protect our routes */}
        <Route exact path='/'>
          {
           loggedIn ? 
           (<Redirect from='/' to='/dashboard' />)
           :
           (<Redirect from='/' to='/login' /> )
          }
        </Route>
        {/* Login Route */}
        <Route exact path='/login' element={<Loginpage></Loginpage>} />  
        {/* DashBoard Route */}
        <Route exact path='/dashboard'>
          {
           loggedIn ? 
           (<Dashboardpage />)
           :
           (<Redirect from='/' to='/login' /> )
          }
        </Route>
        <Route element={<Notfoundpage/>}/>
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
