/* eslint-disable no-alert *//* eslint-disable */
import styled from 'styled-components';

const color = {
    primary: '#4abd78'
}

export const StyledTable = styled.table`
    border-radius: 10px 10px 0px 0px ;
    border-collapse: collapse;
    margin: 25px 0;
    min-width: 400px;
    font-size: 1.2em;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

export const THead = styled.thead`
  background-color: ${color.primary} ;
  
  color: #f7f7f7
`;

export const TFoot = styled.tfoot`
  // custom css goes here
`;

export const TBody = styled.tbody`
    &:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    & > TR:active {
        color: ${color.primary};
    }
`;

export const TR = styled.tr`
    border-bottom: 1px solid #dddddd;
    text-align: left;
    &:nth-of-type(even) {
        background-color: #f8f8f8;
    }
    &:last-of-type {
        border-bottom: 3px solid ${color.primary};
    }
`;

export const TH = styled.th`
    padding: 20px 25px;
    text-align: center;
`;

export const TD = styled.td`
    padding: 20px 25px;
`;