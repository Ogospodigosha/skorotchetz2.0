import { forwardRef, useState, ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './text-field.module.scss'


export type TextFieldProps = {
    type?: 'search' | 'text' | 'password'
    label?: string
    errorMessage?: string
    clearField?: () => void
} & ComponentPropsWithoutRef<'input'>

type PropsType = TextFieldProps & Omit<ComponentPropsWithoutRef<'input'>, keyof TextFieldProps>

export const TextField = forwardRef<HTMLInputElement, PropsType>(
    ({ type = 'text', errorMessage, className, clearField, label, ...rest }, ref) => {
        const [showPassword, setShowPassword] = useState(false)

        const isPasswordType = type === 'password'

        const isSearchType = type === 'search'

        const displayClearButton = isSearchType && clearField && rest.value

        const finalType = getFinalType(type, showPassword)

        const passwordHandler = () => setShowPassword(prev => !prev)

        const classes = {
            root: clsx(s.root, className),
            label: clsx(s.label, rest.disabled && s.disabled),
            input: clsx(s.input, isSearchType && s.search, errorMessage && s.error),
            searchIcon: clsx(s.searchIcon, rest.disabled && s.disabledIcon),
        }

        return (
            <div className={classes.root}>
                <div  className={classes.label}>
                    {label}
                    <div className={s.container}>
                        <input
                            className={classes.input}
                            type={isPasswordType ? finalType : 'text'}
                            ref={ref}
                            {...rest}
                        />
                        {isPasswordType && (
                            <button
                                type="button"
                                className={s.button}
                                onClick={passwordHandler}
                                disabled={rest.disabled}
                            >
                                {/*{showPassword ? <Icon name="eyeOff" /> : <Icon name="eye" />}*/}
                            </button>
                        )}
                        {/*{isSearchType && (*/}
                        {/*    // <Icon name="search" width={20} height={20} className={classes.searchIcon} />*/}
                        {/*)}*/}
                        {displayClearButton && (
                            <button
                                type="button"
                                className={s.button}
                                onClick={clearField}
                                disabled={rest.disabled}
                            >
                                {/*<Icon name="cross" width={16} height={16} />*/}
                            </button>
                        )}
                    </div>
                </div>
                {!!errorMessage && (
                    <div className={s.errorMessage}>
                        {errorMessage}
                    </div>
                )}
            </div>
        )
    }
)

function getFinalType(type: TextFieldProps['type'], showPassword: boolean) {
    if (type === 'password' && !showPassword) {
        return 'password'
    }

    return 'text'
}