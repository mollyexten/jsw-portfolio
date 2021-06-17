import "./Navbar.css"
import { sectionLinks } from "../../services/sectionLinks"
import { useState } from "react"
import Hamburger from "../../components/Hamburger/Hamburger"

export default function Navbar({ windowDimension }) {
  const [hamburger, setHamburger] = useState(false);
  const [visible, setVisible] = useState(false);
  
  const sectionJSX = sectionLinks.map((section, index) =>
    <a
      key={index}
      href={section.href}
      className={`nav-link ${section.class}`}
    >
      {section.name}
    </a>
  )

  const handleClick = () => {
    setVisible(!visible);
    setHamburger(!hamburger);
  };

  const isMobile = windowDimension <= 640;

  return (
    <nav>
      {isMobile ? (<h1 className="mobile-nav-h1">Jon Withers</h1>) : (<h1 className="desktop-nav-h1">Jon Withers - Data Scientist</h1>)}
      {isMobile ? (
        <div className="mobile-console">
          <Hamburger className="hamburger-image" handleClick={handleClick} />
          <div
            className="hamburger-dropdown"
            style={{ display: hamburger && visible ? "flex" : "none" }}
            onClick={handleClick}
          >
            {/* <p className="hamburger-close">✕</p> */}
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