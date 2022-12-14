import React from 'react'
import './SearchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/101466988.webp?k=ffcefd067a00a7a0079ff5909171901dab17aeef563384294744c39caf7db9a6&o=&s=1" alt="" className="siImg" />

        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with Air conditioning</span>
            <span className="siFeatures">Entire studio - 1 bathroom - 21m<sup>2</sup> 1 full bed </span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today</span>

        </div>

        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$125</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className='siCheckButton'>See Availability</button>
            </div>
        </div>
      
    </div>
  )
}

export default SearchItem
