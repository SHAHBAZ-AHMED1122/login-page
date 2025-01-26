import React from 'react'

function page() {
  return (

    <div>




    <div className='create-account-box'>
      <h1>create account</h1>
    </div>

<div className="form">
<form action="/">


    <label htmlFor="" className='first-name'>First Name</label>
    <br />
    <input type="text" placeholder='enter your name' required  className='one'/>


    <div className="second-input">
    <label htmlFor="" className='last-name'>Last Name</label> <br />
    <input type="text" placeholder='enter your last name' required  className='two'/></div>
<br />
    <label htmlFor="">Email</label><br />
    <input type="email" required className='three' placeholder='enter your email' />
<div>
    <br /><br />
<label htmlFor="">Password</label><br />
<input type="password" required placeholder='please enter password' className='four' />
</div>
<br /><br />
<label htmlFor="">Confirm Password</label><br />
<input type="password" required placeholder='please confirm  password' className='five' />
<br />
<button className='button'>Create</button>

    </form>
</div>







    </div>
  )
}

export default page
