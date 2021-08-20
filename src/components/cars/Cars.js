import Car from "../car/Car";
import {useEffect, useState} from "react";
import {getCars} from "../servises/car.service";
export default function Cars() {
    let [cars, setCars] = useState([]);
    useEffect(() => {
        getCars().then(value => setCars([...value]));
    }, []);
    return (
        <div>{
            cars.map(value => <Car item={value} key={value.id}/>)
        }
        </div>
    );
}
