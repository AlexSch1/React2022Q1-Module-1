import classes from './Input.module.css';

export const Input = (props) => {
  return (
    <>
      <input className={classes.input} type="email" {...props} />
    </>
  );
};
