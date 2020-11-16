import styled from 'styled-components';
import colors from '../../styles/colors';

export const ErrorContainer = styled.div`
  color: ${colors.redMessage};
  background-color: ${colors.redBackgroundError};
  padding: 20px 30px;
  margin-top: 10px;
  border-radius: 10rem;
  width: 100%;

  span {
    font-size: 16px;
  }
`;
