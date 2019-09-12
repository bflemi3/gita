import React, { createContext, useState } from 'react'

const Context = createContext();

const initialState = { text: null, type: 'info' };

export const MessageProvider = props => {
    const [state, setState] = useState(initialState);

    const setMessage = message => setState({ ...message, id: Date.now() });

    return <Context.Provider value={[state, setMessage]} {...props} />
}

export default Context;