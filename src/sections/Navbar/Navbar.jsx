import "./Navbar.css"
import { sectionLinks } from "../../services/sectionLinks"
import { useState } from "react"
import Hamburger from "../../components/Hamburger/Hamburger"

export default function Navbar({ windowDimension }) {
  const [hamburger, setHamburger] = useState(false);
  const [visible, setVisible] = useState(false);
  const [navStyle, setNavStyle] = useState(false);
  
  const sectionJSX = sectionLinks.map((section, index) =>
    <a
      key={index}
      href={section.href}
      className={navStyle ? `nav-link ${section.class} active` : `nav-link ${section.class}`}
    >
      {section.name}
    </a>
  )

  const handleClick = () => {
    setVisible(!visible);
    setHamburger(!hamburger);
  };

  const isMobile = windowDimension <= 640;

  const changeBackground = () => {
    if (window.scrollY >= 20){
      setNavStyle(true)
    } else {
      setNavStyle(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={navStyle ? 'active' : "none"}>
      {isMobile ? (<h1 className={navStyle ? "nav-h1 active" : "nav-h1"}>Jon Withers</h1>) : (<h1 className={navStyle ? "nav-h1 active" : "nav-h1"}>Jon Withers - Data Scientist</h1>)}
      {isMobile ? (
        <div className="mobile-console">
          <Hamburger className="hamburger-image" handleClick={handleClick} />
          <div
            className="hamburger-dropdown"
            style={{ display: hamburger && visible ? "grid" : "none" }}
            onClick={handleClick}
          >
            <p className="hamburger-close">✕</p>
            {sectionJSX}
          </div>
        </div>
      ) : (
        <div className="desktop-console">
          {sectionJSX}
        </div>
      )}
    </nav>
  )
}