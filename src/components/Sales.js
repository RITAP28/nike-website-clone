import React, { useState } from "react";
import './Sales.css';

export default function Sales() {
    const[index, currentindex] = useState(0);

    const handlePrevious = () => {
        if(index>0){
            currentindex(index - 1);
        } else if(index === 0){
            let lastindex = index.length - 1;
            currentindex(lastindex)
        }
    }

    const handleNext = () => {
        if(index === 0 || index > 0){
            currentindex(index =+ 1);
        } else if(index === 2){
            let firstindex = index.length - 2;
            currentindex(firstindex);
        }
    }

    
    return (
        <div className="carousel__Sales">

            <div className="carousel__Sales__item">
            
                <p>Save Up to 40%</p>
            </div>
            <div className="carousel__Sales__underItem">
                <a href="www.google.com">Shop all our new Markdowns</a>
            </div>


            <div className="carousel__Sales__item">
            
                <p>Hello Nike app</p>
            </div>
            <div className="carousel__Sales__underItem">
                <a href="www.google.com">Download the app to access everything Nike. Get your Great!</a>
            </div>


            <div className="carousel__Sales__item">
            
                <p>Free Delivery</p>
            </div>
            <div className="carousel__Sales__underItem">
                <a href="www.google.com">Applies to orders of $150 or more. View details</a>
            </div>

            <a className="prev" onClick={handlePrevious}>Previous</a>
            <a className="next" onClick={handleNext}>Next</a>

        </div>
        
);
}