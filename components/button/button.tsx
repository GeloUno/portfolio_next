import Link from 'next/link';
import { HTMLAttributes } from 'react';
import classes from './button.module.css'

export enum ButtonClassEnum {
    PRIMARY = 'myBtnColorPrimary',
    SECONDARY = 'myBtnColorSecondary'
}

export interface IMailTo {
    email: string,
    subject?: string,

}

export interface IButtonProps {
    labelButton: string,
    classButton: ButtonClassEnum,
    className?: string,
    onClick?: Function,
    link?: string,
    mailto?: IMailTo,
}

function Button({
    labelButton,
    classButton,
    onClick,
    link,
    className,
    mailto }: IButtonProps) {

    function onClickHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        onClick && onClick()
    }
    if (mailto) {
        return (
            <Link href='#'>
                <a
                    href={`mailto:${mailto.email} ${mailto.subject && `?subject=${mailto.subject}`}`}
                    target='_blank'
                    data-testid="buttonLinkMailTo"
                    className={`${classes.mybtn} ${classes[classButton]} ${className ? className : ""} `}

                > {labelButton}</a>
            </Link>
        )
    }

    if (link) {
        return (
            <Link href={`${link}`}
                data-testid="button" >
                {/* <a className={`${classes.mybtn} ${classes[classButton]} ${className} 
                transform hover:scale-105 motion-reduce:transform-none
                `}> */}
                <a data-testid="buttonLink"
                    className={`${classes.mybtn} ${classes[classButton]} ${className ? className : ""} `}
                >
                    {labelButton}</a>
            </Link>
        )
    }

    return (
        <button data-testid="button"
            // className={`transform hover:scale-105 motion-reduce:transform-none`}
            onClick={(event) => { onClickHandler(event) }}
        >
            <span
                data-testid="buttonContext"
                className={`${classes.mybtn} ${classes[classButton]} ${className ? className : ""}`}>
                {labelButton}
            </span>
        </button>
    );
}

export default Button;