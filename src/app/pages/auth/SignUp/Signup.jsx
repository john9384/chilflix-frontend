// import { useHistory } from "react-router-dom"
import React from "react"
import "./signup.scss"

export const Signup = () => {
  const [formState, setFormState] = React.useState({
    email: "",
    username: "",
    password: "",
  })

  const emailRef = React.useRef()
  const setEmail = () => {
    setFormState({ ...formState, email: emailRef.current.value })
  }
  // const history = useHistory()
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
  }
  return (
    <div className="signup">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!formState.email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={setEmail}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="username"
              placeholder="username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <button className="registerButton" onClick={handleSubmit}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
