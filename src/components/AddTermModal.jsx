import React, { useContext } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core'

import TermForm from './TermForm'
import TermFormContext from '../context/TermFormContext'

export default ({ open, onClose, onSubmit }) => {
    const [term, { resetTerm }] = useContext(TermFormContext);

    const onSubmitClick = () => {
        onSubmit(term);
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
            <DialogTitle id='dialog-title'>Add Gita Term</DialogTitle>

            <DialogContent>
                <TermForm />
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button type='submit' onClick={onSubmitClick} color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    )
}