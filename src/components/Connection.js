import React, { useState, useEffect } from 'react'
import TabSelector from './TableSelector'
import axios from 'axios'

import './Connection.css'
import LogForm from './LogForm'

const Connection = () => {
    const [loginForm, setLoginForm] = useState({
        mail: '',
        pwd: ''
    })
    const [failed, setFailed] = useState()
    const [success, setSuccess] = useState()
    const [activeId, setActiveId] = useState('patient')

    const getLogin = (e) => {
        const logCatch = e.target.value
        setLoginForm({ ...loginForm, mail: logCatch })
    }

    const getPwd = (e) => {
        const pwdCatch = e.target.value
        setLoginForm({ ...loginForm, pwd: pwdCatch })
    }

    const handleChangeTab = event => {
        const buttonId = event.target.id
        setActiveId( buttonId )
      }
    
    const getTabContent = () => {
        switch (activeId) {
          case "practitioner":
            return <LogForm switch={'dashboard'}/>
          case "patient":
            return <LogForm switch={'logbook'}/>
          default:
            return 'Error'
        }
      }

      const getApi = (e) => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/authentification',
            data: {
                ...loginForm
            }
        })
            .then(() => {
                setSuccess(true)
            })
            .catch(() => {
                setFailed(true)
            })
    }

    return (
        <div>
            <TabSelector
          handleChangeTab={handleChangeTab}
          getApi={getApi}
          activeId={activeId}
          getLogin={getLogin}
          getPwd={getPwd}
          success={success}
          failed={failed}
        />
        <div className="App-content">{getTabContent()}</div>
        </div>
    )
}

export default Connection