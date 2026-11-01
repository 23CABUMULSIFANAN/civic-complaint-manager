import { useState } from 'react'
import './CitizenLogin.css'

const CitizenLogin = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <main className="login-page">
      <section className="login-visual" aria-label="CleanStreet introduction">
        <div className="visual-content">
          <a className="brand" href="/" aria-label="CleanStreet home">
            <span className="brand-mark" aria-hidden="true"><span /></span>
            <span>Clean<span>Street</span></span>
          </a>
          <div className="visual-copy">
            <p className="eyebrow">A cleaner city starts with you</p>
            <h1>Make your street<br /><em>matter.</em></h1>
            <p className="visual-description">Report local issues, follow progress, and help your community thrive.</p>
          </div>
          <div className="community-note">
            <span className="status-dot" aria-hidden="true" />
            <span><strong>2,418</strong> issues resolved this month</span>
          </div>
        </div>
        <div className="visual-shape shape-one" aria-hidden="true" />
        <div className="visual-shape shape-two" aria-hidden="true" />
      </section>

      <section className="login-panel">
        <div className="login-card">
          <div className="mobile-brand brand"><span className="brand-mark" aria-hidden="true"><span /></span><span>Clean<span>Street</span></span></div>
          <div className="form-heading">
            <p className="form-kicker">Citizen portal</p>
            <h2>Welcome back</h2>
            <p>Sign in to keep your neighborhood moving forward.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            <div className="password-label"><label htmlFor="password">Password</label><a href="/forgot-password">Forgot password?</a></div>
            <div className="password-field">
              <input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" autoComplete="current-password" required />
              <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? 'Hide' : 'Show'}</button>
            </div>
            <button className="submit-button" type="submit">Sign in <span aria-hidden="true">→</span></button>
          </form>
          <p className="register-prompt">New to CleanStreet? <a href="/register">Create an account</a></p>
          <div className="secure-note"><span aria-hidden="true">⌁</span> Your information is secure and private</div>
        </div>
      </section>
    </main>
  )
}

export default CitizenLogin
