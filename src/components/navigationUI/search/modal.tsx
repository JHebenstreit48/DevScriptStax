import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SHeader from '@/components/navigationUI/search/sHeader';
import SModeToggle from '@/components/navigationUI/search/sModeToggle';
import InputResults from '@/components/navigationUI/search/inputResults';
import { filterResults } from '@/utils/navigation/search/filterResults';
import { GroupedSearchResult, SearchMatch } from '@/types/navigation/types';

interface SearchModalProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  allPages: SearchMatch[];
  searchMode: "instant" | "manual";
  setSearchMode: (mode: "instant" | "manual") => void;
  onClose: () => void;
}

const Modal: React.FC<SearchModalProps> = ({
  searchTerm,
  setSearchTerm,
  allPages,
  searchMode,
  setSearchMode,
  onClose,
}) => {
  const [inputValue, setInputValue] = useState(searchTerm);
  const [hasSearched, setHasSearched] = useState(!!searchTerm);
  const [groupedResults, setGroupedResults] = useState<GroupedSearchResult[]>([]);

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (searchMode === "instant" && inputValue.trim()) {
      const delay = setTimeout(() => {
        const filtered = filterResults(allPages, inputValue);
        setGroupedResults(filtered);
        setHasSearched(true);
      }, 300);
      return () => clearTimeout(delay);
    }
  }, [inputValue, searchMode, allPages]);

  const handleSearch = () => {
    const filtered = filterResults(allPages, inputValue);
    setGroupedResults(filtered);
    setHasSearched(true);
    setSearchTerm(inputValue);
  };

  const handleClear = () => {
    localStorage.removeItem("lastSearchTerm");
    localStorage.removeItem("lastSearchResults");
    setSearchTerm("");
    setInputValue("");
    setGroupedResults([]);
    setHasSearched(false);
  };

  return ReactDOM.createPortal(
    <div
      className="searchModal"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      id="global-search-modal"
    >
      <div className="searchModalContent">
        <SHeader onClose={onClose} />
        <div className="searchControls">
          <InputResults
            inputValue={inputValue}
            onChange={setInputValue}
            onSearch={handleSearch}
            hasSearched={hasSearched}
            groupedResults={groupedResults}
            onClose={onClose}
          />
          <SModeToggle
            searchMode={searchMode}
            onToggle={setSearchMode}
            onReset={handleClear}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;