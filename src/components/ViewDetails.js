import React from 'react';
import '../styles/ViewDetails.css';
import ListingImg from '../images/listing-img.png';

export default function ViewDetails() {
	return (
		<div>
			<div className='details-container'>
				<div className='listing-img'>
					{/* img is 5 layers thick */}
					<img src={ListingImg} alt=''></img>
					{/* Layer below img is 2 rows thicks */}
				</div>
			</div>
			ViewDetails
		</div>
	);
}
