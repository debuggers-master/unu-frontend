import React from 'react'
import { connect } from 'react-redux'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

import { CardEvento } from '../../components/CardEvento'
import _plus from '../../assets/images/iconPlus.svg'

import './styles.scss'

const Dashboard = ({ user }) => {
  const isEmptyCollaborators = user.collaborations.length > 0
  const isEmptyEvents = user.myEvents.length > 0
  const isEmpty = isEmptyCollaborators === isEmptyEvents
  console.log(user.collaborations)
  const emptyOrganization = user.organizations.length > 0
  return (
    <>
      <Layout active='home'>
        <div className='dashboard'>
          <h2>Hola! - {user.firstName}</h2>
          <div className='dashboard-container'>
            <div className='dashboard-container__topLeft'>
              <div className='dashboard-container__topLeft-title'>
                <h2>Organizaciones</h2>
              </div>
              <div className='dashboard-container__topLeft-infoOrg'>
                {emptyOrganization ? (
                  user.organizations.map(item => (
                    <Link
                      to={{
                        pathname: `/dashboard/${item.organizationName}`,
                        state: {
                          organizationId: item.organizationId,
                          events: user.myEvents.filter(
                            ({ organizationName }) =>
                              organizationName === item.organizationName
                          )
                        }
                      }}
                      key={item.organizationId}
                    >
                      <p>{item.organizationName}</p>
                    </Link>
                  ))
                ) : (
                  <p>
                    No tienes ninguna organización{' '}
                    <span role='img' aria-label='hojas'>
                      🍃
                    </span>
                  </p>
                )}
              </div>
              <div className='dashboard-container__topLeft-NewOrg'>
                <Link to='/dashboard/NewOrg'>
                  <div className='dashboard-container__topLeft-NewOrg-btn'>
                    <img src={_plus} alt='boton crear organización' />
                  </div>
                </Link>
              </div>
            </div>
            <div className='dashboard-container__Right'>
              <h2>Editar - Eventos</h2>
              <div className='dashboard-container__Right-container'>
                {user.myEvents.map((item, index) => (
                  <Link
                    to={`/dashboard/${item.organizationName}/${item.eventId}/edit`}
                    key={index}
                  >
                    <CardEvento key={item.eventId} isMyEvent {...item} />
                  </Link>
                ))}
                {user.collaborations.map((item, index) => (
                  <Link
                    to={`/dashboard/${item.organizationName}/${item.eventId}/edit`}
                    key={index}
                  >
                    <CardEvento key={item.eventId} {...item} />
                  </Link>
                ))}
                {isEmpty && (
                  <h4>
                    Aun no tienes eventos{' '}
                    <span role='img' aria-label='eyes'>
                      👀
                    </span>
                  </h4>
                )}
              </div>
            </div>
            <div className='dashboard-container__bottomLeft'>
              <h2>Consejos</h2>
              <ul>
                <li>Elije tu equipo y hazlos colaboradores del evento</li>
                <li>Crea los eventos que quieras, no hay límites!</li>
                <li>Pon descripciones llamativas para tu público</li>
                <li>
                  Imagina un tweet llamativo y ponlo como descripción corta
                </li>
                <li>
                  Podrás comunicarte con tus invitados cuando edites el evento
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Dashboard)
