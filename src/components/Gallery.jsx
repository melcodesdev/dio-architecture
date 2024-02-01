import React from 'react'
import { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryContents = [
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
      description: "A state-of-the-art sports facility that mimics the ebb and flow of enigmatic cubes. Located in Reykjavik, it offers a unique and immersive experience for athletes and sports enthusiasts alike. Inspired by Iceland's enigmatic and majestic natural landscape, it incorporates eco-friendly features such as solar panels and rainwater harvesting."
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
      description: 'A project in the heart of the Amazon rainforest, The Floating School is a sustainable building that floats on the river and equipped with solar panels and rain water harvesting, an innovative solution to the challenges of providing education in remote areas by giving children in isolated communities access to education.'
    },
    {
      id: 6,
      imageUrl: './images/6.jpg',
      title: 'Red Hawk Palace, Dubai',
      description: 'A luxurious residential complex inspired by the red hawk bird. Located in the heart of Dubai, it is a stunning architectural feat that captures the beauty of its namesake. Its design incorporates traditional Middle Eastern elements with a contemporary twist and shape that resembles the outstretched wings of a red hawk.'
    },
    {
      id: 7,
      imageUrl: './images/7.jpg',
      title: 'The Lantern, China',
      description: 'A modern art museum in the heart of Beijing that pays homage to traditional Chinese lanterns, The Lantern is a striking architectural masterpiece that showcases contemporary Chinese art alongside ancient relics. Its unique shape was inspired by the iconic lanterns that are a symbol of Chinese culture.'
    },
  ];

  const handleImageClick = (id) => {
    setSelectedImage((prevSelectedImage) => (prevSelectedImage === id ? null : id));
  };

  const isImageSelected = (id) => {
    return selectedImage === id;
  };


  return (
    <section className='h-[95vh] xs:h-[90vh] xl:h-[84h] flex flex-col xl:flex-row bg-black'>
    {/* HOVERED IMAGE TURNS FROM BW TO FULL COLOR, CLICKED IMAGE SHOWS FULL IMAGE AND DESCRIPTION */}
      <div className='w-screen xl:w-[60vw] flex xl:flex-row'>
        {galleryContents.map((galleryContent) => (
          <div
            key={galleryContent.id}
            className={`flex-1 ${isImageSelected(galleryContent.id) ? 'w-screen' : ''}`}
            onClick={() => handleImageClick(galleryContent.id)}
          >
            <img
              src={galleryContent.imageUrl}
              className={`object-cover w-1/7 xl:w-[60vw] h-[45vh] xl:h-[84vh] grayscale hover:grayscale-0 ${isImageSelected(galleryContent.id) ? 'absolute block z-10 left-0 w-screen overflow:visible cursor-pointer grayscale-0' : 'cursor-pointer'
                }`}
              alt="Gallery project image" />
            <h2 className={`absolute w-full font-bodoniModa font-italic text-white origin-top-left -rotate-90 ml-4 xs:ml-6 sm:ml-8 md:ml-11 lg:ml-14 -my-1 sm:-my-2 text-xs sm:text-base xl:text-2xl m-auto ${isImageSelected(galleryContent.id) ? 'hidden' : ''
              }`}
            >{galleryContent.title}</h2>
          </div>
        ))}
      </div>

      <div className='flex flex-col xl:w-[40vw] h-[50vh] xl:h-[84vh] text-white text-justify text-xs sm:text-base lg:text-xl px-4 xs:px-8 sm:px-16 xl:px-8'>
        <div className='flex flex-1'></div>
        <p className='font-bodoniModa my-2'> {selectedImage !== null ? galleryContents[selectedImage - 1].title : ''}</p>

        <p className='flex-1 font-bodoniModa'> {selectedImage !== null ? galleryContents[selectedImage - 1].description : ''}</p>

        <div className='flex flex-1'></div>

        <hr className='w-full sm:border-2 mx-auto my-2' />

        <p className='font-bebasNeue my-2'>Founded by Jane Dio, we at DIO ARCHITECTURE has built a reputation for
          excellence in architectural design and construction for over 11 years,
          showcasing a wide range of projects including commercial and residential
          buildings, hotels, schools, and public spaces worldwide</p>


        <a className='font-bebasNeue text-center border sm:border-2 border-white mt-2 mb-[15vh] xs:mb-[5vh] p-1 sm:p-2 xl:p-4 hover:bg-stone-800' href="mailto:melcodes.dev@gmail.com">SEND US AN EMAIL</a>
      </div>
    </section>
  )
}

export default Gallery
