/** Simple test to check if the component will render */
import React from 'react';

import { render } from 'react-testing-library';

import { ConfigSection } from './ConfigurationSection';

describe('ConfigSection', () => {
  it('renders without crashing', () => {
    const { queryByText } = render((
      <ConfigSection />
    ));
    const configHead = queryByText('Configuration');
    expect(configHead.innerHTML).toBe('Configuration');
  });
});