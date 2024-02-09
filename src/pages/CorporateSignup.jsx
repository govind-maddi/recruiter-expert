import React,{ useState,useEffect } from 'react'

function CorporateSignup() {

  const [ emailid,setEmailId ] = useState('');
  const [ organisation,setOrganisation ] = useState('');
  const [ password,setPassword ] = useState('');
  const [ repassword,SetRepassword ] = useState('');

  const [ emailerr,setEmailErr ] = useState('');
  const [ organisationerr,setOrganisationErr ] = useState('');
  const [ passworderr,setPasswordErr ] = useState('');
  const [ repassworderr,setRePasswordErr ] = useState('');

  const [ btn,setBtn ] = useState(false);

  return (
    <div>
        <form action='' id='corporatesignup_form'>
        <header>SignUp Form</header>
        <input type="text" placeholder='Enter emailid' onChange={(e) => setEmailId(e.target.value)}/>
        <label>{emailerr}</label>
        <input type="text" placeholder='Enter organisation' onChange={(e) => setOrganisation(e.target.value)}/>
        <label>{organisationerr}</label>
        <input type="text" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
        <label>{passworderr}</label>
        <input type="text" placeholder='Re-enter Password' onChange={(e) => SetRepassword(e.target.value)}/>
        <label>{repassworderr}</label>

        <button type="submit" id='submitbtn' disabled={ btn }>Signup</button>
      </form>
    </div>
  )
}

export default CorporateSignup