import { React } from 'mailspring-exports';

import { NpmApiClient } from '../Services/Npm';
import { PluginSearch } from '../Components/PluginSearch';
import { PluginDetails } from '../Components/PluginDetails';

export class PluginInstaller extends React.Component {
  static displayName = 'PluginInstaller';
  state = {
    error: null,
    results: [],
    selected: null,
  };

  searchPackages = (query) => {
    NpmApiClient.list({ query })
      .then(({ objects, total }) => {
        this.setState({
          error: (total === 0 && `No matching results for ${query}`) || null,
          searchResults: (total > 0 && objects) || null,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  };

  render() {
    const { results, error, selected } = this.state;

    return (
      <div className={'plugininstaller'}>
        {error && <pre>{error}</pre>}
        <PluginSearch onSearch={this.searchPackages} />
        {selected && <PluginDetails />}
        {results && <pre>{JSON.stringify(results)}</pre>}
      </div>
    );
  }
}
