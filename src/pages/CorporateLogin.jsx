import React,{useState,useEffect } from 'react'

function CorporateLogin() {
    const [ emailid,setEmailId ] = useState('');
    const [ organisation,setOrganisation ] = useState('');
    const [ password,setPassword ] = useState('');
  
    const [ emailerr,setEmailErr ] = useState('');
    const [ organisationerr,setOrganisationErr ] = useState('');
    const [ passworderr,setPasswordErr ] = useState('');
  
    const [ btn,setBtn ] = useState(false);
  
    return (
      <div>
          <form action='' id='corporatesignup_form'>
          <header>Login Form</header>
          <input type="text" placeholder='Enter emailid' onChange={(e) => setEmailId(e.target.value)}/>
          <label>{emailerr}</label>
          <input type="text" placeholder='Enter organisation' onChange={(e) => setOrganisation(e.target.value)}/>
          <label>{organisationerr}</label>
          <input type="text" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
          <label>{passworderr}</label>
  
          <button type="submit" id='submitbtn' disabled={ btn }>Signup</button>
        </form>
      </div>
    )
}

export default CorporateLogin