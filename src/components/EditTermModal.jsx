import React, { useContext } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TermForm from './TermForm'
import TermFormContext from '../context/TermFormContext'

const useStyles = makeStyles({
    delete: {
        marginRight: 'auto'
    }
})

export default ({ open, onEdit, onDelete, onClose }) => {
    const classes = useStyles();
    const [term, { resetTerm }] = useContext(TermFormContext);

    const _onEditClick = () => {
        onEdit(term);
        resetTerm();
    }

    const _onDeleteClick = () => {
        onDelete(term);
        resetTerm();
    }

    return (
        <Dialog 
            fullWidth
            aria-labelledby='dialog-title' 
            aria-describedby='dialog-description' 
            open={open}
            maxWidth='sm'
            onClose={onClose} 
        >
            <DialogTitle id='dialog-title'>Edit Gita Term</DialogTitle>

            <DialogContent>
                <TermForm />
            </DialogContent>

            <DialogActions>
                <Button type='submit' onClick={_onDeleteClick} color='secondary' className={classes.delete}>
                    Delete
                </Button>
                <Button onClick={onClose} color='primary'>
                    Cancel
                </Button>
                <Button type='submit' onClick={_onEditClick} color='primary'>
                    Edit
                </Button>
            </DialogActions>
        </Dialog>
    )
}