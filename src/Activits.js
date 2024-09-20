import React, { useEffect,useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import './ActivitsStyle.css'
import axios from 'axios';
import ActivitsCardComponent from './components/ActivitsCardComponent';

function Activits() {
  return (
    <div>
<Header/>
<main>
        <section class="projects">
            <h1>Our latest Projects</h1>
          <ActivitsCardComponent/>
        </section>
    </main>
    <Footer/>
    </div>
  )
}

export default Activits