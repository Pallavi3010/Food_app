import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;

// Props.children : It simply means that the component will display whatever is included in between the
// opening and closing tags while invoking the component
