import React, { Component } from "react";

import styles from './About.module.css';

import AboutPicture from '../../MattPicture.jpg';


class About extends Component {


    render() {
        return(
            <div className={styles.About}>
                <div className={styles.AboutMain}>
                    <div className={styles.AboutHeader}>About Me</div>
                    <div className={styles.AboutContent}>
                        <div className={styles.AboutInfoMain}>Hi. I am Matthew Murphy, and I am a Software engineer with a passion for front end development. I am a Computer Science student currently attending the University of Wisconsin Madison, and I will be graduating May of 2021.</div>
                        <div className={styles.AboutInfo}></div>
                        <div className={styles.AboutInfo}>In my free time I enjoy playing hockey, soccer, and competitive pinball. I also like to play and develop video games. Some of the games I have created can be seen below.</div>
                    </div>
                    <img src={AboutPicture} alt="About"className={styles.AboutPicture}></img>
                   </div>

                <div>
                <div className={styles.AboutHeader}>Skills</div>
                <div className={styles.SkillsMain}> 
                    <div className={styles.Skills}>
                        <div className={styles.ListHeader}>Languages</div>
                        <ul className={styles.List}>
                            <li>Java</li>
                            <li>Python</li>
                            <li>C</li>
                            <li>C#</li>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>CSS</li>

                        </ul>
                    </div>
                    <div className={styles.Skills}>
                        <div className={styles.ListHeader}>Frameworks/Software</div>
                        <ul className={styles.List}>
                            <li>React</li>
                            <li>Angular</li>
                            <li>Github</li>
                            <li>Unity</li>
                            <li>VS Code</li>
                            <li>Photoshop</li>
                        </ul>
                    </div>
                    <div className={styles.Skills}>
                        <div className={styles.ListHeader}>Other&nbsp;Skills</div>
                        <ul className={styles.List}>
                            <li>Algorithms</li>
                            <li>Operating Systems</li>
                            <li>SCRUM</li>
                            <li>UI/UX Development</li>
                        </ul>
                    </div>

                </div>
                </div>
            </div>
        );
    }

}


export default About;