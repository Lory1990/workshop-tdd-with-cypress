import axios from "axios";

export interface ISubmitFormData{
    name: string;
    surname: string;
    favoriteDrinkId: string;
}

export interface IDrink{
    strDrink:string,
    strDrinkThumb:string,
    idDrink:string,
}

const useApiClient = () =>{

    const fetchDrinks = async () : Promise<IDrink[]> =>{
        const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");
        return result.data.drinks as IDrink[]
    }

    const submitForm = (data : ISubmitFormData) =>{
        return axios.post("/api/form", data);
    }

    return {
        submitForm,
        fetchDrinks
    }
}

export default useApiClient