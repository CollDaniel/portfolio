import React from 'react'
import Particle from '../Components/Particle.js';
import styled from 'styled-components';
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function HomePage() {
    return (
       <HomePageStyled>
           <div className="p-particles-js">
               <Particle />
           </div>
           <div className="typography">
               <h1>Hi, I´m <span> Daniel Coll</span></h1>
               <p>
               <b> Martech & Data Analytics Expert <br></br> 7+ Years Driving Success with Data-Driven Strategies</b> 
               </p>
               <br></br>
               <p>Transforming data into actionable insights, mastering the data journey and crafting personalized experiences through omnichannel strategies.
                </p>
                {/* <p>
                 Passionate about martech innovation and measurable results. 
               </p> */}
               <br></br>
               <b><p>#Martech #DataDriven #Leadership #Strategy #DataVisualization #Analytics</p></b>
               <div className="icons">
                   <a href="https://bit.ly/Portfolio_Page-Home-Social-LinkedIn" className="icon i-linkedin">
                       <LinkedInIcon />
                   </a>
                   <a href="https://bit.ly/Portfolio_Page-Home-Social-X" className="icon i-x">
                       <TwitterIcon />
                   </a>
                   <a href="https://bit.ly/Portfolio_Page-Home-Social-GitHub" className="icon i-github">
                        <GithubIcon />
                    </a>
                   <a href="https://bit.ly/Portfolio_Page-Home-Social-YouTube" className="icon i-youtube">
                        <YoutubeIcon />
                    </a>
                </div>
           </div>
       </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        color: white;
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
            .i-x{
                &:hover{
                    border: 2px solid #ffffff;
                    color: #ffffff;
                }
            }
            .i-linkedin{
                &:hover{
                    border: 2px solid #0077B5;
                    color: #0077B5;
                }
            }
        }
    }
`;

export default HomePage;