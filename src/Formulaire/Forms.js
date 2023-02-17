import React from 'react'
import './Forms.css'
const Forms = () => {
  return (
    <div>
        <div className="center">
  <h1>Contact us</h1>
  <form>
    <div className="inputbox">
      <input type="text" required="required"/>
      <span>Email</span>
    </div>
    <div className="inputbox">
      <input type="text" required="required"/>
      <span>Password</span>
    </div>
    <div className="inputbox">
      <input type="button" value="submit"/>
    </div>
  </form>
</div>
    </div>
  )
}

export default Forms