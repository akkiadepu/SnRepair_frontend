import React from 'react'
import './ServiceStyle.css';
import Header from './Header';
import Footer from './Footer';

function Services() {
  return (
    <div>
         {/* <!-- Our Services Section --> */}
<Header/>
       
       <div className="servicesPage">
    <section className="our-services">
        <div className="container1">
            <h1>Our Services</h1>
            <div className="services-overview">
                <div className="service-item">
                     <i className="fas fa-tools"></i>
                    <h3>Repair & Maintenance</h3>
                    <p>Aliquet proin venenatis eget nec, quisque proin euismod dui nibh ullamcorper nunc suspendisse ipsum bibendum.</p>
                </div>
                <div className="service-item">
                   <i class="fas fa-paint-roller"></i>
                    <h3>Printing & Coating</h3>
                    <p>Luctus nullam diam posuere tincidunt nam morbi leo scelerisque nulla imperdiet dictum ac fermentum urna.</p>
                </div>
                <div className="service-item">
                    <i className="fas fa-water"></i>
                    <h3>Washing & Clearing</h3>
                    <p>Neque eget habitant nisl facilisis nunc vel dolor adipiscing id in posuere et at placerat.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Services Details Section --> */}
    <section className="services-details">
        <div className="container1">
            <div className="service-detail">
                <img src="https://wallpaperaccess.com/full/2085201.jpg" alt="Brake System Maintenance and Repair"/>
                <div className="service-text">
                    <h2>Brake System Maintenance and Repair</h2>
                    <p>Pellentesque gravida iaculis amet, amet dignissim metus ac sed eget porttitor malesuada euque habitant mauris, sed vestibulum convallis vel dignissim arcu lectus nunc vulputate vitae adipiscing amet nisi ultrices quam mauris blandit.</p>
                </div>
            </div>

            <div className="service-detail">
                <div className="service-text">
                    <h2>Electrical System Repairs</h2>
                    <p>Pellentesque gravida iaculis amet, amet dignissim metus ac sed eget porttitor malesuada euque habitant mauris, sed vestibulum convallis vel dignissim arcu lectus nunc vulputate vitae adipiscing amet nisi ultrices quam mauris blandit.</p>
                </div>
                <img src="https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2021/12/01054015/Electric-cars-maintenance-centers-in-Dubai-B-30-11-1024x640.jpg" alt="Electrical System Repairs"/>
            </div>

            <div className="service-detail">
                <img src="https://goredangel.com/wp-content/uploads/2017/09/air_conditioning_repair_services.jpg" alt="Air Conditioning and Heating Repairs"/>
                <div className="service-text">
                    <h2>Air Conditioning and Heating Repairs</h2>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            <div class="service-detail">
                <div class="service-text">
                    <h2>Complete Car Painting</h2>
                    <p>Aliquet proin venenatis eget nec, quisque proin euismod dui nibh ullamcorper nunc suspendisse ipsum bibendum.</p>
                </div>
                <img src="https://www.thedrive.com/content-b/message-editor/1588102967082-depositphotos_56693085_l-2015.jpg?quality=60" alt="Complete Car Painting"/>
            </div>

            <div class="service-detail">
                <img src="https://wallpapercave.com/wp/wp2913496.jpg" alt="Spot Repair and Touch-Ups"/>
                <div class="service-text">
                    <h2>Spot Repair and Touch-Ups</h2>
                    <p>Nunc libero dui orci enim justo erat lacus, tellus tempor morbi vitae massa, augue sit egestas pellentesque nunc eu facilisi malesuada sed habitant felis curabitur nunc eros sit nisi amet sit vitae augue quis lectus tortor lorem.</p>
                </div>
            </div>

            <div class="service-detail">
                <div class="service-text">
                    <h2>Rust Repair and Prevention</h2>
                    <p>Nisi magna elementum tristique in cursus feugiat montes, massa pellentesque sed sagittis bibendum lectus, aliquam turpis volutpat lacus aliquet ultricies consequat purus ultricies pellentesque egestas turpis amet consectetur ut nunc.</p>
                </div>
                <img src="https://www.skycollision.com/wp-content/uploads/2018/07/Auto-Body-Paint-1024x682.jpg" alt="Rust Repair and Prevention"/>
            </div>
        </div>
    </section>
  
   {/* <!-- Emergency Call Section --> */}
    <section class="emergency-call">
        <div class="container1">
            <h1>24/7 Emergency Service</h1>
            <p>We provide emergency services round the clock. Call us anytime for immediate assistance and support.</p>
        </div>
    </section>

    {/* <!-- Images Section --> */}
    <section class="images-section">
        <div class="container1">
            <div class="image-grid">
                <div class="image-item">
                    <img src="https://st.depositphotos.com/1387241/4126/i/450/depositphotos_41261655-stock-photo-close-up-of-spray-gun.jpg" alt="Image 1"/>
                    <h3>Description for Image 1</h3>
                  <p>kgDuilgSdlisgdvkj,sgdBVjkgsDZbjgSBjvcbsd,kjwasdva</p>
                </div>
                <div class="image-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlLmVH3BBYxvZWYE-sq1W1BJ7GIQc4OH0m-tkrixyCf62BLdvDQmYK_UmtYl-ZkWKoKfI&usqp=CAU" alt="Image 2"/>
                    <h3>Description for Image 2</h3>
                  <p>kgDuilgSdlisgdvkj,sgdBVjkgsDZbjgSBjvcbsd,kjwasdva</p>
                </div>
                <div class="image-item">
                    <img src="https://st2.depositphotos.com/1003098/8898/i/450/depositphotos_88985818-stock-photo-mechanic-fixing-car-tire-at.jpg" alt="Image 3"/>
                    <h3>Description for Image 3</h3>                
<p>kgDuilgSdlisgdvkj,sgdBVjkgsDZbjgSBjvcbsd,kjwasdva</p>
                </div>
                <div class="image-item">
                    <img src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Image 4"/>
                    <h3>Description for Image 4</h3>
                  <p>kgDuilgSdlisgdvkj,sgdBVjkgsDZbjgSBjvcbsd,kjwasdva</p>
                </div>
                <div class="image-item">
                    <img src="https://img.freepik.com/free-photo/car-wash-detailing-station_1303-22307.jpg" alt="Image 5"/>
                    <h3>Description for Image 5</h3>
                  <p>kgDuilgSdlisgdvkj,sgdBVjkgsDZbjgSBjvcbsd,kjwasdva</p>
                </div>
                <div class="image-item">
                    <img src="https://thumbs.dreamstime.com/b/classic-car-body-paint-restoration-detailing-men-white-gloves-cleaning-car-body-car-body-paint-restoration-120976450.jpg" alt="Image 6"/>
                    <h3>Description for Image 6</h3>
                  <p>kgDuilgSdlisgdvkj,sgdBVjkgsDZbjgSBjvcbsd,kjwasdva</p>
                </div>
            </div>
        </div>
    </section>
    </div>

   <Footer/>

    </div>
  )
}

export default Services