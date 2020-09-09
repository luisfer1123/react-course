import React from 'react';
import exerciseImg from '../images/imagen1.jpg';
import segunda from '../images/imagen2.webp';

class Card extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <img src={exerciseImg}/>
                    <img src={segunda}/>
                </div>
                <div>
                    <h1>Technique Guide definitive</h1>
                    <p>Learn Amazing street workout and calisthenics</p>
                </div>
            </div>
        )
    }
}

export default Card 