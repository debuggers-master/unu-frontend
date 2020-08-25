import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

import {CardEvento} from '../../components/CardEvento'
import _plus from '../../assets/images/iconPlus.svg'
import './styles.scss'

const Dashboard = () => {
  return (
    <>
      <Layout active={'home'}>
        <div className='dashboard'>
          <h2>Hola! - Daniel</h2>
          <div className='dashboard-container'>
            <div className='dashboard-container__topLeft'>
              <div className='dashboard-container__topLeft-infoOrg'>
                <h2>Organizaciones</h2>
                {/* .map o setState de las organizaciones disponibles o del estado vacio[default] */}
                <Link to='/organizationName'>
                  <p>Stark Industries</p>
                </Link>
              </div>
              <div className='dashboard-container__topLeft-NewOrg'> 
                <Link to='/NewOrg'>
                  <div className='dashboard-container__topLeft-NewOrg-btn'> 
                  <img src={_plus} alt='boton crear organización'/>
                  </div>
                </Link>
              </div>
            </div>
            <div className='dashboard-container__Right'>
              <h2>Editar - Eventos</h2>
              <div className='dashboard-container__Right-container'>
                <Link to='/events/edit/organizationName/eventId'>
                  <CardEvento/>
                </Link>
                <Link to='/events/edit/organizationName/eventId'>
                  <CardEvento/>
                </Link>
              </div>
            </div>
            <div className='dashboard-container__bottomLeft'>
              <h2>Consejos</h2>
              <ul>
                <li>Elije tu equipo y hazlos colaboradores del evento</li>
                <li>Crea los eventos que quieras, no hay límites!</li>
                <li>Pon descripciones llamativas para tu público</li>
                <li>Imagina un tweet llamativo y ponlo como descripción corta</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Dashboard
