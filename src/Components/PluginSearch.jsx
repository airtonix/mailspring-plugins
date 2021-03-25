import { React } from 'mailspring-exports';
import { Flexbox } from 'mailspring-component-kit';
import debounce from 'lodash/debounce';

export class PluginSearch extends React.Component {
  state = {
    value: '',
  };
  handleSearchChange = (event) => {
    if (!event) return;

    const { onKeyDown } = this.props;
    if (typeof onKeyDown === 'function') onKeyDown();

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
      <Flexbox className={'pluginsearch'}>
        <input
          className={'pluginsearch__input'}
          onChange={this.handleSearchChange}
          value={value}
        />
      </Flexbox>
    );
  }
}

PluginSearch.displayName = 'PluginSearch';
