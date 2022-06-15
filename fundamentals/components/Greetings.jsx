/**
 * React components are just functions that returns JSX!
 */
export const Greetings = (props) => (
  /**
   * "props" keys and values comes from a parent component
   */
  <p className="my-5">
    Hello from <span className="font-bold">{props.name}</span>!
  </p>
);
