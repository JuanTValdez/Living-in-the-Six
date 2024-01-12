import React from 'react';
import '../styles/ViewDetails.css';
import ListingImg from '../images/listing-img.png';
import Garbage from '../images/icon-garbage.svg';
import Heating from '../images/icon-heating.svg';
import Recycling from '../images/icon-recycling.svg';
import Water from '../images/icon-water.svg';
import Pets from '../images/pets.svg';
import Parking from '../images/parking.svg';
import CloseBtn from '../images/times-circle-solid.svg';

export default function ViewDetails() {
	return (
		<div>
			<div className='details-container'>
				<div className='listing-img'>
					<img src={ListingImg} alt=''></img>
				</div>
				<div className='tabs'>
					<div className='photos-tab font-size-10'>PHOTOS</div>
					<div className='map-tab font-size-10'>MAP</div>
				</div>

				<div className='utilities'>
					<div className='included font-size-14'>Utilities Included</div>
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

				<div className='info-container'>
					{/* close-btn class is in Global Variables stylesheet */}
					<img className='close-btn' src={CloseBtn} alt='' />

					<div className='time-posted'>
						<p className='font-size-10'>Posted 1 hour ago</p>
						<div className='perks'>
							<img src={Pets} alt='' />
							<img src={Parking} alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
