import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import design from "../images/balanza.png";
import intelligence from "../images/bolsa.png";
import analytics from "../images/mapa.png";

function ServicesSection() {
  return (
      <InnerLayout>
          <ServicesSectionStyled>
              <Title title={'Services'} span={'services'} />
              <div className="services">
                  <ServiceCard 
                      image={design} 
                      title={'Web Design'} 
                      paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                  />
                  <div className="mid-card">
                      <ServiceCard 
                          image={intelligence} 
                          title={'Artificial Intelligence'} 
                          paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                      />
                  </div>
                  <ServiceCard 
                      image={analytics} 
                      title={'Game Development'} 
                      paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                  />
              </div>
          </ServicesSectionStyled>
      </InnerLayout>
  )
}

const ServicesSectionStyled = styled.section`
  .services{
      margin-top: 5rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1.5rem;
      @media screen and (max-width:1000px){
          flex-direction: column;
      }
      @media screen and (max-width:950px){
          grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width:650px){
          grid-template-columns: repeat(1, 1fr);
      }
     
  }
`;

export default ServicesSection;