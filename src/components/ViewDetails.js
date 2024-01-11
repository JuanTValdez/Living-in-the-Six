import React from 'react';
import '../styles/ViewDetails.css';
import ListingImg from '../images/listing-img.png';
import Garbage from '../images/icon-garbage.svg';
import Heating from '../images/icon-heating.svg';
import Recycling from '../images/icon-recycling.svg';
import Water from '../images/icon-water.svg';

export default function ViewDetails() {
	return (
		<div>
			<div className='details-container'>
				<div className='listing-img'>
					{/* img is 5 layers thick */}
					<img src={ListingImg} alt=''></img>
					{/* Layer below img is 2 rows thicks */}
				</div>
				<div className='tabs'>
					<div className='photos-tab font-size-10'>PHOTOS</div>
					<div className='map-tab font-size-10'>MAP</div>
				</div>

				<div className='utilities'>
					<div className='included'>Utilities Included</div>
					<div className='utils-listed'>
						<div>
							<img src={Garbage} alt='' />

							<p>Garbage</p>
						</div>
						<div>
							<img src={Heating} alt='' />
							<p>Heating</p>
						</div>
						<div>
							<img src={Recycling} alt='' />
							<p>Recycling</p>
						</div>

						<div>
							<img src={Water} alt='' />
							<p>Water</p>
						</div>
					</div>
				</div>
			</div>
			ViewDetails
		</div>
	);
}
