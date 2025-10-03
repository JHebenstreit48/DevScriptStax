import { FaSearch } from "react-icons/fa";

interface SearchIconProps {
  onClick: () => void;
}

const SearchIcon: React.FC<SearchIconProps> = ({ onClick }) => {
  return (
    <div className="searchIconContainer">
      <button className="searchIconButton" onClick={onClick} aria-label="Open Search">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchIcon;