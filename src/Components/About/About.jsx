import React from 'react';
import './about.css';
import './about.scss';

import img from '../../Imgg/c1.jpg';
import img2 from  '../../Imgg/c2.jpg';
import img3 from  '../../Imgg/c3.jpg';

import video from '../../Imgg/video.mp4';

const About = () => {
    return(
        <section className='about section'>
            <div className="secContainer">
                <h2 className="title">
                    Why Hikings
                </h2>
                <div className="mainContent container grid">
                    <div className="singleItem">
                        <img src={img2} alt="Image Name"/>

                        <h3>100+ Mountains</h3>

                        <p>
                            Research shows hhhhhhhhhhhhhhh of
                            daily yyyyyyyyyyyyyyyyyyyyy ell-being.
                        </p>

                        <div className="singleItem">
                        <img src={img}alt="Image Name"/>

                        <h3>1000+ Hikings</h3>

                        <p>
                            Research shows hhhhhhhhhhhhhhh of
                            daily yyyyyyyyyyyyyyyyyyyyy ell-being.
                        </p>
                        
                    </div>
                    <div className="singleItem">
                        <img src={img3} alt="Image Name"/>

                        <h3>2000+ Customer</h3>

                        <p>
                            Research shows hhhhhhhhhhhhhhh of
                            daily yyyyyyyyyyyyyyyyyyyyy ell-being.
                        </p>
                        
                    </div>
                    

                    </div>
                </div>

                <div className="videoCard container">
                    <div className="cardContent grid">

                        <div className="cardText">
                            <h2>Wonderful House experience nin
                                there!</h2>
                            <p>
                                The Adeeee jjjjj jiojeiww jewiwfioqnengf
                                equallty jjj bkojfwhwuewf jvieghj
                                five cccoo.
                            </p>
                            
                            <div className="cardVideo">
                                <video src={video} autoPlay loop muted type="video/mp4"></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;