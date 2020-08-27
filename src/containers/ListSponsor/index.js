import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'
import axios from 'axios'
import getCookie from '../../utils/getCookie'
import { API_URL } from '../../config'
import { ItemSponsor } from '../../components/ItemSponsor'
import './styles.scss'

const ListSponsor = props => {
  const { eventId, organizationName } = props.match.params || {}
  const [associatesList, setAssociatesList] = useState([])
  const emptyList = associatesList.length > 0
  useEffect(() => {
    async function getAssociates () {
      try {
        const { data } = await axios(
          `${API_URL}/api/v1/events?eventId=${eventId}&filters=associates`,
          {
            headers: { Authorization: `Bearer ${getCookie('token')}` }
          }
        )
        console.log(data.associates)
        setAssociatesList(data.associates)
      } catch (error) {
        console.log(error)
      }
    }
    getAssociates()
  }, [eventId])

  const deleteItemSponsor = associatedId => {
    const listSponsor = associatesList.filter(
      sponsor => sponsor.associatedId !== associatedId
    )
    setAssociatesList(listSponsor)
  }
  return (
    <>
      <Layout active='home'>
        <div className='editDay'>
          <h2>Stark Industries</h2>
          <div className='editDay-container'>
            <h2>Editar Agenda - Presentación Iron Man</h2>
            <ul>
              {emptyList &&
                associatesList.map((associate, index) => (
                  <ItemSponsor
                    data={{ associate, organizationName, eventId }}
                    deleteItemSponsor={deleteItemSponsor}
                    key={index}
                  />
                ))}
              {
                <div>
                  <Link
                    to={`/dashboard/${organizationName}/${eventId}/edit/sponsor/new`}
                  >
                    Añadir un nuevo Asociado
                  </Link>
                </div>
              }
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ListSponsor
