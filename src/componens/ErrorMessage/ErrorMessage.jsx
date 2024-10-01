import css from "./ErrorMessage.module.css"; 

export default function ErrorMessage () {

  return (
    <div className={css.errorWrapper}>
      <p className={css.errorMessage}>ERROR...Try again</p>
    </div>
  );
};