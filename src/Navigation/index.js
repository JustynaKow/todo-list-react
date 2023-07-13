import { toAuthor, toTasks } from '../route';
import { StyledNavLink } from './styled';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <StyledNavLink activeClassName="active" to={toTasks()}>
          Zadania
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink activeClassName="active" to={toAuthor()}>
          O autorze
        </StyledNavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
