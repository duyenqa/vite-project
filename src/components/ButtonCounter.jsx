const ButtonCounter = ({handleChangeCount}) => {
    return <button
        className="counter"
        onClick={handleChangeCount}
    >
       Increment
    </button>
};

export default ButtonCounter;