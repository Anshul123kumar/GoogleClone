import React, {createContext} from "react";

const SearchPageContext = createContext({
  suggestionsData: [],
  getSuggestions: value => {},
  loading: false,
  error: null,
  voiceText: '',
  getVoiceText: text => {}
});


export default SearchPageContext;
