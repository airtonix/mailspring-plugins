import { React } from 'mailspring-exports';
import debounce from 'lodash/debounce';

export class PluginSearch extends React.Component {
  state = {
    value: '',
  };
  handleSearchChange = (event) => {
    if (!event) return;
    const value = event.target.value;
    this.setState({ value });
    this.debouncedSearch({ value });
  };

  handleSearch = ({ value }) => {
    const { onSearch } = this.props;
    if (typeof onSearch === 'function') onSearch(value);
  };

  debouncedSearch = debounce(this.handleSearch, 1000);

  render() {
    const { value } = this.state;
    return (
      <div className={'PluginSearch'}>
        <input onChange={this.handleSearchChange} value={value} />
      </div>
    );
  }
}

PluginSearch.displayName = 'PluginSearch';
