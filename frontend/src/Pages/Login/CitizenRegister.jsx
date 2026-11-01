import { useState } from 'react'
import './CitizenRegister.css'

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  terms: false,
}

const CitizenRegister = () => {
  const [values, setValues] = useState(initialValues)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!values.fullName || !values.email || !values.phone || !values.password || !values.confirmPassword) {
      setError('Please complete all fields.')
      return
    }
    if (values.password.length < 8) {
      setError('Your password must be at least 8 characters.')
      return
    }
    if (values.password !== values.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (!values.terms) {
      setError('Please agree to the Terms and Privacy Policy.')
      return
    }
    setError('Your details are ready. Account creation will be available soon.')
  }

  return (
    <main className="register-page">
      <section className="register-form-panel">
        <a className="register-brand" href="#top" aria-label="CleanStreet home">
          <span className="register-brand-mark" aria-hidden="true"><span /></span>
          <span>Clean<span>Street</span></span>
        </a>
        <div className="register-card">
          <div className="register-heading">
            <p className="register-kicker">Citizen registration</p>
            <h1>Create Your Account</h1>
            <p>Join us in making our streets cleaner and healthier.</p>
          </div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="register-field"><label htmlFor="fullName">Full Name</label><input id="fullName" name="fullName" value={values.fullName} onChange={handleChange} placeholder="Your full name" autoComplete="name" /></div>
            <div className="register-field"><label htmlFor="email">Email Address</label><input id="email" name="email" type="email" value={values.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" /></div>
            <div className="register-field"><label htmlFor="phone">Phone Number</label><input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} placeholder="(555) 000-0000" autoComplete="tel" /></div>
            <div className="register-field"><label htmlFor="password">Password</label><div className="register-password"><input id="password" name="password" type={showPassword ? 'text' : 'password'} value={values.password} onChange={handleChange} placeholder="At least 8 characters" autoComplete="new-password" /><button type="button" onClick={() => setShowPassword((current) => !current)} aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? 'Hide' : 'Show'}</button></div></div>
            <div className="register-field"><label htmlFor="confirmPassword">Confirm Password</label><div className="register-password"><input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} value={values.confirmPassword} onChange={handleChange} placeholder="Repeat your password" autoComplete="new-password" /><button type="button" onClick={() => setShowConfirmPassword((current) => !current)} aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}>{showConfirmPassword ? 'Hide' : 'Show'}</button></div></div>
            <label className="terms-label"><input name="terms" type="checkbox" checked={values.terms} onChange={handleChange} /><span>I agree to the <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>.</span></label>
            {error && <p className="register-message" role="status">{error}</p>}
            <button className="register-submit" type="submit">Create Account <span aria-hidden="true">→</span></button>
          </form>
          <p className="signin-prompt">Already have an account? <a href="#sign-in">Sign In</a></p>
        </div>
      </section>
      <section className="register-visual" aria-labelledby="community-heading">
        <a className="visual-brand" href="#top"><span className="register-brand-mark" aria-hidden="true"><span /></span><span>Clean<span>Street</span></span></a>
        <div className="community-copy"><p className="community-kicker">Together, we can</p><h2 id="community-heading">Be Part of a Cleaner Community</h2><p>Your small action can create a big difference. Report issues and help improve your neighbourhood.</p></div>
        <div className="city-scene" aria-hidden="true"><div className="sun" /><div className="hill hill-back" /><div className="hill hill-front" /><div className="road" /><div className="tree tree-one"><i /><b /></div><div className="tree tree-two"><i /><b /></div><div className="building building-one" /><div className="building building-two" /></div>
        <p className="visual-footer"><span className="status-dot" /> Small actions. Lasting change.</p>
      </section>
    </main>
  )
}

export default CitizenRegister
