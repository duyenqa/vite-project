const LinkSocial = ({ href, textLink, logo }) => {
    return <li>
        <a href={href} target="_blank">
            <svg
                className="button-icon"
                role="presentation"
                aria-hidden="true"
            >
                <use href={logo}></use>
            </svg>
            {textLink}
        </a>
    </li>
};

export default LinkSocial;