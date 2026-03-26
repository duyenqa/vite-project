const LinkSocial = ({ data }) => {
    return <li>
        <a href={data.mainLink} target="_blank">
            <svg
                className="button-icon"
                role="presentation"
                aria-hidden="true"
            >
                <use href={data.iconLink}></use>
            </svg>
            {data.textLink}
        </a>
    </li>
};

export default LinkSocial;