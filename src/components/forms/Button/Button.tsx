import classes from './Button.module.css';

export const Button = ({ children, ...props }) => {
  return (
    <button className={classes.myBtn} {...props}>
      {children}
    </button>
  );
};
