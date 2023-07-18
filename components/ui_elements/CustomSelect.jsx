// Importing required React Icons for the dropdown arrows.
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
// Importing React hooks to use state and side effects.
import { useState, useEffect } from "react";
// Importing the necessary CSS module for styling the component.
import customSelectStyles from "../../styles/ui_elements/customSelect.module.css";

/**
 * CustomSelect Component
 * @param {string} id - The unique identifier for the custom select component.
 * @param {string} title - The title or label of the custom select component.
 * @param {string[]} options - An array of options to display in the select dropdown.
 * @param {boolean} showSelectedOptionAsTitle - Flag to determine whether to show the selected option as the title.
 * @param {boolean} isSearch - Flag to indicate whether the custom select is a searchable dropdown.
 * @param {string} value - The pre-selected value to be shown as the default selected option (if provided).
 * @returns {JSX.Element} - Returns a React component representing a custom select dropdown.
 */

const CustomSelect = ({
  id,
  title,
  options,
  showSelectedOptionAsTitle,
  isSearch,
  value,
  handleChange
}) => {
  // State variables to manage the component behavior.
  const [showOptions, setShowOptions] = useState(false);
  const [optionsToDisplay, setOptionsToDisplay] = useState(options);
  const [selectedOption, setSelectedOption] = useState("");

  const displayDropDown = () => {
    setShowOptions(true);
  };

  const hideDropDown = () => {
    setShowOptions(false);
  };

  const setAvailableOptions = (optionToRemove) => {
    let newOptionsToDisplay = options.filter(
      (element) => element != optionToRemove
    );

    setOptionsToDisplay(newOptionsToDisplay);
  };

  const handleOptionSelect = (e) => {
    setAvailableOptions(e.target.innerText);
    setShowOptions(false);
    setSelectedOption(e.target.innerText);

    if (isSearch) {
      document.querySelector(`#${id}input`).value = "";
    }
  };

  const searchOptions = (e) => {
    const value = e.target.value;

    let newOptionsToDisplay = options.filter((element) =>
      element.toLowerCase().includes(value.toLowerCase())
    );
    console.log(value);
    setOptionsToDisplay(newOptionsToDisplay);
  };

  useEffect(() => {
    if (value) {
      setSelectedOption(value);
      setAvailableOptions(value);
    }
  }, []);

  return (
    <div className={customSelectStyles.container} id={id}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {isSearch ? (
          <input
            type="text"
            className={customSelectStyles.input}
            name="optionToSearch"
            id={`${id}input`}
            onClick={displayDropDown}
            onChange={searchOptions}
            placeholder={
              showSelectedOptionAsTitle
                ? selectedOption
                  ? selectedOption
                  : title
                : title
            }
          />
        ) : (
          <span>
            {showSelectedOptionAsTitle
              ? selectedOption
                ? selectedOption
                : title
              : title}
          </span>
        )}

        {showOptions ? (
          <span onClick={hideDropDown}>
            <RiArrowDropUpLine />
          </span>
        ) : (
          <span onClick={displayDropDown}>
            <RiArrowDropDownLine />
          </span>
        )}
      </div>

      {showOptions ? (
        <div className={customSelectStyles.options}>
          {optionsToDisplay.map((element, idx) => {
            return (
              <div
                key={`${element.toString()}`}
                onClick={(e) => handleOptionSelect(e)}
                className={customSelectStyles.option}
              >
                {element}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default CustomSelect;
