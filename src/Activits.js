import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './ActivitsStyle.css'

function Activits() {
  return (
    <div>
<Header/>
<main>

        <section class="projects">
            <h1>Our latest Projects</h1>
            <div class="project">
                <h2>Project Heading</h2>
                <div class="images">
                <center>    <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=road-car-vehicle-170811.jpg&fm=jpg" alt="before"/>
                    <img src="https://wallpaperaccess.com/full/534288.jpg" alt="after"/>
                  </center>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <hr/>
            </div>
            {/* <!-- Repeat the project block five more times --> */}
            <div class="project">
                <h2>Project Heading</h2>
                <div class="images">
                    <img src="before.jpg" alt="before"/>
                    <img src="after.jpg" alt="after"/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <hr/>
            </div>
            <div class="project">
                <h2>Project Heading</h2>
                <div class="images">
                    <img src="before.jpg" alt="before"/>
                    <img src="after.jpg" alt="after"/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <hr/>
            </div>
            <div class="project">
                <h2>Project Heading</h2>
                <div class="images">
                    <img src="before.jpg" alt="before"/>
                    <img src="after.jpg" alt="after"/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <hr/>
            </div>
            <div class="project">
                <h2>Project Heading</h2>
                <div class="images">
                    <img src="before.jpg" alt="before"/>
                    <img src="after.jpg" alt="after"/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <hr/>
            </div>
            <div class="project">
                <h2>Project Heading</h2>
                <div class="images">
                    <img src="before.jpg" alt="before"/>
                    <img src="after.jpg" alt="after"/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <hr/>
            </div>
        </section>
    </main>
    <Footer/>
    </div>
  )
}

export default Activits