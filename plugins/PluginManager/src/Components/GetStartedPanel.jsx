import { React } from 'mailspring-exports';
import { Flexbox, RetinaImg, Spinner } from 'mailspring-component-kit';

export class GetStartedPanel extends React.Component {
  static displayName = 'GetStartedPanel';

  handleSearchClick = () => {
    const { onSearchClick } = this.props;
    if (typeof onSearchClick === 'function') onSearchClick()
  }

  render() {
    return (
        <div className={'manager-getstartedpanel'}>
            <span className={'manager-getstartedpanel__img fa fa-bath'} />
            <h2 className={'manager-getstartedpanel__title'}>No Plugins Installed</h2>
            <p className={'manager-getstartedpanel__subtitle'}>Get started by looking for some plugins.</p>
            <button className={'manager-getstartedpanel__search-button btn btn-large'}
            onClick={this.handleSearchClick}>
              <span className={'manager-getstartedpanel__search-icon fa fa-search'}/>
              Find some plugins...
            </button>
        </div>
    );
  }
}
