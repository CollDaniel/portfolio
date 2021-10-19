import React from 'react'
import Particle from '../Components/Particle.js';
import styled from 'styled-components';
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';

function HomePage() {
    return (
       <HomePageStyled>
           <div className="p-particles-js">
               <Particle />
           </div>
           <div className="typography">
               <h1>Hi I´m <span> Daniel</span></h1>
               <p>
                   Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                   Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                   Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                   Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                   Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                   Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
               </p>
               <div className="icons">
                   <a href="https://github.com/CollDaniel" className="icon i-twitter">
                       <TwitterIcon />
                   </a>
                   <a href="https://github.com/CollDaniel" className="icon i-github">
                        <GithubIcon />
                    </a>
                   <a href="https://www.youtube.com/channel/UCIaX9sL9Un7Ito9t7qIuhZw" className="icon i-youtube">
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

    /* .p-particles-js{
        position: absolute;
        top: 0;
        left: 0;
    } */

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

    }

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

        .i-twitter{
            &:hover{
                border: 2px solid blue;
                color: blue;
            }
        }
    }

`;

export default HomePage
