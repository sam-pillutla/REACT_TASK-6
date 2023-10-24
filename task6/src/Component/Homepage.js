import React, { Component } from 'react'
import './styles.css';
import mypic from './mypic1.png';
import figma from './figma.png';
import mern from './mern.png';
import l1 from './l1.png';
import l2 from './l2.png';
import l3 from './l3.png';
import l4 from './l4.png';


export default class Homepage extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div className='super'>
                
            
            <div className="portfolio">
                <div className="left">
                    <h1 id='head'>Hello,I'm <br></br>Sam Pillutla<br></br> A Front-end Developer</h1>
                    <h2 id='head1'>Studying in VIT,Vellore.</h2>
                    <h3>I’m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</h3>

                </div>
                <div className="right">
                    <img
                    src={mypic} // Replace with your image URL
                    alt="Sam's Profile"
                    />
                </div>
            </div>

                <div className='exp'>
                <h1 className='subhead'>WORK EXPERIENCE</h1>
                <h1 className='subbody'>I have worked for...</h1>
                <h4 className='in'>In my design roles as both an intern and leader, I've developed versatile technical and communication skills. These experiences have made me an effective team leader, a collaborative team member, and a creative problem solver.</h4>
                    <div className="cards-container">
                        <div className="card">
                            <div className="card-number">01</div>
                            <h2 className='role'>Senior core Designer-AYUDA.NGO</h2>
                            <p className='role-d'>As the Design Lead of Ayuda NGO, I spearheaded the creative direction for "Riviera," the monumental flagship event of VIT, leaving an indelible impact on participants and the community alike.</p>
                        </div>
                        <div className="card">
                            <div className="card-number">02</div>
                            <h2 className='role'>UI/UX Designer intern-FLEXDIN</h2>
                            <p className='role-d'>My role is to design a user interface using figma. Flixdin is making a film makers platform ,where film makers communicate with each other and fulfils their professional requirement.</p>
                        </div>
                        <div className="card">
                            <div className="card-number">03</div>
                            <h2 className='role'>Web-Developer intern<br></br>SUVIDHA FOUNDATION</h2>
                            <p className='role-d'>My role for this internship is to develop a complete website for Suvidha foundation.Here i contribute to complete the full website individually and i get exposed to new technologies expanding my skills. </p>
                        </div>
                    </div>
                </div>

                <div className='skillset'>
                        <h1 className='subhead'>SKILL SET</h1>
                        <h1 className='subbody'>What do i know</h1>
                        <h4 className='in1'>I've acquired a broad range of technical, communication, and management skills. My technical proficiency includes MERN stack, HTML, CSS, Bootstrap, C, C++, Python, and Java. These skills, combined with effective communication and management abilities, enable me to excel in various projects and teams.</h4>
                        <div className='images'>
                            <img id='image2' src={figma} alt='figma'></img>
                            <img id='image1' src={mern} alt='mern'></img>
                            <img id='image' src={l1} alt='mern'></img>
                        <div className='imagess'>
                            <img id='image' src={l2} alt='mern'></img>
                            <img id='image' src={l3} alt='mern'></img>
                            <img id='image' src={l4} alt='mern'></img>
                        </div>
                        </div>
                
                </div>

                <div className='exp'>
                <h1 className='subhead'>MY PROJECTS</h1>
                <h1 className='subbody'>I have worked on...</h1>
                <h4 className='in'>In my design roles as both an intern and leader, I've developed versatile technical and communication skills. These experiences have made me an effective team leader, a collaborative team member, and a creative problem solver.</h4>
                    <div className="cards-container">
                        <div className="card1">
                            <div className="card-number">01</div>
                            <h2 className='role'>GO TRACKER APP</h2>
                            <p className='role-d'>Designed entire UI/UX user interface for the "Go tracker" app using Figma.</p>
                        </div>
                        <div className="card1">
                            <div className="card-number">02</div>
                            <h2 className='role'>EDUGEN Website</h2>
                            <p className='role-d'>Designed entire UI/UX user interface for the " EduGen " app using Figma.</p>
                        </div>
                        <div className="card1">
                            <div className="card-number">03</div>
                            <h2 className='role'>E-commerce Website</h2>
                            <p className='role-d'>Made a clone website for amazon using html, css,js,bootstrap. </p>
                        </div>
                        
                    </div>

                    <div className="card2">
                            <div className="card-number">04</div>
                            <h2 className='role'>AI-ML PROJECTS</h2><br></br>
                            <p className='role-d'>Made an Animal recogniser AI/ML website and also image dection caption website</p>
                    </div>
                </div>

                <div className="contact">
                <h1 className='subhead'>CONTACT ME</h1>
                <h1 className='subbody'>Lets get in touch</h1>
                    <h4 className='in'>If you'd like to get in touch, you can reach me through the following:</h4>
                    <ul>
                        <li>Email: sam.pillutla2003@gmail.com</li>
                        <li>Phone: +91 75696-89999</li>
                        <li>LinkedIn: https://LinkedIn.com/sam-pillutla</li>
                        <li>GitHub: https://github.com/sam-pillutla</li>
                    </ul>
                </div>
           
            </div>
        )
    }
}
