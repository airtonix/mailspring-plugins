import { React } from 'mailspring-exports';

import { PluginsList } from './PluginsList';
import { PluginDetails } from './PluginDetails';

export class PluginManager extends React.Component {
  static displayName = 'PluginManager';

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

  render() {
    return (
      <section className="pluginmanager">
        <div className="pluginmanager__container">
          <PluginsList />
          <PluginDetails />
        </div>
      </section>
    );
  }
}

export function PluginManagerFactory({ service }) {
  return () => <PluginManager service={service} />;
}
