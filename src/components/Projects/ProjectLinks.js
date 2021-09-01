// React
import React from 'react';

// Bootstrap
import Button from 'react-bootstrap/Button';

// Assets
import githubIcon from '../../config/assets/icons/github.svg';
import arrowIcon from '../../config/assets/icons/arrow-right-circle.svg';
import trelloIcon from '../../config/assets/icons/columns.svg';

const ProjectLinks = ( { url, github, trello, devpost, miro } ) => {
    return (
        <div className="project-links-container">

            {/*Project URL*/}
            {url &&
                <Button variant="primary" size="lg" href={url}>
                    <img src={arrowIcon} alt="" className="button-icon"/>See the Project
                </Button>
            }

            {/*Github*/}
            {github &&
                <Button variant="primary" size="lg" href={github}>
                    <img src={githubIcon} alt="" className="button-icon"/>GitHub
                </Button>
            }

            {/*Trello*/}
            {trello &&
                <Button variant="primary" size="lg" href={trello}>
                    <img src={trelloIcon} alt="" className="button-icon"/>Trello
                </Button>
            }

            {/*Devpost*/}
            {devpost &&
                <Button variant="primary" size="lg" href={devpost}>
                    <img src={trelloIcon} alt="" className="button-icon"/>Devpost
                </Button>
            }

        </div>
    )
}

export default ProjectLinks;