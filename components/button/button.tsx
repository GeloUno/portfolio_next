import Link from 'next/link';
import { HTMLAttributes } from 'react';
import classes from './button.module.css'
export enum ButtonClassEnum {
    PRIMARY = 'myBtnColorPrimary',
    SECONDARY = 'myBtnColorSecondary'
}

export interface IButtonProps {
    labelButton: string,
    classButton: ButtonClassEnum,
    className?: string,
    onClick?: Function,
    link?: string,
}

function Button({
    labelButton,
    classButton,
    onClick,
    link,
    className }: IButtonProps) {

    function onClickHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()       
        onClick && onClick()
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