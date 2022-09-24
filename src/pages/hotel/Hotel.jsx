
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import './Hotel.css'

function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos =[
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/287646801.jpg?k=1566685faa1715996a81852fe236997b258ce1605d0c652ce82c7087ec8bda03&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/320597058.jpg?k=abdd25d064ae48042516e04774c439353457a80aba7757488c59d7abcedcf77a&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/287646859.jpg?k=eca2c6a8c06286d7d87bb5ad65c6db71fd16f01b0a3940342a0a6f6e21f0d363&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/320332054.jpg?k=c75960c72e4128cb50069b243e1dea7309d9d09bc8d614dfaa072fc53c43c83b&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/287646846.jpg?k=066eef08270b48615f9d13304ed1b5ce7bb2914d1b07dffb804a7729df3be940&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/287646869.jpg?k=8c22dac223c16ca11493353fa7c63bd12b8de6e21454cb70221f7408e5bfbd98&o=&hp=1"
    },
  ]

  const handleOpen =(i)=>{
    setSlideNumber(i);
    setOpen(true)
  }


  const handleMove=(direction)=>{
      let newSlideNumber;

      if(direction === 'l'){
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
      } else {
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1;
      }

      setSlideNumber(newSlideNumber);
  }



  return (
    <div style={{overflow: 'hidden'}}>
      <Navbar />
      <Header type='list' />

      <div className="hotelContainer">
       { open && <div className="slider">
         <FontAwesomeIcon onClick={()=>setOpen(false)} icon={faCircleXmark} className='close'/>
         <FontAwesomeIcon onClick={()=>handleMove("l")} icon={faCircleArrowLeft} className='arrow' />
         <div className="sliderWrapper">
           <img src={photos[slideNumber].src} alt="" className="sliderImg" />
         </div>
         <FontAwesomeIcon onClick={()=>handleMove("r")} icon={faCircleArrowRight} className='arrow' />

        </div>}
        <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {
              photos.map((photo, i)=>(
               <div className="hotelImgWrapper" key={photo.src}>
                  <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
               </div>
              ))
            }

          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">
                Stay in the heart of Krakow
              </h1>
              <p className="hotelDesc">
              Adjacent to the Miami Convention Center, this hotel is minutes away from the beautiful beaches of Miami. It features a daily breakfast and spacious, air-conditioned accommodations.

Rooms at Comfort Inn & Suites Downtown Brickell-Port of Miami are furnished with a cable television and a view of the city or Miami River. All rooms have ironing facilities and a telephone as well.

Guests of Comfort Inn & Suites Downtown Brickell-Port of Miami can relax in the outdoor pool and surrounding sundeck. Weekday newspapers can be found in the 24-hour lobby.

Shuttle services can be arranged to the Port of Miami, which is 3.2 km away, for an additional fee. Miami International Airport is 14 minutes' drive from Comfort Inn & Suites Downtown Brickell-Port of Miami.

This is our guests' favorite part of Miami, according to independent reviews.

Couples in particular like the location – they rated it 8.8 for a two-person trip.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>

          </div>

        </div>
      </div>

      <MailList />
        <Footer />
    </div>
  )
}

export default Hotel
