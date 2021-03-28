const pkg = require('../package.json');

export async function activate() {
  console.log(`${pkg.name} activated`);
}
export function serialize() {
  console.log(`${pkg.name} serialized`);
}
export function deactivate() {
  console.log(`${pkg.name} deactivated`);
}
