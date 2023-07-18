// Importing the necessary CSS module for styling the component.
import callStyles from "../../styles/app_elements/call.module.css";

/**
 * Call Component
 * @param {string} id - The unique identifier of the call.
 * @param {string} date - The date when the call occurred.
 * @param {string} rootCause - The reason or root cause of the call.
 * @param {string} length - The duration of the call.
 * @param {string} agent - The name or identifier of the agent handling the call.
 * @param {string} outcome - The outcome of the call (positive, negative, or neutral).
 * @returns {JSX.Element} - Returns a React component representing a call item.
 */

const Call = ({ id, date, rootCause, length, agent, outcome }) => {
  return (
    <div className={callStyles.container}>
      <span>{id}</span>
      <span>{date}</span>
      <span>{rootCause}</span>
      <span>{length}</span>
      <span>{agent}</span>
      <div
        style={{
          height: "1rem",
          width: "1rem",
          backgroundColor:
            outcome == "positive" // If the outcome is positive, show a green dot.
              ? "var(--green)"
              : outcome == "negative"  // If the outcome is negative, show a red dot.
              ? "var(--red)"
              : "var(--amber)", // For any other outcome, show an amber dot.
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
};

export default Call;
