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
        componentClassFn: () => {
            const component = PluginManager_1.PluginManagerFactory({ service: App.ConfigService });
            return component;
        },
    });
    mailspring_exports_1.PreferencesUIStore.registerPreferencesTab(App.PreferencesTab);
}
exports.activate = activate;
function serialize() { }
exports.serialize = serialize;
function deactivate() {
    if (App.ConfigService)
        App.ConfigService.destroy();
    if (App.PreferencesTab)
        mailspring_exports_1.PreferencesUIStore.unregisterPreferencesTab(App.PreferencesTab.sectionId);
}
exports.deactivate = deactivate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUF3RDtBQUV4RCwwREFBdUQ7QUFDdkQsOERBQWtFO0FBQ2xFLDJDQUlxQjtBQUVyQixNQUFNLEdBQUcsR0FBRztJQUNWLGFBQWEsRUFBRSxJQUFJO0lBQ25CLGNBQWMsRUFBRSxJQUFJO0NBQ3JCLENBQUM7QUFFSyxLQUFLLFVBQVUsUUFBUTtJQUM1QixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBRTdCLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDO1FBQ3BDLE1BQU07UUFDTixPQUFPLEVBQUUsa0NBQXNCO0tBQ2hDLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyxPQUFPLENBQUM7UUFDbEQsS0FBSyxFQUFFLG1DQUF1QjtRQUM5QixXQUFXLEVBQUUsc0NBQTBCO1FBQ3ZDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtZQUNyQixNQUFNLFNBQVMsR0FBRyxvQ0FBb0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUN2RSxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsdUNBQWtCLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ2hFLENBQUM7QUFsQkQsNEJBa0JDO0FBTUQsU0FBZ0IsU0FBUyxLQUFJLENBQUM7QUFBOUIsOEJBQThCO0FBTzlCLFNBQWdCLFVBQVU7SUFDeEIsSUFBSSxHQUFHLENBQUMsYUFBYTtRQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkQsSUFBSSxHQUFHLENBQUMsY0FBYztRQUNwQix1Q0FBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlFLENBQUM7QUFKRCxnQ0FJQyJ9