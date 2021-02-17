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
                     I have always had an interest in computers and found them to be quite engaging to work with. 
                     However, up until September 2020, I have never taken the initiative to prioritize learning the ins and outs
                     of how computers operate.  Fortunately, my wife and I found ourselves
                     wanting to move closer to her family in the Twin Cities.
                     Seeing this as a great "now or never opportunity" I decided to commit myself full time to learning web development.
                </p>
                <div className={style.column1Third}>
                    <img className={style.profilePic} src={ProfilePic} alt='' />
                </div>
            </section>
            <section>
                <p>
                    It has been quite a journey to get to where I am today. To keep it short, I have worked in the Ag Industry as a farm hand, learned to fly, co-oped for a valve manufacturer,
                     worked IT for my university,
                     designed tooling for robotic welders, and for the past 6 and half years designed, and ensured exceptional quality of utility trucks.
                     I am grateful for the diverse set of experiences I have had so far, and feel that they have made me a well rounded
                     individual who can see problems from many points of view.
                </p>
            </section>
            <section>
                <p>
                    Looking towards the future, I can see a career in Backend Web Development being a rewarding occupation. I enjoy learning, being useful,
                     and building things that few other people have built.
                     Firstly, I pride myself in being able to master new skills. I can see this being a beneficial and well suited trait for an ever changing industry.
                     Secondly, an occupation in the web industry, and tech industry overall, has the opportunity to produce a HIGH degree of value. I want an occupation that contributes as much
                     as possible to society, and want to work for a company that needs people who can get things done.
                     Lastly, I want to build things that few other people are capable of building.  Looking back on my previous work experiences the only things that I bring up
                     are the projects that were especially challenging, and that few other people have done at that company or in that industry.
                </p>
            </section>

            {/*<section>
                <h1>EXTRA - Keeping for reference</h1>
                <p>For one, I love how there is a never ending amount of novelity.
                     In a modern world of constant routine, I look forward to having new experiences, and problems that keep me engaged.
                     Secondly, Web Development, and most things computer related, have an oppurtunity to produce a HIGH degree of value.
                     I want an occupation that contributes as much as possible to society, and my family.  Lastly, at the end of the day it
                     is a rather facinating industry. Facinating in that the industry is extremely valued in society, yet at the end of the day
                     the industry is simply moving, manipulating, and leverageing data.  Just a few millions and millions of on/off signals ran in
                     a controlled way has lead to improving people's lives by orders of magnitude.</p>
            </section>*/}
        </div>
    )
}