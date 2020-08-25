import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

import { CardEvento } from '../../components/CardEvento'
import _user from '../../assets/images/iconPerson.svg'
import './styles.scss'

const OrgPreview = () => {
  return (
    <>
      <Layout active='home'>
        <div className='OrgPreview'>
          <h2>Stark Industries</h2>
          <div className='OrgPreview-container'>
            <div className='OrgPreview-container__topLeft'>
              <div className='OrgPreview-container__topLeft-Preview'>
                <h2>Vistas de eventos</h2>
                {/* .map o setState de las organizaciones disponibles o del estado vacio[default] */}
                <Link to='#'>
                  <p>Presentación Iron Man</p>
                  <div>
                    <img src={_user} alt='icono de persona' />
                    <span>202 registrados</span>
                  </div>
                </Link>
                <Link to='#'>
                  <p>Presentación Iron Man</p>
                  <div>
                    <img src={_user} alt='icono de persona' />
                    <span>2120 registrados</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className='OrgPreview-container__Right'>
              <h2>Editar - Eventos</h2>
              <div className='OrgPreview-container__Right-container'>
                <Link to='/events/edit/organizationName/eventId'>
                  <CardEvento />
                </Link>
                <Link to='/events/edit/organizationName/eventId'>
                  <CardEvento />
                </Link>
              </div>
            </div>
            <div className='OrgPreview-container__bottomLeft'>
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

export default OrgPreview
