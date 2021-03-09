"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.serialize = exports.activate = void 0;
const mailspring_exports_1 = require("mailspring-exports");
const ConfigService_1 = require("./Config/ConfigService");
const PluginManager_1 = require("./Components/PluginManager");
const constants_1 = require("./constants");
const App = {
    ConfigService: null,
    PreferencesTab: null,
};
async function activate() {
    const config = AppEnv.config;
    App.ConfigService = new ConfigService_1.ConfigService({
        config,
        keypath: constants_1.CONST_APPLICATION_NAME,
    });
    App.PreferencesTab = new mailspring_exports_1.PreferencesUIStore.TabItem({
        tabId: constants_1.CONST_PREFERENCES_TABID,
        displayName: constants_1.CONST_PREFERENCES_TABLABEL,
        componentClassFn: () => PluginManager_1.PluginManagerFactory({ service: App.ConfigService }),
    });
    mailspring_exports_1.PreferencesUIStore.registerPreferencesTab(App.PreferencesTab);
}
exports.activate = activate;
// Serialize is called when your package is about to be unmounted.
// You can return a state object that will be passed back to your package
// when it is re-activated.
//
function serialize() { }
exports.serialize = serialize;
// This **optional** method is called when the window is shutting down,
// or when your package is being updated or disabled. If your package is
// watching any files, holding external resources, providing commands or
// subscribing to events, release them here.
//
function deactivate() {
    if (App.ConfigService)
        App.ConfigService.destroy();
    if (App.PreferencesTab)
        mailspring_exports_1.PreferencesUIStore.unregisterPreferencesTab(App.PreferencesTab.sectionId);
}
exports.deactivate = deactivate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQVE0QjtBQUU1QiwwREFBdUQ7QUFDdkQsOERBQWtFO0FBQ2xFLDJDQUlxQjtBQUVyQixNQUFNLEdBQUcsR0FBRztJQUNWLGFBQWEsRUFBRSxJQUFJO0lBQ25CLGNBQWMsRUFBRSxJQUFJO0NBQ3JCLENBQUM7QUFFSyxLQUFLLFVBQVUsUUFBUTtJQUM1QixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBRTdCLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDO1FBQ3BDLE1BQU07UUFDTixPQUFPLEVBQUUsa0NBQXNCO0tBQ2hDLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyxPQUFPLENBQUM7UUFDbEQsS0FBSyxFQUFFLG1DQUF1QjtRQUM5QixXQUFXLEVBQUUsc0NBQTBCO1FBQ3ZDLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxDQUNyQixvQ0FBb0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdkQsQ0FBQyxDQUFDO0lBRUgsdUNBQWtCLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ2hFLENBQUM7QUFoQkQsNEJBZ0JDO0FBRUQsa0VBQWtFO0FBQ2xFLHlFQUF5RTtBQUN6RSwyQkFBMkI7QUFDM0IsRUFBRTtBQUNGLFNBQWdCLFNBQVMsS0FBSSxDQUFDO0FBQTlCLDhCQUE4QjtBQUU5Qix1RUFBdUU7QUFDdkUsd0VBQXdFO0FBQ3hFLHdFQUF3RTtBQUN4RSw0Q0FBNEM7QUFDNUMsRUFBRTtBQUNGLFNBQWdCLFVBQVU7SUFDeEIsSUFBSSxHQUFHLENBQUMsYUFBYTtRQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkQsSUFBSSxHQUFHLENBQUMsY0FBYztRQUNwQix1Q0FBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlFLENBQUM7QUFKRCxnQ0FJQyJ9