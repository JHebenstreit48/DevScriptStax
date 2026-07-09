import { FaSearch } from "react-icons/fa";

interface SearchIconProps {
  onClick: () => void;
  isOpen?: boolean;
}

const SearchIcon: React.FC<SearchIconProps> = ({ onClick, isOpen }) => {
  return (
    <div className="searchIconContainer">
      <button
        className="searchIconButton"
        onClick={onClick}
        type="button"
        aria-label="Open Search"
        aria-haspopup="dialog"
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls="global-search-modal"
        title="Search"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchIcon;