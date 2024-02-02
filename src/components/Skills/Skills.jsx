import {  } from "react";
import developerIcon from '../../assets/developer.jpg'
import infraIcon from '../../assets/it-infra-professional.jpg'
import './Skills.css'

const Skills = () => {
    
    
    return (
        <div className="skills-container">
            <div className="card">
                <div className="icon">
                    <div className="icon-background">
                        <img src={infraIcon} alt="" />
                    </div>
                </div>
                <h2>Analista de Infraestrutura</h2>
                <p>Administrei ambientes com diversos sistemas operacionais, em Cloud e on-premisses (VMWARE).</p>
                <h3>Principais habilidades:</h3>
                <p>Linux,&nbsp;Ansible,&nbsp;Office365,&nbsp;Azure AD</p>
                <h3>Experiência com:</h3>
                <ul>
                    <li>Google e Oracle Cloud</li>
                    <li>CentOS, Red Hat</li>
                    <li>Ubuntu, Debian</li>
                    <li>Microsoft Azure, Office365</li>
                    <li>AWX (Ansible)</li>
                    <li>VMWARE ESXi</li>
                    <li>Gitlab e Terraform</li>
                    <li>Suporte ao usuário</li>
                    
                </ul>
            </div>

            <div className="card">
                <div className="icon">
                    <div className="icon-background">
                        <img src={developerIcon} alt="" />
                    </div>
                </div>
                <h2>Programador</h2>
                <p>Gosto de fazer projetos do zero, transformar problemas do dia a dia em interfaces interativas.</p>
                <h3>Principais tecnologias:</h3>
                <p>JavaScript,&nbsp;ReactJS,&nbsp;Material UI,&nbsp;Python</p>
                <h3>Conhecimentos em:</h3>
                <ul>
                    <li>Firebase e Google Cloud</li>
                    <li>Funções em nuvem</li>
                    <li>Hospedagem</li>
                    <li>Automação de tarefas</li>
                    <li>HTML, CSS</li>
                    <li>Databases NoSQL,&nbsp;SQL</li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Skills