const { createContext } = require("react");

const HomePageContext = createContext({
    newsData: [],
    getNewsData: () => {},
    loading: false,
    error: null,
});

export default HomePageContext;