import React from 'react'
import pencilAndPaper from '../../../images/pencil_and_paper.jpg'
import etsyStore from '../../../images/etsy_store.jpg'
import tadaMeats from '../../../images/tada-meats.PNG'
import deckOfCards from '../../../images/deck_of_cards.jpg'

import style from './PortfolioPage.module.css'

export default function PortfolioPage() {
    return(
        <div className={style.portfolioPageContainer}>
            <h1 className={style.portfolioTitle}>Travis' Portfolio</h1>
            <section className={style.portfolioIntro}>
                <p>
                    Below you will find some of the projects that I have created.
                     Each project will list the key skills that I utilized for development, and a short description of the projects purpose.
                </p>
            </section>

            <hr className={style.sectionBreak} />

            <div className={style.websiteElement}>
                <a href='https://tada-meats-test.herokuapp.com/'>
                    <div className={style.title}>Tada Meats</div>
                    <img className={style.websiteImg} src={tadaMeats} alt='' />
                </a>
                <div className={style.projectDesc}>
                    <div className={style.descTitle}>Project Description</div>
                    <p>This website was built for a local meat processor. They were in need of a website to showcase there business, allow for online retail sales, 
                        and finalize custom processing orders. I personally like this project because its is the project I have learned the most from pertaining to backend web development
                    </p>
                    <p>
                        This project I really dove into the nitty gritty detailes of backend development. It consists of two seperate git repos. One for 
                        the frontend, and one for a backend rest API. The REST API was originally hosted via Heroku, but due to some limitations I decided
                        to migrate this over to AWS as an entirely serverless application.
                    </p>
                    <div className={style.descTitle}>Key Skills Used/Learned</div>
                    <ul>
                        <li>Languages/Libraries: React, Material UI </li>
                        <li>Database: PostgreSQL/DynamoDB</li>
                        <li>Development Tools: MVC Backend Model, MVP Project Development, Env variables, NPM, Git</li>
                        <li>Deployment Tools: Heroku, AWS Lambda, Git</li>
                    </ul>
                </div>
            </div>

            <hr className={style.sectionBreak} />

            <div className={style.websiteElement}>
                <a  href='http://travis-coding-journal.herokuapp.com/'>
                    <div className={style.title}>Coding Journal</div>
                    <img className={style.websiteImg} src={pencilAndPaper} alt='' />
                </a>
                <div className={style.caption}>"Photo - Pencil and Paper" by flakeparadigm is licensed under CC BY 2.0</div>
                <div className={style.descTitle}>Project Description</div>
                <p>
                    My first deployed website. Built as a tool to reflect on the current days progress in learning to code.
                    I enjoy looking back at the architeture of this project vs that of my most recent projects. Some progress has been made! ;)
                </p>
                
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
                <div className={style.descTitle}>Project Description</div>
                <p>
                    Built for an old co-worker's side hustle business, "Print Future 3D". Website was built to act as a buisiness and product gallery.
                </p>
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
                <a href='https://repl.it/@TravisFrazier1/RideTheBus#main.py'>
                    <div className={style.title}>Card Game Modeling</div>
                    <img className={style.websiteImg} src={deckOfCards} alt='' />
                </a>
                <div className={style.caption}>"Deck of Cards" by LuluP is licensed under CC BY-NC-ND 2.0</div>
                <div className={style.descTitle}>Project Description</div>
                <p>
                    Not a website, but a card game modeling progam. Built after a few friends and I were debating the odds of passing each and all four levels of a card game.
                    Bonus points if you can name the odds without running the program!
                </p>
                
                <div className={style.projectDesc}>
                    <div className={style.descTitle}>Key Skills Used/Learned</div>
                    <ul>
                        <li>Languages/Libraries: Python </li>
                        <li>Development Tools: ReplIt</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}