import { React } from 'mailspring-exports';
import { EditableList, Flexbox } from 'mailspring-component-kit';

export class PluginsList extends React.Component {
  static displayName = 'PluginsList';
  createPlugin = () => {
    const { onCreatePlugin } = this.props;

    if (typeof onCreatePlugin !== 'function') return;
    onCreatePlugin();
  };
  showPluginDetails = () => {};

  render() {
    const { plugins = [] } = this.props;
    return (
      <Flexbox className={'pluginlist'}>
        <EditableList
          showEditIcon={false}
          items={plugins}
          onCreateItem={this.createPlugin}
          onSelectItem={this.showPluginDetails}
        />
      </Flexbox>
    );
  }
}
