import './Car.css'

export default function Car({item}) {
    return (
        <div>
            <p><span className={"blu-font"}>id: </span>{item.id}</p>
            <p><span className={'blu-font'}>model: </span>{item.model}</p>
            <p><span className={'blu-font'}>price: </span>{item.price}</p>
            <p><span className={'blu-font'}>year: </span>{item.year}</p>
            <br/>
        </div>
    );
}