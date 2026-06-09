import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="brand">MySite</div>
      <nav className="nav" aria-label="Primary">
        <a href="#/">Home</a>
        <a href="#/about">About</a>
        <a href="#/services">Services</a>
        <a href="#/contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header