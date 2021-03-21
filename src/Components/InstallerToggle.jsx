import { React } from 'mailspring-exports';

export function InstallerToggle({ onClick = () => {} }) {
  return (
    <button className="installer-toggle btn btn-large" onClick={onClick}>
      Add Plugin...
    </button>
  );
}
