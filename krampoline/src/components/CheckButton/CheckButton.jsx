import React from "react";
import { styled } from "styled-components";
import { COLOR } from "../../utils/color";
import { FONT_SIZE } from "../../utils/fontSize";
import { ReactComponent as UnCheck } from "../../assets/icons/UnCheck.svg";
import { ReactComponent as Check } from "../../assets/icons/Check.svg";

const CheckButtonStyle = styled.button`
  display: flex;
  align-items: center;
  border: none;
  padding: 20px 16px;
  min-width: 345px;
  border-radius: 10px;
  background-color: ${COLOR["bg-gray-500"]};
  margin-bottom: 8px;
  max-height: 56px;

  font-size: ${FONT_SIZE.m};
`;

const ButtonTextStyle = styled.span`
  display: inline-block;
  padding-left: 16px;
`;

export default function CheckButton(props) {
  const { children, active, onClickHandler } = props;
  return (
    <CheckButtonStyle onClick={onClickHandler}>
      {active ? <Check /> : <UnCheck />}
      <ButtonTextStyle>{children}</ButtonTextStyle>
    </CheckButtonStyle>
  );
}
