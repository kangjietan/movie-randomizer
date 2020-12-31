import React, { useState } from "react";
import {
  FormLabel,
  FormLabelText,
  LimitContainer,
  LimitInput,
  OptionsLimitContainer,
  RandomizeButton,
  RandomizeButtonContainer,
} from "./style";

interface Props {
  setPageLimit: (limit: number) => void;
}

export const OptionsLimit: React.FC<Props> = ({ setPageLimit }) => {
  const [inputActive, setInputActive] = useState(false);
  const [limit, setLimit] = useState("");

  const limitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { value } = target;

    setLimit(value);
  };

  const randomizeWithLimit = () => {
    let page = Number(limit);
    
    if (Number.isInteger(page)) setPageLimit(page);
  }

  let inputStyle = {};

  let inputFocusStyle = {
    transform: "translateY(-140%)",
    fontSize: "0.9rem",
    color: "#5fa8d3",
  };

  let inputFilledStyle = {
    transform: "translateY(-140%)",
  };

  if (inputActive) inputStyle = inputFocusStyle;

  if (!inputActive && limit.length !== 0) inputStyle = inputFilledStyle;

  return (
    <OptionsLimitContainer>
      <LimitContainer>
        <LimitInput
          type="text"
          value={limit}
          maxLength={2}
          placeholder={inputActive ? "Enter Page Limit: 1-99" : ""}
          onChange={limitHandler}
          onFocus={() => setInputActive(true)}
          onBlur={() => setInputActive(false)}
        />
        <FormLabel>
          <FormLabelText style={inputStyle}>Enter Limit</FormLabelText>
        </FormLabel>
      </LimitContainer>
      <RandomizeButtonContainer>
        <RandomizeButton onClick={randomizeWithLimit}>Randomize</RandomizeButton>
      </RandomizeButtonContainer>
    </OptionsLimitContainer>
  );
};
