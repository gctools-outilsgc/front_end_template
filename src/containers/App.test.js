import React from 'react';

import { render, fireEvent } from 'react-testing-library';
import { MockedProvider } from 'react-apollo/test-utils';

import { App } from './App';


describe('App', () => {
  afterEach(() => {
    localizer.lang = 'en_CA';
  });
  it('renders without crashing', () => {
    const { queryByText } = render((
      <MockedProvider>
        <App />
      </MockedProvider>
    ));
    const welcomeText = queryByText('App Title');
    expect(welcomeText.innerHTML).toBe('App Title');
  });
  describe('Language Button', () => {
    it('toggles language when clicked', () => {
      const { getByText } = render(<MockedProvider><App /></MockedProvider>);
      const { lang } = localizer;
      fireEvent.click(getByText(`${lang}: Language`));
      expect(localizer.lang).not.toEqual(lang);
    });
  });
  describe('toggleLanguage', () => {
    it('calls preventDefault', () => {
      const fn = jest.fn();
      const e = {
        preventDefault: fn,
      };
      App.toggleLanguage(e);
      expect(fn).toBeCalled();
    });
    it('can be called without an event', () => {
      expect(App.toggleLanguage).not.toThrow();
    });
    it('can change the global language', () => {
      const initialLang = localizer.lang;
      App.toggleLanguage();
      expect(localizer.lang).not.toEqual(initialLang);
      App.toggleLanguage();
      expect(localizer.lang).toEqual(initialLang);
    });
  });
});
