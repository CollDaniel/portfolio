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
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Web Design"}
            paragraph={"Lorem 1 Lorem 1  Lorem 1 Lorem 1 Lorem 1 Lorem 1 Lorem 1"}
          />
         <div className="mid-card">
         <ServiceCard
            image={intelligence}
            title={"Artifitial Inteligence"}
            paragraph={"Lorem 2 Lorem 2 Lorem 2 Lorem 2 Lorem 2 Lorem 2 Lorem 2"}
          />
         </div>
          <ServiceCard
            image={analytics}
            title={"Digital Analytics"}
            paragraph={"Lorem 3 Lorem 3 Lorem 3 Lorem 3 Lorem 3 v Lorem 3 Lorem 3"}
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
.services{
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    .mid-card{
        margin: 0 1.2rem;
    }
}
`;

export default ServicesSection;
