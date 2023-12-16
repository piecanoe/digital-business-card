import React from "react"
import avatar from '/src/dufus_color3_lowres.jpg'

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
                    <a className="email" href="mailto:karenkaydu@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i> Email</a>
                </button>
                <button>
                    <a className="github" href="https://github.com/piecanoe"><i class="fa fa-github" aria-hidden="true"></i> GitHub</a>
                </button>
            </div>
        </div>
    )
}