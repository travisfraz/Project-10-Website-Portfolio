import React from 'react'

import style from './ResumePage.module.css'

export default function ResumePage() {
    return(
        <div className={style.resumePageContainer}>
            <h1 className={style.resumeTitle}>Travis' Resume</h1>
            <iframe title='resume' className={style.resume} src="https://drive.google.com/file/d/1xINg221NACDKzTue3RnEq-ImKZTjJbPL/preview?resourcekey=null"></iframe>
        </div>
    )
}