interface SearchPillProps {
  onClick: () => void;
}

const SearchPill: React.FC<SearchPillProps> = ({ onClick }) => {
  return (
    <button
      className="searchPill"
      type="button"
      onClick={onClick}
      aria-label="Open Search"
      title="Search"
    >
      <span className="searchPillIcon" aria-hidden="true">⌕</span>
      <span className="searchPillText">Search…</span>
    </button>
  );
};

export default SearchPill;