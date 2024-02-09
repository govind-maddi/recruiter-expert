import React, { useEffect, useState } from 'react'

import './styles/signup.css';

function Signup() {

  const [ emailid,setEmailId ] = useState('');
  const [ password,setPassword ] = useState('');
  const [ repassword,SetRepassword ] = useState('');

  const [ emailerr,setEmailErr ] = useState('');
  const [ passworderr,setPasswordErr ] = useState('');
  const [ repassworderr,setRePasswordErr ] = useState('');

  const [ btn,setBtn ] = useState(false);

  useEffect(() => {

    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const string = emailid.toLocaleLowerCase();

    if(string === '')
      setEmailErr('');

    else
    {
    if(!regex.test(string))
    {
      setEmailErr('Emailid Invalid')
    }
    }
    

  },[ emailid ])

  return (
    <div>
      <form action='' id='usersignup_form'>
        <header>SignUp Form</header>
        <input type="text" placeholder='Enter emailid' onChange={(e) => setEmailId(e.target.value)}/>
        <label>{emailerr}</label>
        <input type="text" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
        <label>{passworderr}</label>
        <input type="text" placeholder='Re-enter Password' onChange={(e) => SetRepassword(e.target.value)}/>
        <label>{repassworderr}</label>

        <button type="submit" id='submitbtn' disabled={ btn }>Signup</button>

        <section id='corporate_redirect'>
          <article>Are you a corporate user ?</article>
        </section>
      </form>
    </div>
  )
}

export default Signup