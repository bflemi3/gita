import React, { createContext, useState } from 'react'

const Context = createContext();

const initialTermState = {
    term: '',
    meaning: '',
    id: null,
    index: ''
}

export const TermFormProvider = props => {
    const [term, setTerm] = useState(initialTermState);

    const resetTerm = () => setTerm(initialTermState);
    
    return <Context.Provider value={[term, { setTerm, resetTerm }]} {...props} />
}

export default Context;