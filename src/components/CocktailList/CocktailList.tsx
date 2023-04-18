import { useDispatch } from "react-redux";
import { CocktailState } from "../../redux/features/type";
import { useEffect, useState } from "react";
import { fetchCocktails } from "../../redux/features/cocktailSlice";
import { AppDispatch, useAppSelector } from "../../redux/store";
import { newCocktails } from "./type";
import { Link } from "react-router-dom";

export const CocktailList = () => {
  const { cocktails, loading } = useAppSelector((state) => state.data);

  const [modifiedCocktail, setModifiedCocktail] = useState<newCocktails[]>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((cocktail) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          cocktail;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });

      setModifiedCocktail(newCocktails);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktails]);

  if (loading) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <div>
        {modifiedCocktail?.map((cocktail) => {
          const { id, name, image, glass, info } = cocktail;
          return (
            <div key={id}>
              <div>
                <img src={image} alt={name} />
                <div>
                  <h5>{name}</h5>
                  <h4>{glass}</h4>
                  <p>{info}</p>
                  <Link to={"/cocktail"}>
                    <button>Details</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
