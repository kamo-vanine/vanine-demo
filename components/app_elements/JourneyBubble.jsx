import journeyBubbleStyles from "../../styles/app_elements/journeyBubble.module.css";

const JourneyBubble = ({
  colour,
  shadowColour,
  numOccurence,
  isSelected,
  bubble,
}) => {
  return (
    <div
      className={`${journeyBubbleStyles.container} ${
        isSelected ? journeyBubbleStyles.selected : ""
      }`}
      onMouseOver={(e) => {
        if (!isSelected) {
          e.target.style.boxShadow = `0px 0px 0px 10px ${shadowColour}`;
        }
      }}
      onMouseLeave={(e) => {
        e.target.style.boxShadow = `none`;
      }}
      style={{
        backgroundColor: colour,
        marginTop: `${
          (numOccurence / 100) * (Math.random() * (25 - 15) + 15)
        }rem`,
        marginBottom: `${
          (numOccurence / 100) * (Math.random() * (10 - 5) + 5)
        }rem`,
        marginRight: `${
          (numOccurence / 100) * (Math.random() * (25 - 15) + 15)
        }rem`,
        marginLeft: `${
          (numOccurence / 100) * (Math.random() * (10 - 5) + 5)
        }rem`,
        width: `${
          (numOccurence > 10 ? numOccurence / 100 : 0.1) * 1500
        }px`,
        height: `${
          (numOccurence > 10 ? numOccurence / 100 : 0.1) * 1500
        }px`,
      }}
    >
      {!isSelected ? (
        numOccurence
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            height: "100%",
            padding: "2rem .75rem",
            width: "78%",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {bubble.keywords.map((element, idx) => {
            return (
              <div
                key={`keyword${idx}`}
                style={{
                  margin: `${Math.random() * 2}rem`,
                }}
              >
                {element}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default JourneyBubble;
