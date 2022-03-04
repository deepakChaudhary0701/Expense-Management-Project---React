

const Cards = (props) => {
    const allClasses = props.className;
    return (
    <div className={allClasses}>{ props.children}</div>
    );
}

export default Cards;