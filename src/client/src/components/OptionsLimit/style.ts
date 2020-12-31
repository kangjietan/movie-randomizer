import styled from "styled-components";

export const OptionsLimitContainer = styled.div`
  display: flex;
`;

// Limit Section - START //
export const LimitContainer = styled.div`
  position: relative;
  height: 75px;
  overflow: hidden;
  width: 100%;
  color: black;
  transition: all 0.4s ease;

  &:first-child {
    margin-right: 0.1rem;
  }
`;

export const LimitInput = styled.input`
  width: 100%;
  height: 100%;
  color: #595f6e;
  padding-top: 20px;
  border: none;
  outline: none;
  font-size: 1.3rem;
`;

export const FormLabel = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid #5fa8d3;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
`;

export const FormLabelText = styled.span`
  position: absolute;
  bottom: 6px;
  left: 0;
  transition: all 0.3s ease;
  padding: 0.1rem 0.25rem;
`;

// Limit Section - END //

export const RandomizeButtonContainer = styled.div`
  height: 75px;
`;

export const RandomizeButton = styled.button`
  height: 100%;
`;
