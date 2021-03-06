import React, { Component } from "react";

import styles from './Projects.module.css';
import Project from '../../components/Project/Project';


class Projects extends Component {

    render() {

        const projects = [
            { id: '1', title: 'Resume Website', description: 'This website you are viewing was made using React, HTML, CSS, and JS.\n It is my first ever website developed and designed completely by myself.', image: 'Website'},
            { id: '2', title: 'Zurvive', description: 'This is a 3D Zombie survival game I created using C# and Unity.\n This was my second ever game made, and was made alone over the span of a few months. This project taught me alot about unity and how to create a game.', image: 'Zurvive'},
            { id: '3', title: 'Pre-Prep Meal Prep', description: 'PPMP was created for Software Engineering class at UW madison. Myself and 5 others worked on this website throughout the semester. We used a React/Redux frontend and a DynamoDB backend. We also created a testing environment using JEST and achieved 100% backend coverage, and 75% frontend coverage.', image: 'ppmp'},
            { id: '4', title: 'Chicken Dodger', description: 'This was my first ever game I created in Unity. It is a simple game where you move a pig left to right on the screen in order to dodge the falling chickens.', image: 'Chicken'}

           

        ]



        return(
            <div className={styles.Projects}>
                <div className={styles.Header}>My Projects</div>
                <div className={styles.ProjectWrapper}>
                    {projects.map(project => (
                        <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Projects;