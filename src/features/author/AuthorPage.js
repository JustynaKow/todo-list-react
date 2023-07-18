import { Container } from '../../common/Container';
import Header from '../../common/Header';
import Section from '../../common/Section';

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Justyna Kowalewska"
      body={
        <p>
          <strong>👩 30-letnia mieszkanka Suwalszczyzny.</strong>
          <br />
          Cenię ciszę, spokój, naturę. Często pracuję z domu, który znajduje się
          w środku lasu. Mam wspaniałą rodzinę.
          <br />W wolnym czasie uwielbiam czytać. 📚📚📚
        </p>
      }
    />
  </Container>
);

export default AuthorPage;
