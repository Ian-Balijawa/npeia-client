import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
	...SectionTilesProps.types,
};

const defaultProps = {
	...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {
	const outerClasses = classNames(
		'features-tiles section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'features-tiles-inner section-inner pt-0',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const tilesClasses = classNames(
		'tiles-wrap center-content',
		pushLeft && 'push-left'
	);

	const sectionHeader = {
		title: 'Statement of core values',
		paragraph:
			'Team work and solidarity, Integrity and professionalism, Equity and equality, Transparency and Accountability, Excellency and Innovation',
	};

	return (
		<section {...props} className={outerClasses}>
			<div className='container'>
				<div className={innerClasses}>
					<SectionHeader
						data={sectionHeader}
						className='center-content'
					/>
					<div className={tilesClasses} style={{ listStyle: 'none' }}>
						<div className='tiles-item reveal-from-bottom'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8 text-color-primary'>
										Advocacy
									</h4>
									<p
										className='m-0 text-sm'
										style={{ textAlign: 'left' }}
									>
										<li>
											We are the voice for the private
											schools’ proprietors.
										</li>
										<li>
											We advocate for private schools on
											matters of policy and law
										</li>
									</p>
								</div>
							</div>
						</div>

						<div
							className='tiles-item reveal-from-bottom'
							data-reveal-delay='200'
						>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8 text-color-primary'>
										Collaboration and Net working
									</h4>
									<p
										className='m-0 text-sm'
										style={{ textAlign: 'left' }}
									>
										<li>
											We Link private schools with other
											schools nationally and
											internationally
										</li>
										<li>
											We Link members with national and
											international organizations.
										</li>
										<li>
											We Link members with education
											related service providers
										</li>
										<li>
											We Link members to other
											professional training institutes
											locally and globally.
										</li>
									</p>
								</div>
							</div>
						</div>

						<div
							className='tiles-item reveal-from-bottom'
							data-reveal-delay='400'
						>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8 text-color-primary'>
										Capacity Building
									</h4>
									<p
										className='m-0 text-sm'
										style={{ textAlign: 'left' }}
									>
										<li>
											We hold annual workshops,
											conferences, Summits, Seminars and
											training for members
										</li>
										<li>
											We train members through private
											schools affiliated institutes link
											Mubs, UMI We enable members
											benchmark best practices locally and
											internationally
										</li>
										<li>
											We link with Business and
											professional training institutions
											for tailored courses for school
											managers and directors like MUBS,
											UMI among others.
										</li>
									</p>
								</div>
							</div>
						</div>

						<div className='tiles-item reveal-from-bottom'>
							<div className='tiles-item-inner'>
								<div className='features-tiles-item-content'>
									<h4 className='mt-0 mb-8 text-color-primary'>
										{' '}
										Lobbying
									</h4>
									<p
										className='m-0 text-sm'
										style={{ textAlign: 'left' }}
									>
										<li>
											We lobby policy makers and
											technocratic implementers from
											district to national level
										</li>
										<li>
											We lobby service providers,
											industries, factories, agencies that
											have school related needs
										</li>
										<li>
											We lobby political and technocratic
											leaders on matters of policies on
											private schools
										</li>
										<li>
											We lobby funders and development
											organizations
										</li>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
