import React from 'react'
import ProfilePic from '../../../images/profile-pic.PNG'

import style from './AboutPage.module.css'

export default function AboutPage() {
    return(
        <div className={style.pageContainer} >
            <h1 className={style.aboutTitle}>Travis' Story</h1>
            <section className={style.splitSection}>
                <p className={style.column2Third}>
                    My name is Travis Frazier, and I am currently learning to become a backend web developer.
                     I have always had an interest in computers and found them to be quite enaging to tinker with. 
                     However up until September 2020 I have never taken the initiative to prioritze learning the ins and outs
                     of how computers operate.  Fortunately, my wife and I found ourselves
                     wanting to move closer to her family in the Twin Cities to have the help and support to start our own family.
                     Seeing this as a great "now or never oppurtunity" I decided to commit myself full time to learning web development.
                </p>
                <div className={style.column1Third}>
                    <img className={style.profilePic} src={ProfilePic} />
                </div>
            </section>
            <section>
                <p>
                    It has been an interesting road to get to where I am today. To keep it short, I have gone from working in the Ag Industry as a farm hand, working IT for my university,
                     designing tooling for robotic welders, designing utility trucks, and then ensuring the quality of those trucks met our standards.
                     I am greatfull for the diverse set of experiences I have had so far, and feel that they have made me a well rounded
                     individual who can see problems from many points of view.
                </p>
            </section>
            <section>
                <p>
                    Being someone who is tasked with solving problems
                    Backend Web Development checks a lot of boxes for me.  For one, I love how there is a never ending amount of novelity.
                     In a modern world of constant routine, I look forward to having new experiences, and problems that keep me engaged.
                     Secondly, Web Development, and most things computer related, have an oppurtunity to produce a HIGH degree of value.
                     I want an occupation that contributes as much as possible to society, and my family.  Lastly, at the end of the day it
                     is a rather facinating industry. Facinating in that the industry is extremely valued in society, yet at the end of the day
                     the industry is simply moving, manipulating, and leverageing data.  Just a few millions and millions of on/off signals ran in
                     a controlled way has lead to improving people's lives by orders of magnitude.
                </p>
            </section>

            <section>
                <h2></h2>
            </section>
        </div>
    )
}