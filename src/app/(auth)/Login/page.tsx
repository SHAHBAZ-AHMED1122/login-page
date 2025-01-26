import React from 'react'

function page() {
  return (
    <div>
      <div className="login-details">
      <h1 className='login-heading'>Login.</h1>
      </div>

      <form action="/" className='form-two'>
      <div className='login-one'>
      <label htmlFor="">Email</label> <br />
      <input type="email" required placeholder='enter email' className='login-email' />
      </div>
      <div className='login-two'>
      <label htmlFor="">Password</label> <br />
      <input type="password" required placeholder='enter password' className='login-password' />
      </div>

<p className='forget'>forget password</p>


<button className='login-button'>
  Login
</button>

      </form>
    </div>
  )
}

export default page
