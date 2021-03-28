import { React } from 'mailspring-exports';

import { PluginsList } from './PluginsList';
import { PluginInstaller } from './PluginInstaller';
import { GetStartedPanel } from './GetStartedPanel';

export class PluginManager extends React.Component {
  static displayName = 'PluginManager';
  state = {
    installed: [],
    installerOpen: false,
  };

  constructor(props) {
    super(props);
    this.state = this.getStateFromStores({});
  }

  componentDidMount() {
    // this.unsubscribe = AccountStore.listen(this._onAccountsChanged);
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  get hasPlugins () {
    const { installed } = this.state;
    return installed && Array.isArray(installed) && installed.length > 0;
  }

  getStateFromStores({ selected = null } = {}) {
    return {
      selected,
    };
  }

  toggleInstaller = () =>
    this.setState({ installerOpen: !this.state.installerOpen });

  render() {
    const { installed, installerOpen } = this.state;
    return (
      <section className="manager-pluginmanager">
        <div className="manager-pluginmanager__container">
          {!installerOpen && this.hasPlugins && (
            <PluginsList
              plugins={installed}
              onCreatePlugin={this.toggleInstaller}
            />
          )}
          {!this.hasPlugins && (<GetStartedPanel onSearchClick={this.toggleInstaller} />)}
          {installerOpen && <PluginInstaller onClose={this.toggleInstaller} />}
        </div>
      </section>
    );
  }
}

export function PluginManagerFactory({ service }) {
  return () => <PluginManager service={service} />;
}
