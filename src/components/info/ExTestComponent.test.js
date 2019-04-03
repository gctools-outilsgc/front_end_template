/** Simple test to check if the component will render with props.
 *  Remember: export both your component and your localized component, and use the NOT localized component for your tests!
 */
import React from 'react';

import { render, cleanup, fireEvent } from 'react-testing-library';

import { ExTestComponent } from './ExTestComponent';

afterEach(cleanup);

describe('ExTestComponent', () => {
  it('renders without props', () => {
    const { queryByText } = render((
      <ExTestComponent />
    ));
    const name = queryByText('Jonald');
    expect(name.innerHTML).toBe('Jonald');
  });
  
  it('renders with props', () => {
    const { queryByText } = render((
      <ExTestComponent
        name="Darth Vader"
      />
    ));
    const name = queryByText('Darth Vader');
    expect(name.innerHTML).toBe('Darth Vader');
  });

  it('fires the action prop', () => {
    const fakeFunction = jest.fn();
    const { getByText } = render ((
      <ExTestComponent
        name="Luke Skywalker"
        buttonText="Join the Dark Side?"
        buttonAction={() => {
          fakeFunction();
        }}
      />
    ));
    const button = getByText('Join the Dark Side?');
    fireEvent.click(button);
    expect(fakeFunction).toHaveBeenCalledTimes(1);
  });
});