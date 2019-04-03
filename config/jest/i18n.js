/**
 * Mocks for globals exposed by
 * @gctools-components/i18n-translation-webpack-plugin
 */

const Localizer = function Localizer() {
  this.lang = 'en_CA';
  this.setLanguage = (lang) => { this.lang = lang; };
  this.domainsReady = () => new Promise(resolve => resolve());
  this.onLanguageChange = () => {};
};

global.localizer = new Localizer();

global.__ = str => `${global.localizer.lang}: ${str}`;
global.___ = global.__;
