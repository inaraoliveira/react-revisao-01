import React from "react";
import './Header.css'

export default function Header(){
    return(
        <div>
            <header>
                <nav id='nav'>
                    <h3 className='menuNav'><a href="">Home</a></h3>
                    <h3 className='menuNav'><a href="">Perfil</a></h3>
                </nav>
            </header>
        </div>
    );
}