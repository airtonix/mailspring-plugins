import { React } from 'mailspring-exports';
import { Flexbox, Spinner } from 'mailspring-component-kit';

import { NpmApiClient } from '../Services/Npm';

import { PluginSearch } from './PluginSearch';
import { PluginDetails } from './PluginDetails';
import { ErrorPanel } from './ErrorPanel';

export class PluginInstaller extends React.Component {
  static displayName = 'PluginInstaller';
  state = {
    error: null,
    results: [],
    searching: false,
    selected: null,
  };

  clearError = () => {
    this.setState({ error: null });
  };

  searchPackages = (query) => {
    if (!query || query.length === 0) {
      return;
    }
    this.setState({ searching: true });
    NpmApiClient.list({ query })
      .then(({ objects, total }) => {
        this.setState({
          error: (total === 0 && `No matching results for ${query}`) || null,
          searchResults: (total > 0 && objects) || null,
        });
        this.setState({ searching: false });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          searching: false,
        });
      });
  };

  handleCloseClick = () => {
    this.close();
  };

  close() {
    const { onClose } = this.props;
    if (typeof onClose === 'function') onClose();
  }

  render() {
    const { results, error, selected, searching } = this.state;

    return (
      <Flexbox className={'plugininstaller'}>
        <button
          className={'plugininstaller__close btn'}
          onClick={this.handleCloseClick}
        >
          Close...
        </button>
        <PluginSearch
          onKeyDown={this.clearError}
          onSearch={this.searchPackages}
        />
        {error && <ErrorPanel description={error} />}
        <Spinner visible={searching} />
        {selected && <PluginDetails />}
        {results && <pre>{JSON.stringify(results)}</pre>}
      </Flexbox>
    );
  }
}
