import Link from 'next/link';
import classes from './button.module.css';
import Image from 'next/image';

export enum ButtonClassEnum {
  PRIMARY = 'myBtnColorPrimary',
  SECONDARY = 'myBtnColorSecondary',
}

export interface IMailTo {
  email: string;
  subject?: string;
}

export interface IButtonProps {
  labelButton?: string;
  classButton: ButtonClassEnum;
  className?: string;
  onClick?: Function;
  link?: string;
  mailto?: IMailTo;
  icon?: 'linkedin' | 'mail' | 'github';
  cyrcle?: boolean;
  openiInNewTab?: boolean;
}

function Button({
  labelButton,
  classButton,
  onClick,
  link,
  className,
  mailto,
  icon,
  cyrcle,
  openiInNewTab,
}: IButtonProps) {
  function onClickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    onClick && onClick();
  }
  if (mailto) {
    return (
      <Link href="#">
        <a
          href={`mailto:${mailto.email} ${
            mailto.subject && `?subject=${mailto.subject}`
          }`}
          target="_blank"
          data-testid="buttonLinkMailTo"
          className={`${cyrcle ? classes.mybtncyrcle : classes.mybtn} ${
            classes[classButton]
          } ${className ? className : ''} `}
        >
          {icon && (
            <Image
              src={`/icons/${icon}.svg`}
              width={25}
              height={25}
              className="mybtn"
            />
          )}
          {labelButton && labelButton}
        </a>
      </Link>
    );
  }
  if (link) {
    return (
      <Link href={`${link}`} data-testid="button">
        <a
          data-testid="buttonLink"
          className={`${cyrcle ? classes.mybtncyrcle : classes.mybtn} ${
            classes[classButton]
          } ${className ? className : ''} `}
          target={openiInNewTab ? '_blank' : '_self'}
        >
          {icon && <Image src={`/icons/${icon}.svg`} width={25} height={25} />}
          {labelButton && labelButton}
        </a>
      </Link>
    );
  }

  return (
    <button
      data-testid="button"
      onClick={(event) => {
        onClickHandler(event);
      }}
    >
      <span
        data-testid="buttonContext"
        className={`${classes.mybtn} ${classes[classButton]} ${
          className ? className : ''
        }`}
      >
        {labelButton}
      </span>
    </button>
  );
}

export default Button;
