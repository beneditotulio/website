// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { ImageSlider } from "./ImageSlider";


import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const images = [
  'logo192.png',
  'logo512.png',
];
export const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex(currentImageIndex - 1);
  };

  const nextImage = () => {
    setCurrentImageIndex(currentImageIndex + 1);
  };

  return (
    <div>
      <img src={images[currentImageIndex]} alt="Module" />
      <button onClick={previousImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Welcome to our company!</h1>
      <p>We are a company that specializes in providing PHC modules to help streamline your business operations. </p>
      <ImageSlider images={images} />
      <h2>Features and benefits of PHC modules:</h2>
      <ul>
        <li>Improved efficiency and productivity</li>
        <li>Reduced manual errors</li>
        <li>Real-time data access and reporting</li>
      </ul>
      <button>Contact Us</button>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About Our Company</h1>
      <p>We are a team of experienced professionals dedicated to providing high-quality PHC modules to help businesses thrive. </p>
      <p>PHC stands for Plant Health Care and it is a crucial aspect of business operations. It ensures that all systems are running smoothly and efficiently, which leads to increased productivity and profitability. </p>
      <img src="phc-dashboard.png" alt="PHC Dashboard" />
    </div>
  );
};

const Products = () => {
  return (
    <div>
      <h1>Our PHC Modules</h1>
      <ul>
        <li>
          <h2>Module 1</h2>
          <p>Description of Module 1</p>
          <img src="module-1.png" alt="Module 1" />
        </li>
        <li>
          <h2>Module 2</h2>
          <p>Description of Module 2</p>
          <img src="module-2.png" alt="Module 2" />
        </li>
      </ul>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h1>Get in Touch</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Submit</button>
      </form>
      <p>We are located at 123 Main St, City, State 12345</p>
      <p>Phone: (555) 555-5555</p>
      <p>Email: info@ourcompany.com</p>
      <div>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </nav>
      <p>Copyright 2022 Our Company</p>
    </div>
  );
};


const App = () => (
  <div className="App">
    <header className="App-header">
    <div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
    
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <Home />
    <About />
    <Products />
    <Contact />
    <Footer />
  </div>
);

export default App;
