import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ReviewItem from "./ReviewItem";
import Title from "./Title";

function ReviewsSection() {
  return (
    <ReviewsStyled>
      <Title title={"Reviews"} span={"Other Word"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem text={"lorem ipsum"} />
          <ReviewItem text={"lorem ipsum 2"} />
        </div>
      </InnerLayout>
    </ReviewsStyled>
  );
}

const ReviewsStyled = styled.section`
  .reviews {
      display: flex;
  }
`;

export default ReviewsSection;
