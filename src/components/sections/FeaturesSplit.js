import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
	...SectionSplitProps.types,
};

const defaultProps = {
	...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	invertMobile,
	invertDesktop,
	alignTop,
	imageFill,
	...props
}) => {
	const outerClasses = classNames(
		'features-split section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'features-split-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const splitClasses = classNames(
		'split-wrap',
		invertMobile && 'invert-mobile',
		invertDesktop && 'invert-desktop',
		alignTop && 'align-top'
	);

	const sectionHeader = {
		title: 'Peer support monitoring and Supervision',
		paragraph:
			'We provide termly peer support supervision to members for quality standards We encourage our members to benchmarking best practices in pedagogy, management, educational investment for quality standardsWe annually Appraise member schools for quality improvement',
	};

	return (
		<section {...props} className={outerClasses}>
			<div className='container'>
				<div className={innerClasses}>
					<SectionHeader
						data={sectionHeader}
						className='center-content'
					/>
					<div className={splitClasses}>
						<div className='split-item'>
							<div
								className='split-item-content center-content-mobile reveal-from-left'
								data-reveal-container='.split-item'
							>
								<div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
									Why Join us?
								</div>
								<h3 className='mt-0 mb-12'>
									Let's Patern Together
								</h3>
								<p className='m-0'>
									<li>
										Professional growth through workshops,
										seminars, conferences, summits.
									</li>{' '}
									<li>
										Access to Educational entrepreneurship
										and school management Resources
									</li>{' '}
									<li>
										Access to wealth of education
										information Support supervision and
										Inspections.
									</li>{' '}
									<li>
										Access to joint education programs and
										investment finance Social Capital and
										net working with Edu - entrepreneurs
										through Welfare programs
									</li>{' '}
									<li>
										Input into national policies and
										dialogue framework which impact private
										education sector and private schools,
										institutions and private education
										facilities.
									</li>
									<li
										className='text-color-primary'
										style={{ listStyle: 'none' }}
									>
										And More
									</li>
								</p>
							</div>
							<div
								className={classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container='.split-item'
							>
								<Image
									src={
										'https://csipay.com/wp-content/uploads/2016/10/vision.jpg'
									}
									alt='Features split 01'
									width={528}
									height={396}
								/>
							</div>
						</div>

						<div className='split-item'>
							<div
								className='split-item-content center-content-mobile reveal-from-right'
								data-reveal-container='.split-item'
							>
								<div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
									Your role as a fully paid up Member
								</div>
								<h3 className='mt-0 mb-12'>Full Membership</h3>
								<p className='m-0'>
									<li>
										Actively participating in meetings,
										activities and events regularly
									</li>
									<li>
										Paying membership and annual
										subscription on time
									</li>
									<li>
										Volunteering when available at NPEIA
										events
									</li>
									<li>
										Maintaining professional conduct by
										treating fellow members with and our
										guests with respect and courtesy.
									</li>{' '}
									<li>
										Recruiting new members in NPEIA To be an
										ambassador of NPEIA and an advocate of
										NPEIA
									</li>
									<li
										className='text-color-primary'
										style={{ listStyle: 'none' }}
									>
										And More
									</li>
								</p>
							</div>
							<div
								className={classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container='.split-item'
							>
								<Image
									src={
										'https://www.tsnn.com/sites/default/files/membership.jpg'
									}
									alt='Features split 02'
									width={528}
									height={396}
								/>
							</div>
						</div>

						<div className='split-item'>
							<div
								className='split-item-content center-content-mobile reveal-from-left'
								data-reveal-container='.split-item'
							>
								<div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
									Membership Benefits and More
								</div>
								<h3 className='mt-0 mb-12'>
									Your Benefits as a Fully Paid Member
								</h3>
								<p className='m-0'>
									<li>
										Professional growth through workshops,
										seminars, conferences.
									</li>
									<li>
										Access to Educational management
										Resources
									</li>
									<li>
										Access to wealth of education
										information and Support supervision.
									</li>
									<li>
										Access to joint education programs and
										investment finance
									</li>{' '}
									<li>
										Social Capital and net working with Edu-
										entrepreneurs through Welfare programs
									</li>
									<li>
										Input into national policies and
										dialogue framework which impact private
										education sector and private schools,
										institutions and private education
										facilities
									</li>
									<li
										className='text-color-primary'
										style={{ listStyle: 'none' }}
									>
										And More
									</li>
								</p>
							</div>
							<div
								className={classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container='.split-item'
							>
								<Image
									src={require('./../../assets/images/features-split-image-03.png')}
									alt='Features split 03'
									width={528}
									height={396}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
