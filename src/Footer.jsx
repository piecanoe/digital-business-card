import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="socials">
            <a href="https://www.linkedin.com/in/karenkdu/">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </a>
            <a href="https://twitter.com/karendufus">
            <FontAwesomeIcon icon={faSquareTwitter} size="2xl" />
            </a>
        </div>
    )
}