import styled from "styled-components";

export const Wrapper = styled.div`
    margin: auto 0;
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background-color: transparent;
    color: #217b75;
    border: none;
    margin: 0 0 0 20px;
    transition: color 0.3s;
    cursor: pointer;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        color: #4daca6;
    }

    &:active {
        color: #53d4cb;
    }

    &:disabled {
        color: #ccc;
        cursor: not-allowed;
    }
`;