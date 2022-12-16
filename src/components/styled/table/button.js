/* eslint-disable no-alert *//* eslint-disable */
import styled from 'styled-components';


export const Button = styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    background-color: ${ props => props.backgroundColor || 'rgba(74, 189, 120, 1)'};
    margin-inline: 5px;
    border-width: 0.3px;
    border-color: rgba(80, 189, 120, 0.5);
    color: #f7f7f7;
    font-weight: 600;
    font-size: 0.7em
`;
