import styled from "styled-components";

export const Container = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Field = styled.input`
    padding: 10px;
    border: 1px solid #eee;
`

export const Button = styled.button`
    background-color: #217b75;
    color: #ffffff;
    border: none;
    padding: 10px;
    transition: 0.5s linear;
    cursor: pointer;

    &:hover {
        background-color: #4daca6;
        transform: scale(1.1);
    }

    &:active {
        background-color: #53d4cb;
    }
`;
