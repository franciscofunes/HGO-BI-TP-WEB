import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from './../elements/Image';

const propTypes = {
	...SectionTilesProps.types,
};

const defaultProps = {
	...SectionTilesProps.defaults,
};

const Testimonial = ({
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
		'testimonial section',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);

	const innerClasses = classNames(
		'testimonial-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	);

	const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

	const sectionHeader = {
		title: 'Recomendación Herramientas BI',
		paragraph:
			'Luego de contactar varios proveedores, buscar información y participar de las respectivas demostraciones de los productos, coincidieron en llevar a selección final las siguientes opciones',
	};

	return (
		<section id='recomendaciones' {...props} className={outerClasses}>
			<div className='container'>
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className='center-content' />
					<div className={tilesClasses}>
						<div
							className='tiles-item reveal-from-right'
							data-reveal-delay='200'
						>
							<div className='tiles-item-inner'>
								<div className='testimonial-item-conten'>
									<div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
										1° Opción
									</div>
									<p className='text-sm mb-0'>
										— Posibilidad de creación de varios tipos de reportes y
										tableros de comando. Posee plantillas para facilitar el
										diseño.
									</p>
									<p className='text-sm mb-0'>
										— Permite navegar la información de un reporte en diferentes
										direcciones (drill down, drill across), así como agregar
										nuevos indicadores y filtros a un reporte, en tiempo real,
										por lo que es posible realizar reportes ad-hoc.
									</p>
									<br />
									<a
										href='https://www.docdroid.net/6zsdf5n/herramientas-bi-opcion-1-pdf'
										target='_blank'
									>
										Leer más...
									</a>
								</div>
								<div className='testimonial-item-footer text-xs mt-32 mb-0 has-top-divider'>
									<span className='testimonial-item-name text-color-high'>
										Software propietario <br /> de código cerrado
									</span>
									<span className='text-color-low'> / </span>
								</div>
							</div>
						</div>

						<div className='tiles-item reveal-from-bottom'>
							<div className='tiles-item-inner'>
								<div className='testimonial-item-conten'>
									<div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
										2° Opción
									</div>
									<p className='text-sm mb-0'>
										— Posibilidad de creación de varios tipos de reportes y
										tableros de comando. Posee plantillas para facilitar el
										diseño.
									</p>
									<p className='text-sm mb-0'>
										— Permite navegar la información de un reporte en diferentes
										direcciones (drill down, drill across), así como agregar
										nuevos indicadores y filtros a un reporte, en tiempo real,
										por lo que es posible realizar reportes ad-hoc.
									</p>
									<br />
									<a
										href='https://www.docdroid.net/o6flnbK/herramientas-bi-opcion-2-pdf'
										target='_blank'
									>
										Leer más...
									</a>
								</div>
								<div className='testimonial-item-footer text-xs mt-32 mb-0 has-top-divider'>
									<span className='testimonial-item-name text-color-high'>
										Software gratuito <br /> de código abierto
									</span>
									<span className='text-color-low'> / </span>
								</div>
							</div>
						</div>

						<div className='tiles-item reveal-from-bottom'>
							<div className='tiles-item-inner'>
								<div className='testimonial-item-conten'>
									<div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
										Nuestra Recomendación
									</div>
									<Image
										src={'https://iili.io/2GUFna.jpg'}
										alt='Open'
										width={160}
										height={160}
									/>
									<p>
										Para AliMun - Alimentos al Mundo S.A. realizamos La
										siguiente Recomendación
									</p>
									<a
										className='link-testimonial'
										href='https://www.docdroid.net/32osCpS/herramientas-bi-recomendacion-de-opcion-alimun-pdf'
										target='_blank'
									>
										Ver Informe
									</a>
								</div>
								<div className='testimonial-item-footer text-xs mt-32 mb-0 has-top-divider'>
									<span className='testimonial-item-name text-color-high'>
										BI Solutions
									</span>
									<span className='text-color-low'> / </span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
