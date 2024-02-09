import React,{ useState,useEffect } from 'react'

import { Link } from 'react-router-dom';

function Login() {
  const [ emailid,setEmailId ] = useState('');
  const [ password,setPassword ] = useState('');

  const [ emailerr,setEmailErr ] = useState('');
  const [ passworderr,setPasswordErr ] = useState('');

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
        <header>Login Form</header>
        <input type="text" placeholder='Enter emailid' onChange={(e) => setEmailId(e.target.value)}/>
        <label>{emailerr}</label>
        <input type="text" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
        <label>{passworderr}</label>

        <button type="submit" id='submitbtn' disabled={ btn }>Signup</button>

        <section id='corporate_redirect'>
          <article><Link to='/corporate_login'>Are you a corporate user ?</Link></article>
        </section>
      </form>
    </div>
  )
}

export default Login