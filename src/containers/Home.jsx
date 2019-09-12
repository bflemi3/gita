import React, { Fragment, useState } from 'react'
import { Typography } from '@material-ui/core'
import throttle from 'lodash/throttle'

import SearchBar from '../components/SearchBar'
import VisibleTerms from '../components/VisibleTerms'
import useTerms from '../hooks/useTerms'
import AddTerm from '../components/AddTerm'
import { TermFormProvider } from '../context/TermFormContext'

const throttledSearch = throttle((value, search) => search(value), 500);

export default () => {
    const [terms, { search, set, remove }] = useTerms();

    const onSearchChange = ({ target: { value } }) => throttledSearch(value, search);

    const onAddTermSubmit = term => set(term);

    const onEditTerm = term => set(term);

    const onDeleteTerm = term => remove(term.id);

    return (
        <TermFormProvider>
            <Typography gutterBottom variant='h1' component='h1'>Gita Meanings</Typography>

            <SearchBar onChange={onSearchChange} />
            <VisibleTerms terms={terms} onEdit={onEditTerm} onDelete={onDeleteTerm} />

            <AddTerm onSubmit={onAddTermSubmit} />            
        </TermFormProvider>
    )
}