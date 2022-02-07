function Card(props) {
    const { title, description } = props;

    return (
        <div className="Card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#">Learn more</a>
        </div>
    )
}

export default Card;