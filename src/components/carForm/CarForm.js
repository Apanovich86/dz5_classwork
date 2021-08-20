import {useEffect, useState} from "react";
import {getCars, saveCar} from "../servises/car.service";
import Car from "../car/Car";

export default function CarForm() {
    let [cars, setCars] = useState([]);
    let [model, setModel] = useState('model');
    let [price, setPrice] = useState('price');
    let [year, setYear] = useState('year');
    useEffect(() => {
        getCars();
    }, []);

    const onSubmitForm = (e) => {
        e.preventDefault();
        let tempCar = {model, price, year};
        saveCar(tempCar).then(value => setCars([...cars, value]));
    }
    const onInputChangeModel = (e) => {
        let carmodel = e.target.value;
        setModel(carmodel);
    }
    const onInputChangePrice = (e) => {
        let price = e.target.value;
        setPrice(price);
    }
    const onInputChangeYear = (e) => {
        let year = e.target.value;
        setYear(year);
    };
    return (
        <div style={{display: "flex", flexDirection: "column-reverse"}}>
            {
                cars.map((value, index) => <Car item={value} key={value.id}/>)
            }
            <form onSubmit={onSubmitForm}>
                <input type="text" name={'model'} value={model} onInput={onInputChangeModel} maxLength={20}/>
                <input type="number" name={'price'} onInput={onInputChangePrice} min={0}/>
                <input type="number" name={'year'} onInput={onInputChangeYear} min={1990} max={2021}/>
                <input type="submit" value={'save'}/>
            </form>
        </div>
    );
}