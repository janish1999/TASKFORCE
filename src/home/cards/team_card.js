import React from 'react';

const Team_card = (props)=>{
    return(
    <div>
        <h4>
            {props.name}
        </h4>
        <h5>
            {props.post}
        </h5>
        <div>
        <i className="fab fa-linkedin">
        </i>
        <i className="fab fa-facebook">
        </i>
        </div>
        <img src='img.jpg'/>
    </div>
    );
};

export default Team_card;