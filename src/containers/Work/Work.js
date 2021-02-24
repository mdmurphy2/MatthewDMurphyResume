import React, { Component } from "react";

import styles from './Work.module.css';
import Wisconsin from '../../WisconsinLogo.png';
import MatrixCare from '../../MatrixCareLogo.png';
import FieldDay from '../../FieldDay.jpg';


class Work extends Component {
    render() {
        return(
            <div className={styles.Work}>
                <div className={styles.EducationMain}>
                    <div className={styles.EducationHeader}>Education</div>
                    <div className={styles.EducationWrapper}>
                        <div className={styles.EducationTitle}>University Of Wisconsin - Madison</div>
                        <div className={styles.EducationSpan}>Computer Science B.S. 2017-2021 (expected)</div>
                        <div className={styles.EducationContent}>
                        <img src={Wisconsin} alt="Work" className={styles.Image}/>
                            <div className={styles.CourseworkContainer}>
                                <div className={styles.Coursework}>Relevant Coursework</div>
                                <ul className={styles.List}>
                                    <li>Object Oriented Programming</li>
                                    <li>Data Structures</li>
                                    <li>Algorithms</li>
                                    <li>Operating Systems</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.WorkMain}>
                    <div className={styles.WorkHeader}>Work Experience</div>
                    <div className={styles.WorkWrapper}>
                        <div className={styles.WorkTitle}>Field Day Lab</div>
                        <div className={styles.WorkSpan}>Student Unity Developer</div>
                        <div className={styles.WorkSpan}>August 2020 - Present</div>
                        <div className={styles.WorkContent}>
                            <img src={FieldDay} alt="Work" className={styles.Image}/>
                            <div className={styles.Experience}>Experience</div>
                            <div className={styles.WorkExperience}>Worked in Unity and C# developing features for an upcoming game</div>
                            <div className={styles.WorkExperience}>Collaborated with a lead game designer, and lead game developer to produce unique features</div>
                        </div>
                    </div>
                    <div className={styles.WorkWrapper}>
                        <div className={styles.WorkTitle}>MatrixCare</div>
                        <div className={styles.WorkSpan}>Software Engineer Internship</div>
                        <div className={styles.WorkSpan}>July 2019 - December 2019</div>
                        <div className={styles.WorkContent}>
                            <img src={MatrixCare} alt="Work" className={styles.Image}/>
                            <div className={styles.Experience}>Experience</div>
                            <div className={styles.WorkExperience}>Develeoped features on a large web app using HTML, CSS, JS, AngularJS, and Angular while working closely with a UX designer</div>
                            <div className={styles.WorkExperience}>Researched and designed an Alexa app using NodeJS and Alexa Developer Console</div>
                        </div>
                    </div>
                    <div className={styles.WorkWrapper}>
                        <div className={styles.WorkTitle}>Goldsmith Lab (UW Madison)</div>
                        <div className={styles.WorkSpan}>Software Engineer / It Expert</div>
                        <div className={styles.WorkSpan}>October 2018 - July 2019</div>
                        <div className={styles.WorkContent}>
                            <img src={Wisconsin} alt="Work"className={styles.Image}/>
                            <div className={styles.Experience}>Experience</div>
                            <div className={styles.WorkExperience}>Created and maintained software for data manipulation and analysis</div>
                            <div className={styles.WorkExperience}>Served as lab IT expert by providing assistance with computer related tasks</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Work;