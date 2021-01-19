import React from 'react'

import style from './ResumePage.module.css'

export default function ResumePage() {
    return(
        <div className={style.resumePageContainer}>
            <h1 className={style.resumeTitle}>Travis' Resume</h1>
            <iframe className={style.resume} src="https://drive.google.com/file/d/1mCK82cqL4LtH55NdfMKynO0Mct9LTswJ/preview"></iframe>
        </div>
    )
}