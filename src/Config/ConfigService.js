import { CONST_APPLICATION_NAME } from '../constants';
import { MissingConfigStoreException } from '../Exceptions/MissingConfigStoreException';

import { ConfigDefaults } from './ConfigDefaults';

export class ConfigService {
  static defaults = ConfigDefaults;
  static instance = null;
  static Factory = (...args) => {
    return ConfigService.instance instanceof ConfigService
      ? ConfigService.instance
      : new ConfigService(...args);
  };

  constructor({ config, keypath = CONST_APPLICATION_NAME }) {
    if (!config) throw new MissingConfigStoreException();
    ConfigService.instance = this;

    this.config = config;
    this.keypath = keypath;
    this.subscribers = [];
    this.configSubscription = config.observe(keypath, this.onSettingsChange);
  }

  onSettingsChange = () => {};

  static destroy() {
    this.instance &&
      this.instance.configSubscription &&
      this.instance.configSubscription.dispose();
    this.instance = undefined;
  }

  listen(subscriber, keypath) {
    if (!keypath) return;

    this.subscribers = (this.subscribers || []).concat([
      { subscriber, keypath },
    ]);

    return () => {
      const index = this.subscribers
        .map(({ subscriber }) => subscriber)
        .indexOf(subscriber);

      if (index >= 0) {
        this.subscribers.splice(index, 1);
      }
    };
  }
}
