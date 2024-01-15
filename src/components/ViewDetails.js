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

					{/* <div className='time-posted'> */}
					<p className='time-posted font-size-10'>Posted 1 hour ago</p>
					<div className='perks'>
						<img src={Pets} alt='' />
						<img src={Parking} alt='' />
					</div>
					{/* </div> */}

					<p className='price font-size-22'>$1597 </p>
					<p className='address font-size-14'>70 Spadina Rd.</p>
					<div className='home-details'>
						<p>2 Bed</p>
						<p>1 Bath</p>
						<p>850 sq/ft</p>
						<p>Apartment</p>
					</div>

					<div className='info-tabs'>
						<span className='tab tab1 font-size-10'>About</span>
						<span className='tab tab2 font-size-10'>Features</span>
						<span className='tab tab3 font-size-10'>Amenities</span>
					</div>
				</div>
			</div>
		</div>
	);
}
