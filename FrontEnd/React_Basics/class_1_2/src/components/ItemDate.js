import './ItemDate.css';
import Item from './item';

function ItemDate(props){
    const day=props.day;
    const month=props.month;
    const year=props.year;

    return(
        <div className='date'>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    )
}

export default ItemDate;