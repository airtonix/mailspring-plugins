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
      <Flexbox className="errorpanel">
        <span className="errorpanel__icon">{icon}</span>
        <span className="errorpanel__label">{label}</span>
        <span className="errorpanel__description">{description}</span>
      </Flexbox>
    );
  }
}
