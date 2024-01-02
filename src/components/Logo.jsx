import { Component } from 'react';
import imgfile from '@public/logo.svg';
import './Logo.css';

class Logo extends Component{
    render() {

        return(
            
            <div className="logo">
                 <img className="logoimg" src={imgfile} />
            </div>
        
        );
    }
}

export default Logo;