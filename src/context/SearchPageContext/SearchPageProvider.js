import React, {useState} from "react";
import SearchPageContext from "./SearchPageContext";
import axios from "axios";
import { SEARCH_URL } from '@env';

const SearhPageProvider = ({ children }) => {
    const [suggestionsData, setSuggestionsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [voiceText, setVoiceText] = useState('');

    const getSuggestions = async(value) => {
        setLoading(true);
        try {
            const response = await axios.get(`${SEARCH_URL}${value}`);
            setSuggestionsData(response?.data[1]);
        } catch(error) {
            setError(error);
            console.error(error);
        }
        setLoading(false);
    }

    const getVoiceText = (text) => {
        setVoiceText(text);;
    }

    return (
      <SearchPageContext.Provider value={{suggestionsData, getSuggestions, loading, error, voiceText, getVoiceText}}>
        {children}
      </SearchPageContext.Provider>
    );
}

export default SearhPageProvider;