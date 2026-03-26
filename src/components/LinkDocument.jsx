const LinkDocument = ({ link, thumbnail, des, textLink }) => {
    return <li>
        <a href={link} target="_blank">
            <img className="logo" src={thumbnail} alt={des} />
            {textLink}
        </a>
    </li>
};

export default LinkDocument;