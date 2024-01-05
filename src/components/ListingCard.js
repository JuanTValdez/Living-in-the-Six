import React from 'react';
import '../styles/ListingCard.css';
import ListingImage from '../images/listing-img.png';
import PawPrint from '../images/pets.svg';
import Parking from '../images/parking.svg';
export default function ListingCard() {
	return (
		<div className='card-wrapper'>
			<img src={ListingImage} alt='' className='listing-img' />
			<div className='posted-wrapper'>
				<p className='font-size-10'>Posted 1 hour ago</p>
				<div className='listing-icons'>
					<img src={PawPrint} alt='' />
					<img src={Parking} alt='' />
				</div>
			</div>

			
		</div>
	);
}
