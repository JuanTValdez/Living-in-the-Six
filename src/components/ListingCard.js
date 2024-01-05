import React from 'react';
import '../styles/ListingCard.css';
import ListingImage from '../images/listing-img.png';
import PawPrint from '../images/pets.svg';
import Parking from '../images/parking.svg';
import SaveListingOn from '../images/save-listing-on.svg';
import SaveListingOff from '../images/save-listing-off.svg';
export default function ListingCard() {
	return (
		<>
			<h1 className='neighborhood-name font-size-22'>Liberty Village</h1>
			<div className='card-wrapper'>
				<img src={ListingImage} alt='' className='listing-img' />
				<div className='posted-wrapper'>
					<p className='font-size-10'>Posted 1 hour ago</p>
					<div className='listing-icons'>
						<img src={PawPrint} alt='' />
						<img src={Parking} alt='' />
					</div>
				</div>

				<div className='price-wrapper'>
					<div className='price-address'>
						<p className='price font-size-22'>$1597</p>
						<p className='address font-size-14'>70 Spadina Rd.</p>
					</div>

					<img src={SaveListingOn} alt='' className='save-listing' />
					
				</div>
				<div className='listing-details'>
					{' '}
					<p className='item1 font-size-10'>2 Bed</p>
					<p className='item2 font-size-10'>1 Bath </p>
					<p className='item1 font-size-10'> 850 sq/ft </p>
					<p className='item2 font-size-10'>Apartment</p>{' '}
					<div>
					<button className='iris-btn font-size-10'>VIEW DETAILS</button>
					</div>
				</div>
			</div>
		</>
	);
}
