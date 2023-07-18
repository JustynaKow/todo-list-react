import { toAuthor, toTasks } from '../routes';
import { StyledNavLink, List, Item } from './styled';

const Navigation = () => (
  <nav>
    <List>
      <Item>
        <StyledNavLink activeClassName="active" to={toTasks()}>
          Zadania
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink activeClassName="active" to={toAuthor()}>
          O autorze
        </StyledNavLink>
      </Item>
    </List>
  </nav>
);

export default Navigation;
