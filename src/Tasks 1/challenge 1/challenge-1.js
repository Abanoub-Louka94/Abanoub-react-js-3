function Image(props) {
    const image = props.properties;
    return (
        <div className="image">
            <img
                src={image.url +'szV5sdG'}
                alt={image.name}
                width={image.width}
                height={image.height}
            />
        </div>
    )
}

export default function Gallery() {
    return (
        <section className="profile">
            <h2>Maria Skłodowska-Curie</h2>
            <Image
                properties={{url:'https://i.imgur.com/', name:'avatar',width:70,height:700}}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    physicist and chemist
                </li>
                <li>
                    <b>Awards: 4 </b>
                    (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
                </li>
                <li>
                    <b>Discovered: </b>
                    polonium (chemical element)
                </li>
            </ul>
        </section>
    )
}