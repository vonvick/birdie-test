import styled from "styled-components";
import {ReactNode} from "react";

const StyledCard = styled.div`
  width: 300px;
  height: auto;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const EventCard = ({ children, ...rest }: { children: ReactNode }) => {
  return <StyledCard {...rest}>{children}</StyledCard>;
};

export default EventCard;
