interface SHeaderProps {
    onClose: () => void;
  }
  
  const SHeader: React.FC<SHeaderProps> = ({ onClose }) => (
    <div className="searchModalHeader">
      <span>Search</span>
      <button onClick={onClose} className="closeButton">×</button>
    </div>
  );
  
  export default SHeader;