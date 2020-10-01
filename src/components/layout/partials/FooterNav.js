import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Button from './../../elements/Button';

const FooterNav = ({ className, ...props }) => {
	const classes = classNames('footer-nav', className);

	return (
		<nav {...props} className={classes}>
			<ul className='list-reset'>
				<li>
					<Button tag='a' color='nav' wideMobile href='/'>
						Inicio
					</Button>
				</li>
				<li>
					<Button tag='a' color='nav' wideMobile href='#caracteristicas'>
						Características
					</Button>
				</li>
				<li>
					<Button tag='a' color='nav' wideMobile href='#requerimientos'>
						Requerimientos
					</Button>
				</li>
				<li>
					<Button tag='a' color='nav' wideMobile href='#recomendaciones'>
						Recomendaciones
					</Button>
				</li>
				<li>
					<Button tag='a' color='nav' wideMobile href='#contacto'>
						Contacto
					</Button>
				</li>
			</ul>
		</nav>
	);
};

export default FooterNav;
