import React from 'react'

/* layout components */
import Header from './ParentContComponents/Header'
import Footer from './ParentContComponents/Footer'
import Body from './ParentContComponents/Body'
import Notify from './ParentContComponents/Notify'
import PageBlackenContext from './context/PageBlackenContext'


function Layout() {
  return (
    
    /* root div for web app */
    <div>
        {/* first child of root div */}
        <div>

            <PageBlackenContext>
            <Header/>
                <Notify/>

                <Body/>

            <Footer/>
            </PageBlackenContext>
        </div>
    </div>
  )
}

export default Layout