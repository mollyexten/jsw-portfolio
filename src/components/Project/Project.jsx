import "./Project.css";

export default function Project(props) {
  const {
    image,
    alt,
    title,
    description,
    github
  } = props
  
  return (
    <div className="project-card">
      <a href={github} className="project-image-link">
        <img src={image} alt={alt} className="project-image" />
      </a>
      <article className="project-description">
        <h3 className="project-title">{title}</h3>
        <p className="project-paragraph">{description}</p>
        <a href={github} className="link-button">GitHub repo</a>
      </article>
    </div>
  )
}