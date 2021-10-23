import EmailIcon from "@components/Icons/EmailIcon";
import FacebookIcon from "@components/Icons/FacebookIcon";
import React from "react";
import styles from "./Button.module.css";
import * as C from "@helpers/constants";
import ArrowIcon from "@components/Icons/ArrowIcon";
import TwitterIcon from "@components/Icons/TwitterIcon";
import TikTokIcon from "@components/Icons/TikTokIcon";

interface Props {
  text: string;
  color?: string;
  iconType?: string;
}

const handleIcon = (type?: string): JSX.Element => {
  let iconSelected = <div />;
  switch (type) {
    case C.ICON_LEFT:
      iconSelected = <ArrowIcon size={C.ICON_SMALL_SIZE} type={C.ICON_LEFT}/>;
      break;
    case C.ICON_RIGHT:
      iconSelected = <ArrowIcon size={C.ICON_SMALL_SIZE} type={C.ICON_RIGHT} />;
      break;
    case C.ICON_EMAIL:
      iconSelected = <EmailIcon size={C.ICON_NORMAL_SIZE} />;
      break;
    case C.ICON_TWITTER:
      iconSelected = <TwitterIcon size={C.ICON_NORMAL_SIZE} />;
      break;
    case C.ICON_FACEBOOK:
      iconSelected = <FacebookIcon size={C.ICON_NORMAL_SIZE} />;
      break;
    case C.ICON_TIKTOK:
      iconSelected = <TikTokIcon size={C.ICON_NORMAL_SIZE} />;
      break;

    default:
      break;
  }

  return iconSelected;
};

const handleColor = (type: string = '', color: string): string => {
  let buttonColor = color;
  switch (type) {
    case C.ICON_TWITTER:
      buttonColor = C.BUTTON_TWITTER_COLOR;
      break;
    case C.ICON_FACEBOOK:
      buttonColor = C.BUTTON_FACEBOOK_COLOR;
      break;
    case C.ICON_TIKTOK:
      buttonColor = C.BUTTON_TIKTOK_COLOR;
      break;

    default:
      break;
  }

  return buttonColor;
};

const Button = ({ text, color = C.BUTTON_PRIMARY, iconType }: Props) => {
  return (
    <button
      className={styles.button}
      style={{ 
        backgroundColor: handleColor(iconType, color),
        color: `${color === C.BUTTON_WHITE ? 'black' : 'white'}`,
      }}
    >
      {handleIcon(iconType)}
      <span className={styles.button__text}>{text}</span>
    </button>
  );
};

export default Button;
