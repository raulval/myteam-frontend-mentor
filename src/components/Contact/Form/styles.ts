import styled from "styled-components";

export const FormContainer = styled.form`
  display: grid;
  row-gap: 1.5rem;
  width: 100%;
`;

export const SubmitButton = styled.button`
  display: inline-block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.secondary.main};
  transition-duration: 300ms;
  font-size: 1.125rem;
  line-height: 1.75rem;
  width: max-content;
  border: 2px solid #ffffff;
  border-radius: 1.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: #ffffff;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: #ffffff;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
