import { useState } from 'react'
import './CredentialLogin.css'

const roleContent = {
  admin: {
    title: 'Admin Login',
    description: 'Enter your credentials to access the dashboard',
    usernameLabel: 'Username',
    username: 'admin',
    switchText: 'Staff member?',
    switchLabel: 'Staff login',
    switchHref: '/staff-login',
  },
  staff: {
    title: 'Staff Login',
    description: 'Sign in to manage and update community reports',
    usernameLabel: 'Username',
    username: '',
    switchText: 'Administrator?',
    switchLabel: 'Admin login',
    switchHref: '/admin-login',
  },
}

const CredentialLogin = ({ role }) => {
  const [showPassword, setShowPassword] = useState(false)
  const content = roleContent[role]

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <main className="credential-page">
      <a className="credential-brand" href="/" aria-label="CleanStreet home">
        <span className="credential-brand-mark" aria-hidden="true"><span /></span>
        <span>Clean<span>Street</span></span>
      </a>
      <section className="credential-card" aria-labelledby="credential-title">
        <div className="credential-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <rect x="5" y="10" width="14" height="10" rx="2" />
            <path d="M8 10V7a4 4 0 1 1 8 0v3" />
          </svg>
        </div>
        <h1 id="credential-title">{content.title}</h1>
        <p className="credential-description">{content.description}</p>

        <form className="credential-form" onSubmit={handleSubmit}>
          <label htmlFor={`${role}-username`}>{content.usernameLabel}</label>
          <div className="credential-input-wrap">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="8" r="3.2" />
              <path d="M5.5 20v-1.5a6.5 6.5 0 0 1 13 0V20z" />
            </svg>
            <input
              id={`${role}-username`}
              name="username"
              type="text"
              placeholder="Enter your username"
              defaultValue={content.username}
              autoComplete="username"
              required
            />
          </div>

          <label htmlFor={`${role}-password`}>Password</label>
          <div className="credential-input-wrap">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="5" y="10" width="14" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 1 1 8 0v3" />
            </svg>
            <input
              id={`${role}-password`}
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
            <button
              className="credential-password-toggle"
              type="button"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <button className="credential-submit" type="submit">Sign In</button>
        </form>

        <p className="credential-hint">Sign-in is not connected yet. Your account credentials will be enabled when authentication is added.</p>
        <p className="credential-switch">{content.switchText} <a href={content.switchHref}>{content.switchLabel}</a></p>
      </section>
      <p className="credential-footer">CleanStreet · A cleaner city starts with you</p>
    </main>
  )
}

export default CredentialLogin
