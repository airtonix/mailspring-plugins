import {
  // Actions,
  // ComponentRegistry,
  // DatabaseStore,
  PreferencesUIStore,
  // TaskQueue,
  // Thread,
  // WorkspaceStore,
} from 'mailspring-exports';

import { ConfigService } from './Config/ConfigService';
import { PluginManagerFactory } from './Components/PluginManager';
import {
  CONST_APPLICATION_NAME,
  CONST_PREFERENCES_TABID,
  CONST_PREFERENCES_TABLABEL,
} from './constants';

const App = {
  ConfigService: null,
  PreferencesTab: null,
};

export async function activate() {
  const config = AppEnv.config;

  App.ConfigService = new ConfigService({
    config,
    keypath: CONST_APPLICATION_NAME,
  });

  App.PreferencesTab = new PreferencesUIStore.TabItem({
    tabId: CONST_PREFERENCES_TABID,
    displayName: CONST_PREFERENCES_TABLABEL,
    componentClassFn: () =>
      PluginManagerFactory({ service: App.ConfigService }),
  });

  PreferencesUIStore.registerPreferencesTab(App.PreferencesTab);
}

// Serialize is called when your package is about to be unmounted.
// You can return a state object that will be passed back to your package
// when it is re-activated.
//
export function serialize() {}

// This **optional** method is called when the window is shutting down,
// or when your package is being updated or disabled. If your package is
// watching any files, holding external resources, providing commands or
// subscribing to events, release them here.
//
export function deactivate() {
  if (App.ConfigService) App.ConfigService.destroy();
  if (App.PreferencesTab)
    PreferencesUIStore.unregisterPreferencesTab(App.PreferencesTab.sectionId);
}
