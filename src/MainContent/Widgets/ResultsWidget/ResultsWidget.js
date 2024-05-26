import './ResultsWidget.css';
import Results from '../ResultsWidget/results';
import { useReducer, useEffect } from 'react';
import fetchReducer from './reducers/fetchReducer';
import axios from 'axios';
import fetchHits from '../../../api/fetchHits';

function ResultsWidget({style, query, authToken}) {  
    const [{ hits, hasError, isLoading }, dispatch] = useReducer(fetchReducer, {
        hits: null,
        isLoading: false,
        hasError: false,
    });

    useEffect(() => {
        const { cancel, token } = axios.CancelToken.source();
        const timeOutId = setTimeout(
            () => fetchHits(query, authToken, dispatch, token),
            500
        );
        return () => cancel("No longer latest query") || clearTimeout(timeOutId);
    }, [query, authToken]);

    return (
        <div className="results-widget" style={style}>
            {/* {hits && !isLoading && !hasError} */}
            <Results hits={hits} isLoading={isLoading} hasError={hasError} />
        </div>
    );
}

export default ResultsWidget;