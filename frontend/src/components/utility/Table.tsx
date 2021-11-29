import styled from "styled-components";
import React from "react";
import {ExtendedProps} from "../../typings";


export const StyledTable = styled.table`
  width: 100%;
`

export const StyledTableRow = styled.tr`
  border-top: 1px solid #282c34;
  border-bottom: 1px solid #282c34;
`;

export const StyledTableHeader = styled.thead`
  border-top: 1px solid #282c34;
`;

export const StyledTableData = styled.td``;

export const StyledTableBody = styled.tbody``;

export const Table = ({ children, ...rest }: ExtendedProps ) => {
  return <StyledTable {...rest}>{ children }</StyledTable>;
};

Table.Head = ({ children, ...rest }: ExtendedProps) => {
  return <StyledTableHeader {...rest}>{children}</StyledTableHeader>;
};

Table.Body = ({ children, ...rest }: ExtendedProps) => {
  return <StyledTableBody {...rest}>{children}</StyledTableBody>;
};

Table.Th = ({ children, ...rest }: ExtendedProps) => {
  return <StyledTableHeader {...rest}>{children}</StyledTableHeader>;
};

Table.Tr = ({ children, ...rest }: ExtendedProps) => {
  return <StyledTableRow {...rest}>{children}</StyledTableRow>;
};

Table.Td = ({ children, ...rest }: ExtendedProps) => {
  return <StyledTableData {...rest}>{children}</StyledTableData>;
};
