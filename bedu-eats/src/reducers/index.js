import {addArticle} from "../action/";

const initialState = {
    articles: []
  };
  const rootReducer = (state = initialState, addArticle) => state;
  export default rootReducer;