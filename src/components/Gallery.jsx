import React from 'react'
import { useState } from 'react'

const Gallery = () => {
  const galleryContent = [
    {
      id: 1,
      imageUrl: './images/1.jpg',
      title: 'The Skybridge, USA',
      description: 'An innovative and sustainable office building in New York City that stands out with its sky bridge, The Skybridge boasts a unique design which maximizes natural light and air circulation while minimizing energy consumption, with a vertical garden that provide a much-needed green space in the concrete jungle of Manhattan.'
    },
    {
      id: 2,
      imageUrl: './images/2.jpg',
      title: 'The Phoenix Tower, Australia',
      description: "A skyscraper that rises high above the city of Sydney, The Phoenix Tower is a breathtaking architectural feat that captures the essence of the phoenix, symbolizing the city's rebirth and renewal. Its sustainable features such as a green roof and a wind turbine making it a model for sustainable urban development."
    },
    {
      id: 3,
      imageUrl: './images/3.jpg',
      title: 'The Enigma, Iceland',
      description: "A state-of-the-art sports facility that mimics the ebb and flow of enigmatic cubes. Located in Reykjavik, The Enigma offers a unique and immersive experience for athletes and sports enthusiasts alike. Inspired by Iceland's enigmatic and majestic natural landscape, it incorporates eco-friendly features such as solar panels and rainwater harvesting."
    },
    {
      id: 4,
      imageUrl: './images/4.jpg',
      title: 'Concrete-Crystal Garden, Singapore',
      description: "A magnificent botanical garden enclosed in a concrete glass dome designed to provide an immersive experience. Housing rare and exotic plant species from around the world, The Crystal Gardens was developed in response to Singapore's push for greener initiatives. A unique architecture that combines aesthetics and sustainability."
    },
    {
      id: 5,
      imageUrl: './images/5.jpg',
      title: 'The Floating School, Brazil',
      description: 'A groundbreaking project in the heart of the Amazon rainforest, The Floating School is a sustainable building that floats on the river and equipped with solar panels and rain water harvesting, an innovative solution to the challenges of providing education in remote areas by giving children in isolated communities access to education.'
    },
    {
      id: 6,
      imageUrl: './images/6.jpg',
      title: 'Red Hawk Palace, Dubai',
      description: 'A luxurious residential complex inspired by the red hawk bird. Located in the heart of Dubai, The Red Hawk Palace is a stunning architectural feat that captures the beauty and elegance of its namesake. Its design incorporates traditional Middle Eastern elements with a contemporary twist and shape that resembles the outstretched wings of a red hawk.'
    },
    {
      id: 7,
      imageUrl: './images/7.jpg',
      title: 'The Lantern, China',
      description: 'A modern art museum in the heart of Beijing that pays homage to traditional Chinese lanterns, The Lantern is a striking architectural masterpiece that showcases contemporary Chinese art alongside ancient relics. Its unique shape was inspired by the iconic lanterns that are a symbol of Chinese culture.'
    },
  ]


  return (
    <section className='h-[90vh]'>
      <div className='w-screen flex flex-row'>
        {galleryContent.map((content) => (
          <div key={content.id} className='flex-1'>
            <img src={content.imageUrl} className='object-cover w-1/7 h-[50vh]' alt="Gallery project image" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery