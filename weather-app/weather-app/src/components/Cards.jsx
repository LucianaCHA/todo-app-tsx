import React from "react";

import Card from "./Card.jsx";

import cities from '../info.js';


function Cards (props) {
    // const { cities } = props;

    if (cities){
        return(
            <div>
                {
                    cities.map((city) => 
                        <Card
                        id = {city.id}
                        max =  {city.max}
                        min = {city.min}
                        name = {city.name}
                        img = {city.img}
                        // onClose = { () => onClose(city.id) }
                        />
                    )
                }
            </div>
        )
    }else{
        return <h3> No cities yet </h3>
    }

}

export default Cards;