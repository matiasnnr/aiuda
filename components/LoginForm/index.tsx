import React, { useEffect, useState } from "react";
import styles from "./LoginForm.module.css";
import useField from "@hooks/useField";
import Button from "@components/Button";
import * as C from "@helpers/constants";

interface Props {
  otherOptions: boolean;
}

const LoginForm = ({ otherOptions }: Props) => {
  const email = useField({ type: "email", placeholder: "Correo electrónico" });
  const password = useField({ type: "password", placeholder: "Contraseña" });

  useEffect(() => {
    console.log(JSON.stringify({ email, password }, null, 2));
  }, [email]);

  if (otherOptions) {
    return (
      <div className={styles.form}>
        <Button text="Continuar con Twitter" iconType={C.ICON_TWITTER} />
        <Button text="Continuar con Facebook" iconType={C.ICON_FACEBOOK} />
        <Button text="Continuar con TikTok" iconType={C.ICON_TIKTOK} />
      </div>
    );
  }

  return (
    <form className={styles.form}>
      <input {...email} />
      <input {...password} />
      <Button text="Continuar con Email" iconType={C.ICON_EMAIL} />
    </form>
  );
};

export default LoginForm;
