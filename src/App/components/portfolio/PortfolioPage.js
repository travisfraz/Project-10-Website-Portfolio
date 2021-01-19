import React from 'react'
import pencilAndPaper from '../../../images/pencil_and_paper.jpg'
import etsyStore from '../../../images/etsy_store.jpg'
import tadaMeats from '../../../images/tada-meats.PNG'


import style from './PortfolioPage.module.css'

export default function PortfolioPage() {
    return(
        <div className={style.portfolioPageContainer}>
            <h1 className={style.portfolioTitle}>Travis' Portfolio</h1>
            <section className={style.portfolioIntro}>
                <p>
                    Below you will find some of the projects that I have created.
                     Each project will list some of the key skills that I learned or used will developing.
                     Projects are listed in order of completion.
                </p>
            </section>

            <hr className={style.sectionBreak} />

            <div className={style.websiteElement}>
                <a  href='http://travis-coding-journal.herokuapp.com/'>
                    <div className={style.title}>Coding Journal</div>
                    <img className={style.websiteImg} src={pencilAndPaper} alt='' />
                </a>
                <div className={style.caption}>Image by flakeparadigm  via <a href='https://search.creativecommons.org/photos/fbd74fdd-a2f0-40b3-a369-32246d32de93'>Creative Commons</a></div>
                <div className={style.projectDesc}>
                    <div className={style.descTitle}>Key Skills Used/Learned</div>
                    <ul>
                        <li>Languages/Libraries: Javascript, CSS, HTML </li>
                        <li>Database: MongoDB</li>
                        <li>Development Tools: Env variables, NPM, Git</li>
                        <li>Deployment Tools: Heroku, Git</li>
                    </ul>
                </div>
            </div>

            <hr className={style.sectionBreak} />

            <div className={style.websiteElement}>
                <a href='https://fast-peak-92012.herokuapp.com/'>
                    <div className={style.title}>Etsy Inspired Showroom</div>
                    <img className={style.websiteImg} src={etsyStore} alt='' />
                </a>
                <div className={style.projectDesc}>
                    <div className={style.descTitle}>Key Skills Used/Learned</div>
                    <ul>
                        <li>Languages/Libraries: React, CSS, JSX</li>
                        <li>Database: MongoDB</li>
                        <li>Development Tools: Env variables, NPM, Git</li>
                        <li>Deployment Tools: Heroku, Git</li>
                    </ul>
                </div>
            </div>

            <hr className={style.sectionBreak} />

            <div className={style.websiteElement}>
                <a href=''>
                    <div className={style.title}>Tada Meats</div>
                    <img className={style.websiteImg} src={tadaMeats} alt='' />
                </a>
                <div className={style.projectDesc}>
                    <div className={style.descTitle}>Key Skills Used/Learned</div>
                    <ul>
                        <li>Languages/Libraries: React, Material UI </li>
                        <li>Database: PostgreSQL</li>
                        <li>Development Tools: MVC Backend Model, MVP Project Development, Env variables, NPM, Git</li>
                        <li>Deployment Tools: Heroku, Git</li>
                    </ul>
                </div>
            </div> 
        </div>
    )
}