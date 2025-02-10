<template>
    <div class="container pt-20  text-white  font-bold">
    <h1 class="text-black text-5xl" style="margin-right: 50%;margin-left: 36%;">Testomonials</h1>
      <div class="testomonial__list">
        <!-- Iterate over testimonials array -->
        <div 
          class="testomonial__item" 
          v-for="(testimonial, index) in testimonials" 
          :key="index" 
          :style="{ '--i': index + 1 }"
        >
          <p>{{ testimonial.content }}</p>
          <img :src="testimonial.image" :alt="testimonial.name" />
          <h3>{{ testimonial.name }}</h3>
          <span v-if="testimonial.position">{{ testimonial.position }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Testimonials data
  const testimonials = ref([
    {
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus cum officia ab, sapiente voluptas ipsum quas hic sunt, vitae veritatis sint temporibus incidunt ',
      image: 'https://images.pexels.com/photos/3702843/pexels-photo-3702843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Shymaa galaye',
      position: ''
    },
    {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ?',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Shyam Sharma',
      position: 'Founder of G'
    },
    {
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus cum officia ab, sapiente voluptas ipsum quas hic sunt, vitae veritatis sint temporibus incidunt',
      image: 'https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Mohammad Ali',
      position: ''
    },
    {
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, modi.',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Lora Muhsen',
      position: 'Doctor'
    },
    {
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, modi.',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Mohammad Salah',
      position: ''
    },
    {
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, modi.',
      image: 'https://images.pexels.com/photos/1652340/pexels-photo-1652340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'karam jaber',
      position: 'IT'
    },
    // Add other testimonials here as needed
  ]);
  </script>
  
  <style scoped>
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  :root {
    --p_clr: 13, 183, 173;
  }
  
  body {
    font-family: "Montserrat", serif;
    background-color: #f2f2f2;
    font-size: 14px;
    line-height: 1.5;
    color: #fff;
  }
  
  .container {
    width: min(1024px, 100%);
    padding-inline: 15px;
    margin-inline: auto;
  }
  
  .testomonial__item {
    background: black;
    padding: 20px;
    display: grid;
    grid-template-columns: 50px 1fr;
    gap: 20px;
    align-items: center;
    margin-block-end: 20px;
    -webkit-column-break-inside: avoid;
    -moz-column-break-inside: avoid;
    column-break-inside: avoid;
    box-shadow: 0 20px 30px -15px rgba(29, 1, 80, 0.1);
    border-radius: 15px;
    border: 1px solid #f2f3ff;
    position: relative;
    scale: 1;
    transition: 1s ease-in-out;
    transform: translateY(0);
    height: auto; /* Ensure proper height adjustment */
  }
  
  .testomonial__item p {
    grid-column: 1/3;
    font-size: 13px;
    line-height: 1.6;
    margin-bottom: 10px; /* Add margin for spacing between text and name */
  }
  
  .testomonial__list {
    column-gap: 20px;
    column-width: 260px;
    margin-block-start: 30px;
  }
  
  .testomonial__item img {
    width: 50px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
  }
  
  .testomonial__item h3 {
    font-weight: 600;
  }
  
  .testomonial__item h3 span {
    font-size: 11px;
    font-weight: normal;
    display: block;
    opacity: 0.8;
  }
  
  .testomonial__item::after {
    content: "";
    background-image: url("https://assets.website-files.com/63515dd50b85d8b0082ad9b5/63515e0705695e64229e5eb7_quotes-fill.svg");
    position: absolute;
    inset: 0;
    background-repeat: no-repeat;
    background-size: 100px;
    opacity: 0.05;
    background-position: top right;
    pointer-events: none;
  }
  
  /* Ensure that text does not overflow */
  .testomonial__item {
    overflow: hidden;
  }
  </style>
  