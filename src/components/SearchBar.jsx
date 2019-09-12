import React from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        paddingTop: spacing(3)
    }
}))

export default ({ onChange }) => {
    const classes = useStyles();

    return (
        <form className={classes.root}>
            <TextField 
                fullWidth
                inputProps={{ style: { fontSize: '1.5rem' } }}
                name='search'
                label='Search for a term'
                onChange={onChange}
            />
        </form>
    )
}