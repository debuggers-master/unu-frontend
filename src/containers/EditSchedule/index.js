import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setEditEventStatus, deleteEventDayRequest } from '../../actions'

import Layout from '../../components/Layout'
import { ItemDay } from '../../components/ItemDay'
import ModalState from '../../components/ModalState'
import Loader from '../../components/Loader'
import './styles.scss'

const EditSchedule = props => {
  const {
    eventId,
    organizationName,
    agenda,
    editEventStatus,
    setEditEventStatus
  } = props
  const [daysList, setDaysList] = useState([])
  const [status, setStatus] = useState()
  const [loader, setLoader] = useState(null)

  const isEmpty = daysList.length > 0

  useEffect(() => {
    setDaysList(agenda)
  }, [agenda])

  useEffect(() => {
    if (editEventStatus === 'error') {
      setStatus({ error: 'Ups! parece que hubo un error' })
      setLoader(false)
    }
    if (editEventStatus === 'loading') {
      setLoader(true)
    }
    if (editEventStatus === 'success') {
      setStatus({ success: 'Eliminado Exitosamente' })
      setLoader(false)
      setEditEventStatus('idle')
    }
  }, [editEventStatus, setEditEventStatus])

  return (
    <>
      <Layout active='home'>
        <div className='editSchedule'>
          <h2>{organizationName}</h2>
          <div className='editSchedule-container'>
            <div className='editSchedule-title'>
              <h2>Editar Agenda </h2>
              <div className='check-action'>
                <Link to={`/dashboard/${organizationName}/${eventId}/edit`}>
                  <button className='check-action__btnLeft'>
                    <p>Regresar</p>
                  </button>
                </Link>
              </div>
            </div>
            <ul>
              {loader && <Loader />}
              {isEmpty &&
                daysList.map((day, index) => (
                  <ItemDay
                    key={day.dayId}
                    dayIndex={index}
                    organizationName={organizationName}
                    eventId={eventId}
                    dayId={day.dayId}
                    date={day.date}
                    deleteDay={props.deleteEventDayRequest}
                  />
                ))}
              <Link
                to={`/dashboard/${organizationName}/${eventId}/edit/scheduleDay`}
              >
                <p className='editSchedule-NewDay'>Añade un día</p>
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
  editEventStatus: state.editEvent.status,
  eventId: state.editEvent.data.eventId,
  organizationName: state.editEvent.data.organizationName
})
const mapDispatchToProps = {
  setEditEventStatus,
  deleteEventDayRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(EditSchedule)
