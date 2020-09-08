/* eslint-disable quotes */
/* eslint-disable semi */
import styled from "styled-components";

export const Form = styled.form`
  padding: 16px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const Error = styled.span`
  padding: 16px;
  font-size: 14px;
  color: red;
`;
