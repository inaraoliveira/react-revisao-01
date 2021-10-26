import React from "react";
import './Card.css';
import Angkor from '../../assets/Angkor-wat.jpg';
import Niagara from '../../assets/Cataratas-niagara.jpg'
import Plaza from '../../assets/Plaza-espana.jpg'

export default function Card(){
    return(
        <section id='galeria'>
            <div className='contGaleria'>
                <img src={Angkor} alt="Angkor Wat" />
                <h4 className='cardTitulo'>Angkor Wat</h4>
                <p className='parCard'>Sendo o maior templo religioso do mundo, o parque arqueológico é a principal atração turística de Camboja.</p>
                <p className='parLink'><a id='link' href="">VER</a></p>
            </div>
            <div className='contGaleria'>
                <img src={Niagara} alt="mar" />
                <h4 className='cardTitulo'>Cataratas do Niágara</h4>
                <p className='parCard'>Considerada uma das sete maravilhas naturais do mundo, localizadas na divisa entre o Canadá e os Estados Unidos.</p>
                <p className='parLink'><a id='link' href="">VER</a></p>
            </div>
            <div className='contGaleria'>
                <img src={Plaza} alt="mar" />
                <h4 className='cardTitulo'>Plaza de España</h4>
                <p className='parCard'>Localizada em Sevilla, a Praça de Espanha(Plaza de España) se tornou, por diversas vezes, palco de diferentes filmes de Hollywood.</p>
                <p className='parLink'><a id='link' href="">VER</a></p>
            </div>
         </section>
    );
}