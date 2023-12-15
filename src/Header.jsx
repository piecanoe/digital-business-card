import React from "react"
import avatar from '/src/dufus_color3_lowres.jpg'

export default function Header() {
    return (
        <div>
            <a href="https://karendu.netlify.com" target="_blank">
                <img src={avatar} className="avatar" alt="avatar" />
            </a>
            <h1 className="name">Karen Du</h1>
            <h2 className="title">Full Stack Engineer</h2>
            <h3 className="website"><a href="https://karendu.netlify.com">karendu.nelify.app</a></h3>
            <button>
                <a className="email">Email</a>
            </button>
            <button>
                <a className="github">GitHub</a>
            </button>
        </div>
    )
}