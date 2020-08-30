import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../config.js'
import TemplateOne from '../EventTemplates/TemplateOne'
import TemplateTwo from '../EventTemplates/TemplateTwo'
import NotFound from '../../containers/NotFound'

const PublicEvents = props => {
  const [eventData, setEventData] = useState()
  const [error, setError] = useState(false)
  const { organizationName, url } = props.computedMatch.params
  useEffect(() => {
    console.log({ organizationName, url })
    async function getData () {
      try {
        const { data } = await axios(`${API_URL}/api/v1/events/from-url`, {
          method: 'GET',
          params: { organizationName, url }
        })
        console.log(data)
        setEventData(data)
      } catch (error) {
        console.log(error)
        setError(true)
      }
    }
    getData()
  }, [organizationName, url])
  if (error) {
    return <NotFound />
  }

  if (eventData) {
    if (eventData.template === 't01') {
      return <TemplateOne templateData={eventData} />
    }
    if (eventData.template === 't02') {
      return <TemplateTwo templateData={eventData} />
    }
  }
  return <div />
}
export default PublicEvents
