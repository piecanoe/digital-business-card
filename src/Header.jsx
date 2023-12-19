import React from "react"
import avatar from '/src/dufus_color3_lowres.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Header() {
    return (
        <div className="header-section">
            <a href="https://karendu.netlify.com" target="_blank">
                <img src={avatar} className="avatar" alt="avatar" />
            </a>
            <h1 className="name">Karen Du</h1>
            <h2 className="title">Full Stack Engineer</h2>
            <h3 className="website"><a href="https://karendu.netlify.com">karendu.nelify.app</a></h3>
            <div className="buttons">
                <button>
                    <a className="email" href="mailto:karenkaydu@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> Email</a>
                </button>
                <button>
                    <a className="github" href="https://github.com/piecanoe"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
                </button>
            </div>
        </div>
    )
}