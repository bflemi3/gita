import uuid from 'uuid'

const TERMS_KEY = 'gita_terms';

const serialize = terms => JSON.stringify(terms);

const deserialize = terms => JSON.parse(terms);

const isEqualTerm = (term, id) => term.id === id;

const createIndex = term => term.term.toLowerCase();

const getTerms = () => {
    const result = localStorage.getItem(TERMS_KEY);
    return result ? deserialize(result) : [];
}

const setTerms = terms => localStorage.setItem(TERMS_KEY, serialize(terms));

export const search = async value => {
    const terms = getTerms();
    if(!value) return terms;
    
    value = value.toLowerCase();
    return value ? terms.filter(({ index }) => index.includes(value)) : terms;
}

export const set = async term => {
    const terms = getTerms();

    if(!term.id) term.id = uuid.v1();
    term.index = createIndex(term);

    const { id } = term;
    // if it's a new term then add it to the terms collection
    if(!terms.some(t => isEqualTerm(t, id))) {
        setTerms(terms.concat(term));
        return;
    }

    // otherwise update the terms collection
    setTerms(terms.map(t => isEqualTerm(t, id) ? term : t));
}

export const get = async id => {
    const terms = getTerms();
    return terms.find(t => isEqualTerm(t, id));
}

export const remove = async id => {
    const terms = getTerms();
    const newTerms = terms.map(t => isEqualTerm(t, id) ? undefined : t).filter(t => t);
    setTerms(newTerms);
}