import React, {ComponentPropsWithoutRef, CSSProperties} from 'react';
import s from './page.module.scss'

type Props = ComponentPropsWithoutRef<'div'> & {
    mt?: CSSProperties['marginTop']
}
export const Page = ({children, className, style, mt, ...rest}: Props) => {
    const styles = {marginTop: mt, ...style}
    return <div className={s.container} style={styles} {...rest}>{children}</div>
};

