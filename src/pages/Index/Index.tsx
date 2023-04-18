import { FlexContainer } from "../../Ui/UiStyle";
import { CocktailList } from "../../components/CocktailList/CocktailList";
import SearchInput from "../../components/SearchInput/SearchInput";

export const Home = () => {
  return (
    <FlexContainer>
      <SearchInput />
      <CocktailList />
    </FlexContainer>
  );
};
