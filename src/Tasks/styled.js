import styled, {css} from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;

    ${({hidden}) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({done}) => done && css`
        text-decoration: line-through;
    `} 
`;

export const Button = styled.button`
    color: #ffffff;
    border: none;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background-color 0.3s;
    cursor: pointer;

    ${({toggleDone}) => toggleDone && css`
        background-color: hsl(120, 61%, 34%);

        &:hover {
            background-color: hsl(120, 61%, 39%);
        }
    `}

    ${({remove}) => remove && css`
        background-color: hsl(348, 61%, 44%);

        &:hover {
            background-color: hsl(348, 61%, 52%);
        }
    `}
`;