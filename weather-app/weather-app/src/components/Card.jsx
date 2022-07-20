import React from "react";

function Card (props) {
    const {max, min, img, onClose, name } = props;

    return (
        <div>
            {name} 
            <div>
                <div> Min. {min} °C </div>
            </div>

            <div>
                <div> Max. {max} °C </div>
            </div>

            <div>
                <img
                    src={`http://openweathermap.org/img/wn/${img}@2x.png`}
                    alt = 'weather icon'
                />
            </div>
        </div>
    )

}

export default Card;