import './item.css';

function Item(props){
    const itemName=props.name;
    return (
    <div>
        <p className="neet">{itemName}</p>
        {props.children}
    </div>
    )
}

export default Item;