import { React } from 'mailspring-exports';

import { PluginSummary } from './PluginSummary';

export class PluginsList extends React.Component {
  static displayName = 'PluginsList';

  render() {
    const { plugins = [] } = this.props;
    return (
      <div className={'pluginlist'}>
        {plugins.map((plugin) => (
          <PluginSummary plugin={plugin} />
        ))}
      </div>
    );
  }
}
