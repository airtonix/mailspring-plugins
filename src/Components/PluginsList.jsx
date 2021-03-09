import { EditableList } from 'mailspring-component-kit';
import { React } from 'mailspring-exports';

export class PluginsList extends React.Component {
  static displayName = 'PluginsList';

  render() {
    return (
      <div className={'pluginlist'}>
        <EditableList />
      </div>
    );
  }
}
