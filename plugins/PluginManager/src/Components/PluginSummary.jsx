import { React } from 'mailspring-exports';

export class PluginSummary extends React.Component {
  static displayName = 'PluginSummary';

  render() {
    const { plugin } = this.props;
    return (
      <div className={'manager-pluginsummary'}>
        <h3>{plugin.name}</h3>
      </div>
    );
  }
}
