import React, { Fragment, useState, useContext } from 'react'
import { List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import EditTermModal from './EditTermModal'
import TermFormContext from '../context/TermFormContext'

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        paddingTop: spacing(3)
    }
}))

const Term = ({ term, onClick }) => {
    const _onClick = () => onClick(term);

    return (
        <ListItem button onClick={_onClick}>
            <ListItemText primary={term.term} secondary={term.meaning} />
        </ListItem>
    )
}

const NoResults = () => <Typography variant='h4'>No results</Typography>

export default ({ terms, onEdit, onDelete }) => {
    const classes = useStyles();
    const [_, { setTerm }] = useContext(TermFormContext);
    const [openEditModal, setOpenEditModal] = useState(false);

    const onClick = term => {
        setOpenEditModal(true);
        setTerm(term);
    }

    const onCloseModal = () => setOpenEditModal(false);

    const _onEdit = newTerm => {
        onEdit(newTerm);
        onCloseModal();
    }

    const _onDelete = newTerm => {
        onDelete(newTerm);
        onCloseModal();
    }

    return (
        <Fragment>
            <div className={classes.root}>
                {(!terms || !terms.length)
                    ? <NoResults />
                    : <List>
                        {terms.map(t => <Term key={t.term} term={t} onClick={onClick} />)}
                    </List>
                }
            </div>

            <EditTermModal 
                open={openEditModal}
                onDelete={_onDelete}
                onEdit={_onEdit}
                onClose={onCloseModal}
            />
        </Fragment>
    )
}