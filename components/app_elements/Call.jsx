import callStyles from "../../styles/app_elements/call.module.css";

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
            outcome == "positive"
              ? "var(--green)"
              : outcome == "negative"
              ? "var(--red)"
              : "var(--amber)",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
};

export default Call;
