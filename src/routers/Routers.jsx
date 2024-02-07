import React from 'react'

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

/* pages */
import Home from '../pages/Home'
import Aboutus from '../pages/Aboutus'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

/* authenticated pages of web app */

    //end_user
    import Dashboard_User from '../pages/enduser/Dashboard_User'
    import Job from '../pages/enduser/Job'
    import Jobs from '../pages/enduser/Jobs'
    import Profile_User from '../pages/enduser/Profile_User'

    //admin
    import Dashboard_Admin from '../pages/admin/Dashboard_Admin'
    import Clients from '../pages/admin/Clients'
    import Roles_Admin from '../pages/admin/Roles_Admin'
    import Profile_Admin from '../pages/admin/Profile_Admin'

    //client
    import Dashboard_Client from '../pages/client/Dashboard_Client'
    import Roles_Client from '../pages/client/Roles_Client'
    import Profile_Client from '../pages/client/Profile_Client'

/* ----------------------------------- */



import ProtectedRoutes from './ProtectedRoutes'

function Routers() {

    const navigate = useNavigate();

  return (
    <>
    <Routes>

        {/* common routes */}

        <Route path='/' element={ <Navigate to='home'/>}/>
        <Route path='/home' element={ <Home/> }/>

        <Route path='/aboutus' element={ <Aboutus/> }/>

        <Route path='/login' element={ <Login/> }/>
        <Route path='/signup' element={ <Signup/> }/>


        {/*------------------  user routes ----------------------*/}
        <Route path='/user'>
            <Route index element={ <ProtectedRoutes Comp={ <Dashboard_User/> } /> }/>

            <Route path=':userid' element={ <ProtectedRoutes Comp={ <Dashboard_User/> } /> }/>
            <Route path=':userid/dashboard' element={ <ProtectedRoutes Comp={ <Dashboard_User/> } /> } />

            <Route path=':userid/jobs' element={ <ProtectedRoutes Comp={ <Jobs/> } /> } />
            <Route path=':userid/jobs/:jobid' element={ <ProtectedRoutes Comp={ <Job/> } /> }/>

            <Route path=':userid/profile' element={ <ProtectedRoutes Comp={ <Profile_User/>  } /> } />
        </Route>

        <Route path='/jobs' element={ <Jobs/> }/>
        {/* ---------------------------------------------------- */}


        {/*-------------------  admin routes  ----------------------*/}
        <Route path='/admin'>
            <Route index element={ <ProtectedRoutes Comp={ <Dashboard_Admin/> } /> }/>

            <Route path=':adminin' element={ <ProtectedRoutes Comp={ <Dashboard_Admin/> } /> }/>
            <Route path=':adminid/dashboard' element={ <ProtectedRoutes Comp={ <Dashboard_Admin/> } /> } />

            <Route path=':adminid/clients' element={ <ProtectedRoutes Comp={ <Clients/> } /> }/>

            <Route path=':adminid/roles/approve' element={ <ProtectedRoutes Comp={ <Roles_Admin/> } /> }/>

            <Route path=':adminid/profile' element={ <ProtectedRoutes Comp={ <Profile_Admin/> } /> }/>
        </Route>
        {/* ---------------------------------------------------- */}


        {/*-------------------  client routes  -----------------*/}
        <Route path='/client'>
            <Route index element={ <ProtectedRoutes Comp={ <Dashboard_Client/> } /> } />

            <Route path=':clientid' element={ <ProtectedRoutes Comp={ <Dashboard_Client/> } /> }/>
            <Route path=':clientid/dashboard' element={ <ProtectedRoutes Comp={ <Dashboard_Client/> } /> }/>

            <Route path=':clientid/roles' element={ <ProtectedRoutes Comp={ <Roles_Client/> }/> } />

            <Route path=':clientid/profile' element={ <ProtectedRoutes Comp={ <Profile_Client/> } /> }/>
        </Route>
        {/* ---------------------------------------------------- */}

    </Routes>
    </>
  )
}

export default Routers