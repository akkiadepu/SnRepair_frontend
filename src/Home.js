
import React from 'react'
import Header from './Header'
import './Homestyle.css';
import Footer from './Footer';

import RequestForm from './components/RequestForm';
import HomeActivitsComponent from './components/HomeActivitsComponent';

function Home() {
  return (
    
    <div>
<Header/>
         <section id="hero" className="hero">
        <div className="container1">
            <div className="hero-content">
                <h1>we care about your car</h1>
                <p>Felis etiam pellentesque scelerisque eleifend in aliquam sed morbi nisl lectus mi proin ultricies quis bibendum.</p>
                <a href="#" className="cta-button">
                    <i className="fas fa-phone"></i> Call Us Today: +91 85010 15055
                </a>
            </div>
        </div>
    </section>

    <section id="services" className="services">
    <div className="container1">
        <h2>Our Services</h2>
        <div className="service-list">
            <div className="service-item">
                <img src="https://wallpaperaccess.com/full/2085201.jpg" alt="Auto Maintenance Services"/>
                <h3>Auto Maintenance Services</h3>
                <p>Tridentum et nulla turpis pulvinar sed proin metus, ligula rutrum enim, ut arcu sodales aliquet.</p>
            </div>
            <div className="service-item">
                <img src="https://img.freepik.com/premium-photo/disc-brake-vehicle-repair-process-new-tire-replacement-car-brake-repairing-garage-suspension-car-maintenance-brakes-shock-absorber-systems-close-up_189498-1879.jpg?w=2000" alt="Brake Repair Pads & Rotors"/>
                <h3>Brake Repair Pads & Rotors</h3>
                <p>Sed arcu ultricies non facilisi cursus ut, id sed eget nibh arcu nisi posuere eleifend od.</p>
            </div>
            <div className="service-item">
                <img src="https://cdn.websites.hibu.com/a87f4b1137fa4927a7a574b86f0dd7ee/dms3rep/multi/clear.jpg" alt="Car Painting"/>
                <h3>Car Painting</h3>
                <p>Faetus sit nulla viverra felis amet at turpis lectus ut at elementum aliquam tellus dui dictum.</p>
            </div>
            <div className="service-item">
                <img src="https://arabgt.com/wp-content/uploads/2022/10/%D8%BA%D8%B3%D9%8A%D9%84-%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA-%D8%AE%D8%B1%D8%B7%D9%88%D9%85-%D8%A7%D9%84%D8%B6%D8%BA%D8%B7-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%8A-%D9%85%D8%A7%D9%83%D9%8A%D9%86%D8%A9.jpg" alt="Car Washing"/>
                <h3>Car Washing</h3>
                <p>Ut facilisis vel tortor eget aenean non at condimentum at dis at nullam pulvinar risus nullam vel.</p>
              
            </div>
        </div>
     <center> <a href="Services" className="activity-links">Our services</a>
       </center>
    </div>
</section>

    {/* <section id="activities" className="activities">
    <div className="container1">
        <h2>Latest Activities</h2>
      <h3>lskhbfldiukghfdisgfbvliuskj bikbiudsakfbsdliuk,gsduik lhgaudligkasuilakgsliuk</h3>
      <br/>
      <br/> */}
        {/* <div className="activity-list"> */}
            {/* <div className="activity-item">
                <img src="https://wallpaperaccess.com/full/2085201.jpg" alt="Activity 1"/>
                <h3>Activity Title 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <a href="activits" className="activity-link">Click Here</a>
            </div> */}
         
            <HomeActivitsComponent/>
          
            {/* <div className="activity-item">
                <img src="https://img.freepik.com/premium-photo/disc-brake-vehicle-repair-process-new-tire-replacement-car-brake-repairing-garage-suspension-car-maintenance-brakes-shock-absorber-systems-close-up_189498-1879.jpg?w=2000" alt="Activity 2"/>
                <h3>Activity Title 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <a href="activits" className="activity-link">Click Here</a>
            </div>
            <div className="activity-item">
                <img src="https://cdn.websites.hibu.com/a87f4b1137fa4927a7a574b86f0dd7ee/dms3rep/multi/clear.jpg" alt="Activity 3"/>
                <h3>Activity Title 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <a href="activits" className="activity-link">Click Here</a>
            </div>
            <div className="activity-item">
                <img src="https://arabgt.com/wp-content/uploads/2022/10/%D8%BA%D8%B3%D9%8A%D9%84-%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA-%D8%AE%D8%B1%D8%B7%D9%88%D9%85-%D8%A7%D9%84%D8%B6%D8%BA%D8%B7-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%8A-%D9%85%D8%A7%D9%83%D9%8A%D9%86%D8%A9.jpg" alt="Activity 4"/>
                <h3>Activity Title 4</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <br/>
                <a href="activits" className="activity-link">Click Here</a>
            </div> */}
        {/* </div> */}
    {/* </div>
</section> */}
  
   <section id="why-choose-us" className="why-choose-us">
        <div className="container1">
            <h2>Why Choose Us</h2>
            <div className="features">
                <div className="feature">
                    <i className="fas fa-tools"></i>
                    <h3>Expert Engineer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-award"></i>
                    <h3>Expensive Skills</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-shield-alt"></i>
                    <h3>Guarantee Services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="feature">
                    <i className="fas fa-thumbs-up"></i>
                    <h3>Trusted Work</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="testimonials" className="testimonials">
        <div className="container1">
            <h2>Testimonial</h2>
            <div className="testimonial-list">
                <div className="testimonial-item">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className="testimonial-author">
                        <img src="https://via.placeholder.com/50" alt="Author 1"/>
                        <div>
                            <p className="name">Hemanth Chintala</p>
                            <p className="role">Google Reviewer</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className="testimonial-author">
                        <img src="https://via.placeholder.com/50" alt="Author 2"/>
                        <div>
                            <p className="name">Mohan R V</p>
                            <p className="role">Google Reviewer</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-item">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className="testimonial-author">
                        <img src="https://via.placeholder.com/50" alt="Author 3"/>
                        <div>
                            <p className="name">Sundeep Sunadi</p>
                            <p className="role">Google Reviewer</p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="https://www.google.com/maps/place/SN+AUTO+ENTERPRISES/@16.5081113,80.6699006,17z/data=!4m8!3m7!1s0x3a35fb9b8e442b9b:0xa9c8b28b5b69cb0e!8m2!3d16.5081113!4d80.6724755!9m1!1b1!16s%2Fg%2F11j01htl2d?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target='_blank' className="more-comments">See More Comments</a>
        </div>
    </section>

    <section id="request-info" className="request-info">
        <div className="container1">
            <div className="request-content">
                <div className="request-text">
                    <h2>Request Info</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Ut elit tellus, luctus nec</li>
                        <li>Pulvinar dapibus leo</li>
                    </ul>
                </div>
                {/* <div className="request-form">
                    <form action="#">
                        <label for="name">Name *</label>
                        <input type="text" id="name" name="name" required/>

                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" required/>

                        <label for="phone">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" required/>

                        <label for="vehicle-model">Vehicle Model</label>
                        <input type="text" id="vehicle-model" name="vehicle-model"/>
                    
                        <label for="address">Address</label>
                        <input type="text" id="address" name="address"/>

                        <label for="message">Your Message *</label>
                        <textarea id="message" name="message" rows="4" required></textarea>

                        <button type="submit">Send Request</button>
                    </form>
                </div> */}
                    <RequestForm/>
                
            </div>
        </div>
    </section>


    <Footer/>

    

</div>
   
  )
}

export default Home

