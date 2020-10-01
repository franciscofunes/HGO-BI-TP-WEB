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
		title: 'Análisis Requerimientos',
		paragraph:
			'A partir de las necesidades planteadas por las distintas Áreas de la empresa Alimun se han identificado aquellas que son las más importante para el proyecto y clasificado en requerimientos. ',
	};

	return (
		<section id='requerimientos' {...props} className={outerClasses}>
			<div className='container'>
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className='center-content' />
					<div className={splitClasses}>
						<div className='split-item'>
							<div
								className='split-item-content center-content-mobile reveal-from-left'
								data-reveal-container='.split-item'
							>
								<h3 className='mt-0 mb-12'>Gerencia de Compras</h3>
								<div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
									Requerimientos Funcionales
								</div>
								<ul className='m-0'>
									<li>Crear y modificar reportes de Compras</li>
									<li>Cruzar información del sistema con datos externos</li>
									<li>
										Mostrar información de compras en distintos níveles en
										tiempo real{' '}
									</li>
									<li>Automatizar la creación de análisis de escenarios</li>
								</ul>
								<div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
									Requerimientos No Funcionales
								</div>
								<ul className='m-0'>
									<li>
										El tiempo de aprendizaje del sistema por un usuario deberá
										ser menor a 2 horas.
									</li>
									<li>
										El sistema debe poseer interfaces gráficas que aseguren una
										excelente experiencia del usuario
									</li>
									<li>
										El sistema debe contar con un módulo de ayuda en línea.
									</li>
									<li>
										El sistema debe contar con manuales de usuario estructurados
										adecuadamente.
									</li>
								</ul>
							</div>
							<div
								className={classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container='.split-item'
							>
								<Image
									src={require('./../../assets/images/features-split-image-01.jpg')}
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
								<h3 className='mt-0 mb-12'>Gerencia de Tecnología</h3>
								<div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
									Requerimientos No Funcionales
								</div>
								<ul className='m-0'>
									<li>
										Toda funcionalidad del sistema y transacción de negocio debe
										responder al usuario en menos de 5 segundos.
									</li>
									<li>
										El sistema debe ser capaz de operar adecuadamente con hasta
										100.000 usuarios con sesiones concurrentes.
									</li>
									<li>
										El sistema debe ser capaz de procesar N transacciones por
										segundo. Esto se medirá por medio de la herramienta{' '}
										<a href='https://www.soapui.org/' target='_blank'>
											SoapUI
										</a>
										.
									</li>
									<li>
										La probabilidad de falla del Sistema no podrá ser mayor a
										0,05.
									</li>
									<li>
										El sistema debe brindar a la organización la facilidad de
										instalación, de implementación, de mantenimiento y ofrecer
										actualización periódicas.
									</li>
									<li>
										El sistema debe brindar documentación completa y clara
									</li>
									<li>
										El tiempo de aprendizaje del sistema por un usuario deberá
										ser menor a 3 horas.
									</li>
									<li>
										El sistema debe ser compatible con Linux CentOS en lo que
										respecta a los Servidores de Aplicación{' '}
									</li>
									<li>
										El sistema debe ser compatible con todas las versiones de
										Windows
									</li>
									<li>
										El sistema debe contar con un módulo de soporte técnico en
										línea.
									</li>
								</ul>
							</div>
							<div
								className={classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container='.split-item'
							>
								<Image
									src={require('./../../assets/images/features-split-image-02.jpg')}
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
								<h3 className='mt-0 mb-12'>Seguridad Informática</h3>
								<div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
									Requerimientos Funcionales
								</div>
								<ul className='m-0'>
									<li>
										El sistema controlará el acceso y lo permitirá solamente a
										usuarios autorizados.
									</li>
									<li>
										Cualquier intercambio de datos vía internet que realice el
										software se realizará por medio del protocolo encriptado
										https.
									</li>
								</ul>
								<div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
									Requerimientos No Funcionales
								</div>
								<ul className='m-0'>
									<li>
										Los permisos de acceso al sistema podrán ser cambiados
										solamente por el administrador de acceso a datos
									</li>
									<li>
										El sistema debe ser capaz de diferenciar entre quienes
										pueden editar un informe y quienes solo pueden visualizarlo.
									</li>
									<li>
										El sistema de ser compatible con{' '}
										<a
											href='https://www.elgrupoinformatico.com/tutoriales/que-ldap-t74212.html'
											target='_blank'
										>
											LDAP
										</a>
									</li>
								</ul>
							</div>
							<div
								className={classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container='.split-item'
							>
								<Image
									src={require('./../../assets/images/features-split-image-03.jpg')}
									alt='Features split 03'
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
								<h3 className='mt-0 mb-12'>
									Gerencia <br />
									Económico-Financiera
								</h3>
								<div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
									Requerimientos Funcionales
								</div>
								<ul className='m-0'>
									<li>
										El sistema debe brindar alertas cuando las fechas de entrega
										de los pedidos se aproximen
									</li>
									<li>
										El sistema debe poder emitir los estados e información de
										los pedidos en tiempo real
									</li>
									<li>
										El sistema debe brindar reportes estadísticos y evolutivos
										sobre los descuentos conseguidos con los proveedores
									</li>
								</ul>
                <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
									Requerimientos Comerciales
								</div>
								<ul className='m-0'>
									<li>
										Se necesita mantener los valores acordes al análisis económico que se realizó para afrontar el costo del proyecto. 
									</li>
								</ul>
							</div>
							<div
								className={classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container='.split-item'
							>
								<Image
									src={require('./../../assets/images/features-split-image-04.jpg')}
									alt='Features split 03'
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
								<h3 className='mt-0 mb-12'>Dirección</h3>
								<div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
									Requerimientos Comerciales
								</div>
								<ul className='m-0'>
									<li>
										No se busca la herramienta más económica del mercado sino la herramienta que cubra mejor las necesidades de la empresa. 
									</li>
								</ul>
								<div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
									Requerimientos No Funcionales
								</div>
								<ul className='m-0'>
									<li>
										El sistema debe poseer un diseño “Responsive” a fin
										de garantizar la adecuada visualización en múltiples
										computadores personales, dispositivos tableta y teléfonos
										inteligentes.
									</li>
								</ul>
							</div>
							<div
								className={classNames(
									'split-item-image center-content-mobile reveal-from-bottom',
									imageFill && 'split-item-image-fill'
								)}
								data-reveal-container='.split-item'
							>
								<Image
									src={require('./../../assets/images/features-split-image-05.jpg')}
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
