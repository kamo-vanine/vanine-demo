// Importing the necessary CSS module for styling the component.
import journeyBubbleStyles from "../../styles/app_elements/journeyBubble.module.css";

/**
 * JourneyBubble Component
 * @param {string} colour - The background color of the bubble.
 * @param {string} shadowColour - The shadow color of the bubble when hovered (if not selected).
 * @param {number} numOccurence - The occurrence count associated with the bubble.
 * @param {boolean} isSelected - Indicates whether the bubble is currently selected.
 * @param {Object} bubble - An object containing additional data for the bubble when selected.
 * @returns {JSX.Element} - Returns a React component representing a journey bubble.
 */

const JourneyBubble = ({
  colour,
  shadowColour,
  numOccurence,
  isSelected,
  bubble,
}) => {

   /**
   * Generate Random Margin
   * Generates a random margin value within specified ranges based on numOccurence.
   * @param {number} numOccurence - The occurrence count associated with the bubble.
   * @param {number} upper - The upper range for the random margin calculation.
   * @param {number} lower - The lower range for the random margin calculation.
   * @returns {number} - Returns the generated margin value.
   */
  
  const generateMargin = (numOccurence, upper, lower) => {
    return (numOccurence / 100) * (Math.random() * (upper - lower) + upper);
  };
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
        marginTop: `${generateMargin(numOccurence, 25, 15)}rem`,
        marginBottom: `${generateMargin(numOccurence, 10, 5)}rem`,
        marginRight: `${generateMargin(numOccurence, 25, 15)}rem`,
        marginLeft: `${generateMargin(numOccurence, 10, 5)}rem`,
        width: `${(numOccurence > 10 ? numOccurence / 100 : 0.1) * 1500}px`,
        height: `${(numOccurence > 10 ? numOccurence / 100 : 0.1) * 1500}px`,
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
