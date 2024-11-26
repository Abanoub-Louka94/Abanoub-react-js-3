function Button(props) {
    const btColor = props.color;
    const  size = props.size;
    return (
        <div className="my-button">
            <button style={{backgroundColor:btColor.secondary,width:size+"px"}}>click</button>
        </div>
    )
}


export default function MyButton(){
    return (
        <Button
        color = {{primary: 'green', secondary: 'blue', danger: 'red'}}
        size = {70}
        />
    )
};