import React from 'react';
import './popular.css';
import './popular.scss';
import {BsArrowLeftShort} from 'react-icons/bs';
import {BsArrowRightShort} from 'react-icons/bs';
import {BsDot} from 'react-icons/bs';

import img2 from '../../Imgg/cafe2.jpg';
import img5 from '../../Imgg/cafe3.jpg';
import img7 from '../../Imgg/cafe4.jpg';
import img9 from '../../Imgg/cafe5.jpg';

const Data = [
    {
        id:1,
        imgSrc: img2,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX'
    },
    
    {
        id:2,
        imgSrc: img5,
        destTitle: 'Gujato',
        location: 'Maxico',
        grade: 'CULTURAL RELAX'
    },

    {
        id:3,
        imgSrc: img7,
        destTitle: 'Anko',
        location: 'Cambo',
        grade: 'CULTURAL RELAX'
    },

    {
        id:4,
        imgSrc: img9,
        destTitle: 'Taj',
        location: 'Indai',
        grade: 'CULTURAL RELAX'
    },

]

const Popular = () => {
    return(
        <section className='popular section container'>
            <div className="secContainer">

                <div className="secHeader flex">
                    <div className="textDiv">
                        <h2 className="secTitle">
                            Popular Destination
                        </h2>
                        <p>
                            From historical cities to natural
                            specteculars, come see the best of the 
                            world!
                        </p>
                    </div>

                    <div className="iconsDiv flex">
                        <BsArrowLeftShort className="icon
                        leftIcon"/>
                        <BsArrowRightShort className="icon"/>
                    </div>
                </div>

                <div className="mainContent grid">
                    {
                        Data.map(({id,imgSrc,destTitle,location,grade})=>{
                            return(
                                <div className="singleDestination">
                                <div className="destImage">
        
                                    <img src={imgSrc} alt="Image title"/>
        
                                    <div className="overlayInfo">
                                        <h3>{destTitle}</h3>
                                        <p>
                                           {location}
                                        </p>
                  
                                     <BsArrowRightShort className='icon'/>
                                    </div>
        
                                </div>
        
                                <div className="destFooter">
                                    <div className="number">
                                        0{id}
                                    </div>
        
                                    <div className="destText flex">
                                        <h6>
                                            {location}
                                        </h6>
                                        <span className='flex'>
                                           <span className="dot">
                                            <BsDot className="icon"/>
                                           </span>
                                           Dot
                                        </span>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                    
                   
                </div>

            </div>
        </section>
    )
}

export default Popular;
