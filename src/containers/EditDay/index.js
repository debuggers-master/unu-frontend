import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteTalkRequest, setEditEventStatus } from '../../actions'
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import ModalState from '../../components/ModalState'
import { ItemTalk } from '../../components/ItemTalk'
import './styles.scss'

const EditDay = props => {
  const { organizationName, eventId, dayId } = props.match.params
  const { date } = props.location.state || {}
  const { agenda, editEventStatus, setEditEventStatus } = props
  const [conferencesList, setConferencesList] = useState([])
  const [loader, setLoader] = useState(true)
  const [status, setStatus] = useState()
  const isEmpty = conferencesList.length < 1
  useEffect(() => {
    try {
      const dayData = agenda.filter(day => day.dayId === dayId).shift()
      setConferencesList(dayData.conferences)
    } catch (e) {
      console.log(e)
    }
  }, [agenda, dayId, setConferencesList])

  useEffect(() => {
    if (editEventStatus === 'error') {
      setStatus({ error: 'Ups! parece que hubo un error' })
      setLoader(false)
    }
    if (editEventStatus === 'success') {
      setStatus({ success: 'Eliminado Exitosamente' })
      setLoader(false)
      setEditEventStatus('idle')
    }
  }, [editEventStatus, setStatus, setEditEventStatus])

  return (
    <>
      <Layout active='home'>
        <div className='editDay'>
          <h2>{organizationName}</h2>
          <div className='editDay-container'>
            <div className='editDay-title'>
              <h2>Editar Agenda</h2>
              <div className='check-action'>
                <Link
                  to={`/dashboard/${organizationName}/${eventId}/edit/schedule`}
                >
                  <button className='check-action__btnLeft'>
                    <p>Regresar</p>
                  </button>
                </Link>
              </div>
            </div>
            <ul>
              {loader && <Loader />}
              {!isEmpty &&
                conferencesList.map(day => {
                  return (
                    <ItemTalk
                      key={day.conferenceId}
                      organizationName={organizationName}
                      eventId={eventId}
                      dayId={dayId}
                      conferenceId={day.conferenceId}
                      name={day.name}
                      deleteConference={props.deleteTalkRequest}
                      date={date}
                    />
                  )
                })}
              <Link
                to={{
                  pathname: `/dashboard/${organizationName}/${eventId}/edit/schedule/${dayId}/new`,
                  state: { date }
                }}
              >
                <p className='editDay-NewDay'>Añade una conferencia</p>
              </Link>
            </ul>
          </div>
        </div>
        {status && (
          <ModalState
            isOpen
            handleAction={() => {
              props.setEditEventStatus('idle')
              setStatus(null)
            }}
            nameAction='Entendido'
            messageModal={
              status.error ? status.error : 'Modificada exitosamente!'
            }
            stateModal={status.error ? 'check' : 'cross'}
          />
        )}
      </Layout>
    </>
  )
}
const mapStateToProps = state => ({
  agenda: state.editEvent.data.agenda || [],
  editEventStatus: state.editEvent.status
})
const mapDispatchToProps = {
  setEditEventStatus,
  deleteTalkRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(EditDay)
