interface SHeaderProps {
  onClose: () => void;
}

const SHeader: React.FC<SHeaderProps> = ({ onClose }) => (
  <div className="searchModalHeader">
    <span>Search</span>
    <button
      onClick={onClose}
      className="closeButton"
      type="button"
      aria-label="Close Search"
      title="Close"
    >
      ×
    </button>
  </div>
);

export default SHeader;