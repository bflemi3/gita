import { useState, useEffect, useContext, useRef } from 'react'
import MessageContext from '../context/MessageContext'

import * as api from '../api/terms'

export default () => {
    const lastSearch = useRef();
    const [_, setMessage] = useContext(MessageContext);
    
    const [results, setResults] = useState([]);
    useEffect(
        () => { search() },
        []
    )

    const search = async value => {
        try {
            const results = await api.search(value);
            lastSearch.current = value;
            setResults(results);
        } catch(e) {
            console.error(e);
            setMessage({ type: 'error', text: 'There was a problem retrieving search results' });
        }
    }

    const reset = () => search();

    const set = async term => {
        try {
            await api.set(term);
            const results = await api.search(lastSearch.current);
            setResults(results);
        } catch(e) {
            console.error(e);
            setMessage({ type: 'error', text: 'There was a problem creating your new term' });
        }
    }

    return [results, { search, reset, set }];
}