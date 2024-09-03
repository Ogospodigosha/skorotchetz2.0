import React, {ComponentPropsWithoutRef, ElementRef, forwardRef} from 'react';
import {Header} from "app/ui/header/header";
import s from './layout.module.scss'
type Props = ComponentPropsWithoutRef<'div'>
export const Layout = forwardRef<ElementRef<'div'>, Props>(({className, children, ...rest}, ref) => {
    const classes = className
    return <div ref={ref} {...rest}>
        <Header/>
        <main className={s.main}>{children}</main>
    </div>
})
