export interface Cocktails {
    drinks: Drink[]
}
export interface Drink {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate: string | null;
    strTags: string | null;
    strVideo: string | null;
    strCategory: string | null;
    strIBA: string | null;
    strAlcoholic: string | null;
    strGlass: string | null;
    strInstructions: string;
    strInstructionsES: string | null;
    strInstructionsDE: string | null;
    strInstructionsFR: string | null;
    strInstructionsIT: string | null;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string | null;
    strIngredient3: string | null;
    strIngredient4: string | null;
    strIngredient5: string | null;
    strIngredient6: string | null;
    strIngredient7: string | null;
    strMeasure1: string;
    strMeasure2: string | null;
    strMeasure3: string | null;
    strMeasure4: string | null;
    strMeasure5: string | null;
    strMeasure6: string | null;
}

export interface CocktailState {
    cocktails: Drink[],
    cocktail: Drink | null,
    error: string | null,
    loading: boolean | null
}
export const initialState: CocktailState = {
    cocktails: [],
    cocktail: null,
    error: null,
    loading: false
}

export interface CocktailState {
    cocktails: Drink[],
    cocktail: Drink | null,
    error: string | null,
    loading: boolean | null
}

