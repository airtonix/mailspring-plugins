"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.serialize = exports.activate = void 0;
const mailspring_exports_1 = require("mailspring-exports");
const CommandPalette_1 = require("./CommandPalette");
// Activate is called when the package is loaded. If your package previously
// saved state using `serialize` it is provided.
//
console.log(mailspring_exports_1.WorkspaceStore.Location.ThreadList);
function activate() {
    mailspring_exports_1.ComponentRegistry.register(CommandPalette_1.CommandPalette, {
        location: 'Sheet:Global:Header',
    });
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
    mailspring_exports_1.ComponentRegistry.unregister(CommandPalette_1.CommandPalette);
}
exports.deactivate = deactivate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUF1RTtBQUN2RSxxREFBaUQ7QUFFakQsNEVBQTRFO0FBQzVFLGdEQUFnRDtBQUNoRCxFQUFFO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUMvQyxTQUFnQixRQUFRO0lBQ3RCLHNDQUFpQixDQUFDLFFBQVEsQ0FBQywrQkFBYyxFQUFFO1FBQ3pDLFFBQVEsRUFBRSxxQkFBcUI7S0FDaEMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUpELDRCQUlDO0FBRUQsa0VBQWtFO0FBQ2xFLHlFQUF5RTtBQUN6RSwyQkFBMkI7QUFDM0IsRUFBRTtBQUNGLFNBQWdCLFNBQVMsS0FBSSxDQUFDO0FBQTlCLDhCQUE4QjtBQUU5Qix1RUFBdUU7QUFDdkUsd0VBQXdFO0FBQ3hFLHdFQUF3RTtBQUN4RSw0Q0FBNEM7QUFDNUMsRUFBRTtBQUNGLFNBQWdCLFVBQVU7SUFDeEIsc0NBQWlCLENBQUMsVUFBVSxDQUFDLCtCQUFjLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRkQsZ0NBRUMifQ==