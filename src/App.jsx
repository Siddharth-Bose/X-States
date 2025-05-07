import Selector from "./components/Selector"; // Importing the Selector component
import styles from "./App.module.css"; // Importing styles for App component

export default function App() {
  return (
    // Main container for the app
    <div className={styles.appContainer}>
      {/* App title */}
      <h1>Select Location</h1>
      {/* Embedding the Selector component */}
      <Selector />
    </div>
  );
}
