import styled from "styled-components";

interface FormFieldsProps {
  error: string;
}

export const Label = styled.label`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
`;

export const Input = styled.input<FormFieldsProps>`
  font-weight: 600;
  font-size: 0.9375rem;
  padding-bottom: 1rem;
  padding-left: 0.875rem;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => (props.error ? "#f67e7e" : "white")};
  outline: none;
  color: ${({ theme }) => theme.colors.primary.text};

  &::placeholder {
    color: ${(props) =>
      props.error ? "#f67e7e" : props.theme.colors.terciary.text};
    opacity: ${(props) => (props.error ? "85%" : "100%")};
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.text};
  }
`;

export const TextArea = styled.textarea<FormFieldsProps>`
  font-weight: 600;
  font-size: 0.9375rem;
  padding-bottom: 1rem;
  padding-left: 0.875rem;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => (props.error ? "#f67e7e" : "white")};
  outline: none;
  resize: none;
  color: ${({ theme }) => theme.colors.primary.text};

  &::placeholder {
    color: ${(props) =>
      props.error ? "#f67e7e" : props.theme.colors.terciary.text};
    opacity: ${(props) => (props.error ? "85%" : "100%")};
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.text};
  }
`;

export const Error = styled.span`
  font-style: italic;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 0.8rem;
  color: #f67e7e;
`;
