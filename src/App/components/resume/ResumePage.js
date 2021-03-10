import React from 'react'

import style from './ResumePage.module.css'

export default function ResumePage() {
    return(
        <div className={style.resumePageContainer}>
            <h1 className={style.resumeTitle}>Travis' Resume</h1>
            <iframe title='resume' className={style.resume} src="https://drive.google.com/file/d/1n9-d_G51jev-9z22wEe1FMM1M7jKI-cZ/preview"></iframe>
        </div>
    )
}