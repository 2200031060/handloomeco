import React from 'react';
import '../styles/About.css'; // Adjust to your file location
const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>
<h1>Welcome to Handloom Fashion!</h1>
At Handloom Fashion, we celebrate the timeless artistry and rich heritage of handloom textiles. Our brand is dedicated to showcasing unique, handcrafted products that reflect the skill and passion of artisans from various regions. Each piece in our collection tells a story, woven with the threads of tradition, culture, and creativity.
<div className="about-image">
        <img src={require('../assets/about.jpeg')} alt="About Us" />
      </div>
<h1>Our Mission</h1>
Our mission is to empower artisans and promote sustainable practices in the fashion industry. We believe that every handloom product is a labor of love, crafted with care and attention to detail. By supporting local artisans, we aim to preserve traditional weaving techniques and ensure that these invaluable skills are passed down through generations.
<h1>Sustainability</h1>
We are committed to sustainable fashion. Handloom weaving is an eco-friendly process that uses minimal machinery and resources. By choosing handloom products, you are supporting a sustainable alternative to mass-produced textiles. Our collections are made from natural fibers and dyed using organic methods, ensuring that you can wear our products with pride, knowing they are kind to the environment.
<h1>Join Our Journey.....</h1>
At Handloom Fashion, we invite you to join us on our journey to celebrate craftsmanship, sustainability, and the beauty of handloom textiles. Whether you're looking for a statement piece for a special occasion or a versatile addition to your wardrobe, our collection has something for everyone.
Explore our range of handloom products and experience the elegance and artistry of traditional craftsmanship. Together, let’s make fashion meaningful.</p>
    </div>
  );
};

export default About;
