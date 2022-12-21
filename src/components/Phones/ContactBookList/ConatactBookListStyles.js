import styled from 'styled-components';

export const Btn = styled.button`
  margin-top: 20px;

  background-color: #e83158;
  border-radius: 100px;
  box-shadow: rgba(244, 34, 59, 0.2) 0 -25px 18px -14px inset,
    rgba(244, 34, 59, 0.15) 0 1px 2px, rgba(244, 34, 59, 0.15) 0 2px 4px,
    rgba(244, 34, 59, 0.15) 0 4px 8px, rgba(244, 34, 59, 0.15) 0 8px 16px,
    rgba(244, 34, 59, 0.15) 0 16px 32px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 4px 13px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 9px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
    box-shadow: rgba(244, 34, 59, 0.2) 0 -25px 18px -14px inset,
      rgba(244, 34, 59, 0.15) 0 1px 2px, rgba(244, 34, 59, 0.15) 0 2px 4px,
      rgba(244, 34, 59, 0.15) 0 4px 8px, rgba(244, 34, 59, 0.15) 0 8px 16px,
      rgba(244, 34, 59, 0.15) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
  margin-left: 15px;
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const Li = styled.li`
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;

  font-weight: 500;
  font-size: 14px;
  display: flex;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  align-items: flex-end;
  justify-content: space-between;
`;
