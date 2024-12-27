import { useState } from "react";
import HomePageContext from "./HomePageContext";
import axios from "axios";
import { TOP_HEADLINE_URL } from '@env';

const HomePageProvider = (props) => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getNewsData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(TOP_HEADLINE_URL);
            setNewsData(response?.data?.articles);
        }
        catch (error) {
            console.log(error);
            setError(error);
        }
        setLoading(false);
    }

    return (
        <HomePageContext.Provider value={{newsData, getNewsData, loading, error}}>
            {props.children}
        </HomePageContext.Provider>
    );
}

export default HomePageProvider;