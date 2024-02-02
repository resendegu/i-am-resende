import { Fragment, useEffect, useState } from 'react'
import './Projects.css'
import { GitHub, Public } from '@mui/icons-material'
import { onValue } from 'firebase/database'
import { projectsRef } from '../../services/firebase/database/database'
import BigDialog from '../Dialogs/BigDialog/BigDialog'

const Projects = () => {

    useEffect(() => {
        onValue(projectsRef, (snapshot) => {
            const data = snapshot.val()
            console.log(data)
            setProjects(data)
        })
    }, [])

    const [projects, setProjects] = useState({
        project: {
            title: '',
            description: '',
            img: '',
            link: '',
            link2: ''
        }
    })
    const [openDialog, setOpenDialog] = useState(false)
    const [dialogContent, setDialogContent] = useState('')

    

    const Cards = () => {

        const buildCards = (project, key) => {
            return (
                <Fragment key={`frag${key}`}>
                    <div className="project-card" key={`card${key}`}>
                        <h3>{project.title}</h3>
                        <div className='card-img' onClick={() => handleImageClick(project.img)}>
                            <img src={project.img} alt="" />
                        </div>
                        <span>{project.description}</span>
                        <div className='project-links'>
                            {project.link != '' && <button onClick={() => handleProjectLink(project.link)}><i><Public /></i> Ver projeto</button>}
                            {project.link2 != '' && <button onClick={() => handleGitHubLink(project.link2)}><i><GitHub /></i> Ver no GitHub</button>}
                        </div>
                    </div>
                </Fragment>
            )
        }

        let cardsArray = []

        for (const key in projects) {
            if (Object.hasOwnProperty.call(projects, key)) {
                const project = projects[key];
                cardsArray.push(project)
            }
        }

        let cards = cardsArray.map((project, index) => {
            return buildCards(project, index)
        })

        return cards;
    }

    const handleImageClick = (img) => {
        console.log(img)
        let element = (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%'
            }}>
                <img src={img} />
            </div>
            
        )
        setDialogContent(element)
        setOpenDialog(true)
    }

    const handleProjectLink = (link) => {
        window.open(link, '_blank', 'noreferrer')
    }

    const handleGitHubLink = (link) => {
        window.open(link, '_blank', 'noreferrer')
    }


    return (
        <Fragment>
            {openDialog && <BigDialog setOpen={setOpenDialog}>{dialogContent}</BigDialog>}
            <div className="projects">
                <h2>Projetos</h2>
                <div className="projects-grid" id='projects-grid'>
                    <Cards />
                </div>
            </div>
        </Fragment>
    )

}

export default Projects