import clsx from 'clsx'
import styles from './Button.module.scss'

function Button({ primary, disable }) {

    const classes = clsx(styles.btn, {
        [styles.primary] : primary,
        [styles.disable] : disable
    })

    return (
        <button className={classes}>
            Click me !
        </button>
    )
}

export default Button