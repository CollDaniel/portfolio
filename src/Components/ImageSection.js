import React from "react";
import styled from "styled-components";
import resume from "../images/pexels-lukas-577210.jpg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
    return (
        <ImageSectionStyled>
             <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am a <span>Data storyteller</span></h4>
                <p className="paragraph">
                More than just analyzing data, I translate it into impactful stories that drive success. Beyond the expertise, I bring a collaborative spirit and infectious curiosity to every project. Communication, diverse perspectives, and building relationships are key to unlocking data's true value. Let's connect and turn data into impact!
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name:</p>
                        <p>Nationality:</p>
                        <p>Languages:</p>
                        <p>Location:</p>
                        <p>Services:</p>
                    </div>
                    <div className="info">
                        <p>Daniel Coll Ramírez</p>                        
                        <p>Colombia </p>
                        <p>Spanish, English </p>
                        <p>Bogotá, Colombia</p>
                        <p>Data Analysis and Visualization</p>
                    </div>
                </div>
              
                <PrimaryButton title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 100%;
            object-fit: contain;
            padding: 1rem;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;