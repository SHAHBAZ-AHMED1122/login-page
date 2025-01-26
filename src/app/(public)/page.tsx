import React from 'react'
import Link from 'next/link'


function page() {
  return (
    <div >
      <div className="home-div">
        <h1>Join Today.</h1>
        <div className="google">
      <Link href="/" className='google-link'><h1>Sign Up with Google</h1></Link> 
        </div>
        <br />
        <div className="email">
          <Link href="/" className='email-link'> <h1>Sign Up with Email</h1></Link>
         
        </div>
        <div className="or">
        <p >or</p>

        </div>


        <div className="create">
          <Link href="/SignUp" className='create-account-link'><h1>Create new account</h1></Link>
        </div>
        <div className="agreement"><p>
By signing up, you agree to  Terms of Service and Privacy Policy. <input type="checkbox" required  className='check'/>
</p>
</div>




        
      </div>

      <div className="second-section">
  <h1>Already have an account?
  </h1>
</div>
      <div className="sign-in">
         <Link href="/Login" className='login-link'><h1>Sign in</h1></Link> 
        </div>

    </div>
  )
}

export default page
