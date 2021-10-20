import React from "react";
import styled from "styled-components";
import resume from "../images/pexels-lukas-577210.jpg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>
          I am Lorem <span> Ipsum </span>
        </h4>
        <p className="paragraph">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Services</p>
          </div>
          <div className="info">
            <p>: Daniel Coll</p>
            <p>: 30</p>
            <p>: co</p>
            <p>: Spanish, English, German</p>
            <p>: Bogotá, Colombia</p>
            <p>: Analytics Things</p>
          </div>
        </div>
        <PrimaryButton title={'Download CV'}/>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  
  .left-content {
    width: 100%;
    
    img {
      width: 95%;
           object-fit: cover;
           position: relative;
    }
  }
  .right-content {
    position: relative;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title{
          padding-right: 3rem;
          p{
              font-weight: 600;
          }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;

export default ImageSection;
