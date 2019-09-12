import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { green, amber } from '@material-ui/core/colors'
import { Error as ErrorIcon, CheckCircle as CheckCircleIcon, Close as CloseIcon, Info as InfoIcon, Warning as WarningIcon } from '@material-ui/icons'
import { Snackbar, SnackbarContent, IconButton } from '@material-ui/core'

import MessageContext from '../context/MessageContext'

const useStyles = makeStyles(({ palette, spacing }) => ({
    error: {
        backgroundColor: palette.error.dark
    },
    success: {
        backgroundColor: green[500]
    },
    info: {
        backgroundColor: palette.primary.main
    },
    warning: {
        backgroundColor: amber[700]
    },
    icon: {
        fontSize: 20
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: spacing(3)
    },
    message: {
        display: 'flex',
        alignItems: 'center'
    }
}));

const variantIcon = {
    success: CheckCircleIcon,
    error: ErrorIcon,
    info: InfoIcon,
    warning: WarningIcon
}

const [vertical, horizontal] = ['bottom', 'center'];

const Notification = ({ autoHideDuration }) => {
    const classes = useStyles();
    const [{ text, type, id }] = useContext(MessageContext);
    
    const [open, setOpen] = useState(false);
    useEffect(
        () => setOpen(!!text),
        [id]
    )

    const onClose = () => setOpen(false);

    const Icon = variantIcon[type];

    return (
        <Snackbar
            key={id}
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
        >
            <SnackbarContent 
                className={classes[type]}
                aria-describedby='snackbar-message'
                message={
                    <span id='snackbar-message' className={classes.message}>
                        <Icon className={clsx(classes.icon, classes.iconVariant)} />
                        {text}
                    </span>
                }
                action={
                    <IconButton key='close' aria-label='close' onClick={onClose}>
                        <CloseIcon className={classes.icon} />
                    </IconButton>
                }
            />
        </Snackbar>
    )
}

Notification.propTypes = {
    autoHideDuration: PropTypes.number
}

Notification.defaultProps = {
    autoHideDuration: 5000
}

export default Notification;