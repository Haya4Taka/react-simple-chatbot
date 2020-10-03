import styled from 'styled-components';
import defaultTheme from '../theme';

const CustomSubmitButton = styled.button`
  background-color: #000;
  color: #FFF;
  height: 100%;
  width: 80px;
  border: 0;
  box-shadow: none;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  opacity: ${props => (props.disabled && !props.invalid ? '.5' : '1')};
  outline: none;
  &:not(:disabled):hover {
    opacity: 0.7;
  }
`;

CustomSubmitButton.defaultProps = {
  theme: defaultTheme
};

export default CustomSubmitButton;
