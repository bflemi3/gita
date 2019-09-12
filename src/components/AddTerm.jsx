import React, { Fragment, useState } from 'react'
import { Fab } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import AddTermModal from './AddTermModal'

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(4),
        right: theme.spacing(4),
    }
}));

export default ({ onSubmit }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const onModalClose = () => setOpen(false);

    const onClick = () => setOpen(true);

    return (
        <Fragment>
            <Fab color='primary' aria-label='add' className={classes.fab} onClick={onClick}>
                <AddIcon />
            </Fab>

            <AddTermModal open={open} onClose={onModalClose} onSubmit={onSubmit} />
        </Fragment>
    )
}