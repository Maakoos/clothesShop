import styled from "styled-components";

import bgImage from "img/baner.webp";

const Banner = styled.div`
  width: 100%;
  min-height: 300px;
  max-height: 550px;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 980px) {
    height: 350px;
  }

  @media (min-width: 1200px) {
    height: 100vh;
  }
`;

export default Banner;
