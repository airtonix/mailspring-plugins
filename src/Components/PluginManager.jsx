import { React } from 'mailspring-exports';
import { Flexbox } from 'mailspring-component-kit';

import { InstallerToggle } from './InstallerToggle';
import { PluginsList } from './PluginsList';
import { PluginInstaller } from './PluginInstaller';

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
      <section className="pluginmanager">
        <Flexbox direction="column" className="pluginmanager__container">
          <InstallerToggle onClick={this.toggleInstaller} />
          <PluginsList plugins={installed} />
          {installerOpen && <PluginInstaller />}
        </Flexbox>
      </section>
    );
  }
}

export function PluginManagerFactory({ service }) {
  return () => <PluginManager service={service} />;
}
