import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config.js'

import _plus from '../..//assets/images/iconPlus.svg'
import './styles.scss'
const FileReader = window.FileReader

const EditInfo = props => {
  const { eventId } = props.match.params

  const [inputValues, setInputValues] = useState({})

  useEffect(() => {
    async function getEventInfo() {
      try {
        const { data } = await axios(`${API_URL}/api/v1`, {
          query: {
            eventId,
            filters: [
              'name',
              'shortDescription',
              'description',
              'imageHeader',
              'imageEvent',
            ],
          },
        })
        setInputValues(data)
      } catch (error) {
        console.log(error)
      }
    }
    getEventInfo()
  }, [eventId])

  const handleUpload = async evn => {
    const fieldName = evn.target.name
    const fr = new FileReader()
    fr.onload = evn => {
      setInputValues({ ...inputValues, [fieldName]: fr.result })
    }
    fr.readAsDataURL(evn.target.files[0])
  }

  const handleChange = evn => {
    const fieldName = evn.target.name
    const fieldValue = evn.target.value
    setInputValues({ ...inputValues, [fieldName]: fieldValue })
  }
  const handleSubmit = async evn => {
    evn.preventDefault()
    const eventData = {
      name: inputValues.name,
      shortDescription: inputValues.shortDescription,
      description: inputValues.description,
      imageHeader: inputValues.imageHeader,
      imageEvent: inputValues.imageEvent,
    }
    try {
      await axios('API_URL/api/v1/', {
        method: 'UPDATE',
        body: {
          eventId,
          eventData,
        },
      })
    } catch (error) {
      console.log('ups parece que hubo un error')
    }
    // vaildate fields
    // send data to appState
  }

  return (
    <>
      <Layout active="home">
        <div className="editInfo">
          <h2>Stark Industries</h2>
          <div className="editInfo-container">
            <h2>Editar información General - Presentación Iron Man</h2>
            <form onSubmit={handleSubmit}>
              <div className="formEdit-container">
                <div className="formEdit-container-formLeft">
                  <div className="formEdit-field">
                    <label className="formEdit-field__label">
                      Nombre del evento
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="name"
                      className="formEdit-field__input"
                    />
                  </div>
                  <div className="formEdit-field">
                    <label className="formEdit-field__label">
                      Descripción corta del evento
                    </label>
                    <textarea
                      onChange={handleChange}
                      type="text"
                      className="formEdit-field__textarea"
                      name="shortDescription"
                    />
                  </div>
                  <div className="formEdit-field">
                    <label className="formEdit-field__label">
                      Descripción del evento
                    </label>
                    <textarea
                      onChange={handleChange}
                      type="text"
                      className="formEdit-field__textarea2"
                      name="description"
                    />
                  </div>
                  <div className="formEdit-field">
                    <label className="formEdit-field__label">
                      Zona horaria del evento
                    </label>
                    <select
                      className="formEdit-field__select"
                      defaultValue="DEFAULT"
                    >
                      <option value="DEFAULT" disabled>
                        Seleccione UTC
                      </option>
                      <option value="UTC-11">UTC-11</option>
                      <option value="UTC-10">UTC-10</option>
                      <option value="UTC-9">UTC-9</option>
                      <option value="UTC-8">UTC-8</option>
                      <option value="UTC-7">UTC-7</option>
                      <option value="UTC-6">UTC-6</option>
                      <option value="UTC-5">UTC-5</option>
                      <option value="UTC-4">UTC-4</option>
                      <option value="UTC-3">UTC-3</option>
                      <option value="UTC-2">UTC-2</option>
                      <option value="UTC-1">UTC-1</option>
                      <option value="UTC-0">UTC-0</option>
                      <option value="UTC+1">UTC+1</option>
                      <option value="UTC+2">UTC+2</option>
                      <option value="UTC+3">UTC+3</option>
                      <option value="UTC+4">UTC+4</option>
                      <option value="UTC+5">UTC+5</option>
                      <option value="UTC+6">UTC+6</option>
                      <option value="UTC+7">UTC+7</option>
                      <option value="UTC+8">UTC+8</option>
                      <option value="UTC+9">UTC+9</option>
                      <option value="UTC+10">UTC+10</option>
                      <option value="UTC+11">UTC+11</option>
                      <option value="UTC+12">UTC+12</option>
                      <option value="UTC+13">UTC+13</option>
                      <option value="UTC+14">UTC+14</option>
                    </select>
                  </div>
                </div>
                <div className="formEdit-container-formRigth">
                  <div className="formEdit-field">
                    <label className="formEdit-field__label">
                      Título principal
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="formEdit-field__input"
                    />
                  </div>
                  <div className="formEdit-field">
                    <label className="formEdit-field__label">
                      Imagen del Evento
                    </label>
                    <input
                      onChange={handleUpload}
                      name="imageEvent"
                      id="imgEvent"
                      type="file"
                    />
                    <div className="formEdit-field__file">
                      <label
                        htmlFor="imgEvent"
                        className="formEdit-field__fileIcon"
                      >
                        <img
                          src={_plus}
                          alt="icono para subir imagen Cabecera"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="formEdit-field">
                    <label className="formEdit-field__label">
                      Imagen de la Cabecera
                    </label>
                    <input
                      onChange={handleUpload}
                      name="imageHeader"
                      id="imgHeader"
                      type="file"
                    />
                    <div className="formEdit-field__file">
                      <label
                        htmlFor="imgHeader"
                        className="formEdit-field__fileIcon"
                      >
                        <img
                          src={_plus}
                          alt="icono para subir imagen Cabecera"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="check-action">
                <Link to="/events/edit/organizationName/eventId">
                  <button className="check-action__btnLeft">
                    <p>Cancelar</p>
                  </button>
                </Link>
                <button type="submit" className="check-action__btnRight">
                  <p>Guardar</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default EditInfo
