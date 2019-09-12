import React, { useContext } from 'react'
import { TextField } from '@material-ui/core'
import TermFormContext from '../context/TermFormContext'

export default () => {
    const [{ term, meaning }, { setTerm }] = useContext(TermFormContext);

    const onChange = ({ target: { name, value } }) => setTerm(t => ({ ...t, [name]: value }));

    return (
        <form>
            <TextField 
                required
                fullWidth
                autoFocus
                margin='normal'
                name='term'
                label='Term'
                value={term}
                onChange={onChange}
            />
            <TextField 
                required
                fullWidth
                multiline
                margin='normal'
                rows={4}
                name='meaning'
                label='Meaning'
                value={meaning}
                onChange={onChange}
            />
        </form>
    )
}