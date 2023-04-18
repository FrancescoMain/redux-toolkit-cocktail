import { useRef } from "react";
import { Section, Container, Input } from "./style";

const SearchInput = () => {
  const searchValue = useRef(null);

  return (
    <Section>
      <form action="">
        <Container>
          <label htmlFor="name">Search Cocktail</label>
          <Input type="text" name="name" id="name" ref={searchValue} />
        </Container>
      </form>
    </Section>
  );
};

export default SearchInput;
