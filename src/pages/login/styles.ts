import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) =>
    lighten(0.15, `${theme.colors.secondary}`)};
  border-radius: 1rem;

  padding: 3rem 3.5rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  a {
    text-decoration: underline;
  }
`;
