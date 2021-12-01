import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const StyledNotFoundPage = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  max-width: 400px;
  h2, p {
    text-align: center;
  }
  .bolded {
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: #48a8d7;
  }
`;

const NotFound = () => {
  return (
    <StyledNotFoundPage>
      <h2>Oops... Seems you have lost your way.</h2>
      <p className="bolded">The page you are looking for does not exist.</p>
      <p><Link to="/">Click here to return <FontAwesomeIcon icon="home" size="2x"/></Link></p>
    </StyledNotFoundPage>
  );
};

export default NotFound;
