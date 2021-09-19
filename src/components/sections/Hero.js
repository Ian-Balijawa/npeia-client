import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const propTypes = {
	...SectionProps.types,
};

const defaultProps = {
	...SectionProps.defaults,
};

const Hero = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	...props
}) => {
	const outerClasses = classNames(
		'hero section center-content',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'hero-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	return (
		<section {...props} className={outerClasses}>
			<div className='container-sm'>
				<div className={innerClasses}>
					<div className='hero-content'>
						<h2
							className='mt-0 mb-16 reveal-from-bottom'
							data-reveal-delay='200'
						>
							National{' '}
							<span className='text-color-primary'>Private</span>{' '}
							Educational Institutions Association{' '}
						</h2>
						<div className='container-xs'>
							<p
								className='m-0 mb-32 reveal-from-bottom'
								data-reveal-delay='400'
							>
								We are the{' '}
								<span className='text-color-primary'>
									Leading
								</span>{' '}
								National Private Education Institutions’
								Umbrella, Promoter and Advocacy Forum
							</p>
							<p>
								<span
									className='text-color-secondary'
									style={{ fontSize: '40px' }}
								>
									“{' '}
								</span>
								<spa
									className='reveal-from-top'
									data-reveal-delay='340'
								>
									Inspiring Private Educational
									Entrepreneurship, innovation, Progress and
									Advancing{' '}
								</spa>
								<span
									className='text-color-primary reveal-from-bottom'
									data-reveal-delay='700'
								>
									Excellence
								</span>
								<span
									className='text-color-secondary'
									style={{ fontSize: '40px' }}
								>
									”{' '}
								</span>
							</p>
							<div>
								<ButtonGroup>
									<Link
										to={ROUTES.REGISTER}
										style={{ color: 'white' }}
									>
										<Button color='primary'>
											Register Your School
										</Button>
									</Link>
								</ButtonGroup>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
