import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import TemplateOne from '../EventTemplates/TemplateOne'
import TemplateTwo from '../EventTemplates/TemplateTwo'
import { eventMock } from '../../mocks/eventMock.js'

const PublicEvents = props => {
  const [eventData, setEventData] = useState()
  useEffect(() => {
    console.log(props.computedMatch.params)
    async function getData () {
      try {
        const data = eventMock
        // const { data } = await axios('url', {
        //   method: 'GET',
        //   body: { organizationName: 'str', url: 'str' },
        // })

        setEventData(data)
      } catch (error) {
        console.log(error)
        return <div>Ups parece que no hay nada 404 :(</div>
      }
    }
    getData()
  }, [props.computedMatch.params])

  if (eventData) {
    if (eventData.template === 'template01') {
      return <TemplateOne templateData={eventData} />
    }
    if (eventData.template === 'template02') {
      return <TemplateTwo templateData={eventData} />
    }
  }
  return <div>Cargandoooo</div>
}
export default PublicEvents
