import "./About.css"

export default function About(props) {
  const downloadFile = () => {
    window.location.href = "https://www.google.com"
  }
  return (
    <section id="about">
      <hr/>
      <h2>
        About me
      </h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <button className="resume-button" onClick={downloadFile}>
        Resume
      </button>
    </section>
  )
}