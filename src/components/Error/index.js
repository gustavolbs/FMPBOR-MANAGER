/**
 * Error Component
 * A component that displays the error on screen.
 */
import React from 'react';

import { ErrorContainer } from './styles';

export default function Error({ err }) {
  return (
    <ErrorContainer>
      <span>{err}</span>
    </ErrorContainer>
  );
}
