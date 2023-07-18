import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  background-color: ${({ theme }) => theme.color.teal};
  margin: 0;
`;

export const Item = styled.li`
  margin: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};

  &.active {
    font-weight: bold;
  }
`;
