import React, { useReducer, useContext } from "react";
import ResultsItem from "./results-item";
import fetchMoreReducer from "./reducers/fetchMoreReducer.js.js";
import { AuthContext } from "../../../Navbar/context/auth-context.js";
import fetchMoreHits from "../../../api/fetchMoreHits.js";
import getItemImg from "../../../api/getItemImg.js";
import ErrorMsg from "../../../Navbar/error-msg.js";
import ResultsListContainer from "./results-list-container";

const ResultsList = ({ initialHits, dataType }) => {
  const { authToken } = useContext(AuthContext);

  const [{ hits, hasError, isLoading, next }, dispatch] = useReducer(
    fetchMoreReducer,
    {
      hits: initialHits[dataType].items,
      isLoading: false,
      hasError: false,
      next: initialHits[dataType].next,
    }
  );
  const loadMore = () => {
    fetchMoreHits(next, dataType, authToken, dispatch);
  };

  if (hasError) {
    return (
      <ResultsListContainer dataType={dataType}>
        <ErrorMsg />
      </ResultsListContainer>
    );
  }

  if (hits.length === 0) {
    return (
      <ResultsListContainer dataType={dataType}>
        <span >No results found</span>
      </ResultsListContainer>
    );
  }

  return (
    <ResultsListContainer dataType={dataType}>
      <div className="results-container">
        {hits &&
          hits.map((item, idx) => {
            const { id, name } = item;
            const itemImg = getItemImg(item, dataType, "small");
            return (
              <ResultsItem
                // use index in key to handle occasions when Spotify API
                // returns the same item multiple times in response to search.
                key={`${dataType}-${name}-${id}-${idx}`}
                title={name}
                img={itemImg}
              />
            );
          })}
      </div>
      {next && (
        <div>
          <button
            onClick={loadMore}
          >
            {isLoading ? "loading..." : "More results"}
          </button>
        </div>
      )}
    </ResultsListContainer>
  );
};


export default ResultsList;
