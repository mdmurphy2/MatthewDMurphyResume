import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import styles from './ProjectImage.module.css';
import Website from '../../../Website.png';
import Zurvive from '../../../Zurvive.png';
import Chicken from '../../../Chicken.png';





class ProjectImage extends Component {
    render() {

        let image = null;
        console.log(this.props.image);
        

        switch(this.props.image) {
            case ( 'Website' ):
                image = <div className={styles.ImageContainer}>
                            <Route path='/git' component={() => window.location = 'https://github.com/mdmurphy2/MatthewDMurphyResume'}/>
                            <a href="/git" target="_blank">
                            <img src={Website} alt='Website Image' className={styles.Image}/>
                            <div className={styles.ImageOverlay}>
                                <div className={styles.OverlayText}>View Source Code</div>
                            </div>
                            </a>
                        </div>  
                break;
            case ( 'Zurvive' ):
                image = <div className={styles.ImageContainer}>
                            <Route path='/zurvive' component={() => window.location = 'https://thesubwild.itch.io/zurvive'}/>
                            <a href="/zurvive" target="_blank">
                            <img src={Zurvive} alt='Zurvive Image' className={styles.Image}/>
                            <div className={styles.ImageOverlay}>
                                <div className={styles.OverlayText}>Click to play!</div>
                            </div>
                            </a>
                        </div>  
                break;
            case ( 'Chicken' ):
                image = <div className={styles.ImageContainer}>
                            <Route path='/chicken' component={() => window.location = 'https://thesubwild.itch.io/chicken-dodger'}/>
                            <a href="/chicken" target="_blank">
                            <img src={Chicken} alt='Chicken Dodger Image' className={styles.Image}/>
                            <div className={styles.ImageOverlay}>
                                <div className={styles.OverlayText}>Click to play!</div>
                            </div>
                            </a>
                        </div>  
                break;
            default:
                image = null;
                break;
        }

        return image
    }
}

export default ProjectImage;