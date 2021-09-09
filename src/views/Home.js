import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import { FaqsContainer } from '../containers/faqs';

const Home = () => {
	return (
		<>
			<Hero
				hasBgColor={true}
				invertColor={true}
				className='illustration-section-01'
			/>
			<FeaturesTiles />
			<FeaturesSplit
				invertMobile
				topDivider
				imageFill
				className='illustration-section-02'
			/>
			<FaqsContainer />
		</>
	);
};

export default Home;
