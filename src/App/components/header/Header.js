import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import style from './Header.module.css'

export default function Footer() {
    const history = useHistory()
    const [portfolioCond, setPortfolioCond] = useState(true)
    const [aboutCond, setAboutCond] = useState(false)
    const [resumeCond, setResumeCond] = useState(false)
    const [reRender, setReRender] = useState(false)

    const pathName = history.location.pathname
    useEffect(() => {
        if (pathName === '/portfolio') {
            setPortfolioCond(true)
            setAboutCond(false)
            setResumeCond(false)
        } else if (pathName === '/') {
            setPortfolioCond(false)
            setAboutCond(true)
            setResumeCond(false)
        } else if (pathName === '/resume') {
            setPortfolioCond(false)
            setAboutCond(false)
            setResumeCond(true)
        }
    }, [pathName])
    


    return(
        <div>
            <div className={style.headerUpper}>
                <div>Travis Frazier</div>
            </div>
            <hr className={style.lineBreak} />
            <div className={style.headerLower}>
                <div className={portfolioCond ? style.headerButtonCompleted : style.headerButton} onClick={() => {
                    history.push('/portfolio')
                    setReRender(prevState => !prevState)
                    }}>
                    Portfolio
                </div>
                <div className={aboutCond ? style.headerButtonCompleted : style.headerButton} onClick={() => {
                    history.push('/')
                    setReRender(prevState => !prevState)
                    }}>
                    Who I Am
                </div>
                <div className={resumeCond ? style.headerButtonCompleted : style.headerButton} onClick={() => {
                    history.push('/resume')
                    setReRender(prevState => !prevState)
                    }}>
                    Resume
                </div>
            </div>
        </div>
    )
}