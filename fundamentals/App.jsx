import { Greetings } from "./components/Greetings";
import { Widget } from "./components/Widget";

const App = () => {
  /**
   * in JSX the "class" property must be renamed to "className" 😭
   */
  return (
    <main className="container mx-auto">
      <h1 className="text-3xl font-bold my-5">Learning React</h1>
      <hr />
      <Greetings name="Mohole" />
      <hr />
      <Widget />
    </main>
  );
};

export default App;
