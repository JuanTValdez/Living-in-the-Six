import React from 'react';
import '../styles/ViewDetails.css';
import ListingImg from '../images/listing-img.png';

export default function ViewDetails() {
	return (
		<div>
			<div className='details-container'>
				<div className='listing-img'>
					<img src={ListingImg} alt=''></img>
				</div>
			</div>
			ViewDetails
		</div>
	);
}
