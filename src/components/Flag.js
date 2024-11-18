import React from "react";
import FlagIcon from '../images/icon.png';
import '../Style/flag.css';

function Flag(){
    return(
        <div className="flag">
          <img src={FlagIcon} className="flagicon" />
          &nbsp;  India
        </div>
    );
}
export default Flag;