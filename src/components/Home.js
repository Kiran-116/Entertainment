import React from 'react'

const img1 = require('../images/img1.png');

export const Home = () => {
  return (
    <div>
        <div class="home-section align-items-center section" id="home">
            <div class="container">
                <div class="row align-item-center">
                    <div class="home-text">
                        <p> <b> Welcome </b> </p>
                        <h1> Entertainment </h1>
                        <h2> ki duniya mein apka swagat </h2>
                        <a href="#about" class="btn link-item"> More About Me </a>
                        <a href="#portfolio" class="btn link-item"> Portfolio </a>
                    </div>
                    <div class="home-img">
                        <div class="img-box">
                            <img src={img1} alt="profile-img" srcset="" width="400px" />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}
