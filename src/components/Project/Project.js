import React, { Component } from "react";

import styles from './Project.module.css';

import ProjectImage from './ProjectImage/ProjectImage';

class Project extends Component {

    render() {


        return(
            <div className={styles.Project}>
                <div className={styles.ProjectTitle}>{this.props.title}</div>
                <div className={styles.ProjectContent}>
                    <ProjectImage image={this.props.image}/>
                    <div className={styles.ProjectDescription}>{this.props.description}</div>
                </div>

            </div>
        );
    }

}

export default Project;