import { React } from 'mailspring-exports';
import { Flexbox } from 'mailspring-component-kit';

export class ErrorPanel extends React.Component {
  static displayName = 'ErrorPanel';

  state = {
    value: '',
  };

  render() {
    const { icon = '🛑', label = 'Woops', description } = this.props;

    return (
      <Flexbox className="manager-errorpanel">
        <span className="manager-errorpanel__icon">{icon}</span>
        <span className="manager-errorpanel__label">{label}</span>
        <span className="manager-errorpanel__description">{description}</span>
      </Flexbox>
    );
  }
}
