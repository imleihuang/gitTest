import React from 'react';
import PropTypes from 'prop-types'

export default function ChoiceBar(props, onClick) {
return (
        <div>
            <li onClick={onClick}></li>
            <div className="">
                {props.title}
            </div>
            <div>
                {props.count}
            </div>
        </div>
    );

    
}
        ChoiceBar.propTypes = {
            onClick: PropTypes.func.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
          }
