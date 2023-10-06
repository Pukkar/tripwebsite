import React from 'react';
import './offers.css';
import './offers.scss';
import {MdKingBed} from 'react-icons/md';
import {MdBathtub} from 'react-icons/md';
import {FaWifi} from 'react-icons/fa';
import {MdAirportShuttle} from 'react-icons/md';
import {MdLocationOn} from 'react-icons/md';
import {BsArrowRightShort} from 'react-icons/bs';

//Let us import imges=========>
import img2 from '../../Imgg/cafe1.jpg'
import img5 from '../../Imgg/cafe6.jpg'
import img7 from '../../Imgg/cafe7.jpg'

/*So since have finished styling every content,
Let us also use the same high order array methos (MAP) 
to list our offers*/
const Offers = [
    {
        id:1,
        imgSrc: img2,
        sTdeitle: 'Machu Picchu',
        location: 'Peru',
        price: '$9090'
    },
    
    {
        
        id:2,
        imgSrc: img5,
        sTdeitle: 'Gujato',
        location: 'Maxico',
        price: '$7890'
    },

    {
        id:3,
        imgSrc: img7,
        sTdeitle: 'Anko',
        location: 'Cambo',
        price: '$489'
    },

]

const Offer = () => {
    return(
        <section className='offer container section'>
            <div className="secContainer">

                <div className="secIntro">
                    <h2 className="secTitle">
                        Special Offeers
                    </h2>
                    <p>
                        From historical cities to natural specteculars, come see the best of
                        the world!
                    </p>
                </div>

                <div className="mainContent grid">

                 {
                    Offers.map(({id,imgSrc,sTdeitle,location,price})=>{
                        return(
                            <div className="singleOffer">
                            <div className="destImage">
                                <img src={imgSrc} alt="{sTdeitle}"/>
    
                                <span className="discoun">
                                    30% off
                                </span>
                            </div>
    
                            <div className="offerBody">
                                <div className="price flex">
                                    <h4>
                                        {price}
                                    </h4>
                                    <span className="status">
                                        For Rent
                                    </span>
                                </div>
    
                                <div className="amenities flex">
                                    <div className="singleAmenity flex">
                                        <MdKingBed className="icon" />
                                        <small>3 Beds</small>
                                    </div>
                                    <div className="singleAmenity flex">
                                        <MdBathtub className="icon" />
                                        <small>1 Bath</small>
                                    </div>
                                    <div className="singleAmenity flex">
                                        <FaWifi className="icon" />
                                        <small>Wi-Fi</small>
                                    </div>
                                    <div className="singleAmenity flex">
                                        <MdAirportShuttle className="icon" />
                                        <small>Shuttle</small>
                                    </div>
                                </div>
    
                                <div className="location flex">
                                    <MdLocationOn className="icon"/>
                                    <small>450 Vine #310, {location}</small>
                                </div>
    
                                <button className='btn flex'>
                                    View Details
                                    <BsArrowRightShort className="icon"/>
                                </button>
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

export default Offer;

