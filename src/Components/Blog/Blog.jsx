import React from 'react';
import './blog.css';
import './blog.scss';
import {BsArrowRightShort} from 'react-icons/bs';

import img from '../../Imgg/b5.jpg';
import img2 from '../../Imgg/b2.jpg';
import img3 from '../../Imgg/b3.jpg';
import img4 from '../../Imgg/b4.jpg';

//So guys here also we are going to use the Map mathod to display our posts.

const Posts = [
    {
        id: 1,
        postImage: img,
        title: ' said It can be said thatno one prefers',
        desc: 'we will gain hope and courage The light of the day will make things appear more vividly to us.can be said thatno one prefer.'
    },  
    {
        id: 2,
        postImage: img2,
        title: 'It can be said thatno one prefers',
        desc: 'we will gain hope and courage The light of the day will make things appear more vividly to us.can be said thatno one prefer.'
    },    
    {
        id: 3,
        postImage: img3,
        title: ' be said thatno one It can prefers',
        desc: 'we will gain hope and courage The light of the day will make things appear more vividly to us.can be said thatno one prefer.'
    },    
    {
        id: 4,
        postImage: img4,
        title: 'prefers It can be said thatno one prefers',
        desc: 'we will gain hope and courage The light of the day will make things appear more vividly to us.can be said thatno one prefer.'
    },    
          
        
]

const Blog = () => {
    return(
        <section className='blog container section'>
            <div className="secContainer">
""
                <div className="secIntro">
                    <h2 className='secTitle'>
                        Our Best Blog?
                    </h2>
                    <p>
                        An insi gygyhu kpkkp'll bhjf67r7hy world.
                    </p>
                </div>

                <div className="mainContainer grid">
                    {
                        Posts.map(({id,postImage,title,desc})=>{
                            return(
                                <div className="singlePost grid">
                                <div className="imgDiv">
                                    <img src={postImage} alt={title}/>
                                </div>
        
                                <div className="postDetails">
                                    <h3>
                                    {title}
                                    </h3>
                                    <p>{desc}</p>
                                 </div> 
        
                                 <a href="#" className="flex">
                                 Read More
                                    <BsArrowRightShort className="icon"/>
                                    
                                 </a>
                                
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog;


