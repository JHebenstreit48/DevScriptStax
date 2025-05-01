import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "@/SCSS/SharedStyles/NavigationStyles/SearchModal.scss";

interface SearchModalProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  results: { name: string; path: string; breadcrumbs: string[] }[];
  searchMode: "instant" | "manual";
  setSearchMode: (mode: "instant" | "manual") => void;
  onSearch: (value: string) => void;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({
  searchTerm,
  setSearchTerm,
  results,
  searchMode,
  setSearchMode,
  onSearch,
  onClose,
}) => {
  const [inputValue, setInputValue] = useState(searchTerm);
  const [hasSearched, setHasSearched] = useState(!!searchTerm);

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (searchMode === "instant" && inputValue.trim()) {
      const delay = setTimeout(() => {
        onSearch(inputValue);
        setHasSearched(true);
      }, 300);
      return () => clearTimeout(delay);
    }
  }, [inputValue, searchMode, onSearch]);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (searchMode === "manual") setHasSearched(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchMode === "manual" && e.key === "Enter") {
      onSearch(inputValue);
      setHasSearched(true);
    }
  };

  const handleToggle = (mode: "instant" | "manual") => {
    setSearchMode(mode);
    localStorage.setItem("searchMode", mode);
  };

  const handleClearLocal = () => {
    localStorage.removeItem("lastSearchTerm");
    localStorage.removeItem("lastSearchResults");
    setSearchTerm("");
    setInputValue("");
    setHasSearched(false);
  };

  return ReactDOM.createPortal(
    <div className="searchModal">
      <div className="searchModalContent">
        <div className="searchModalHeader">
          <span>Search</span>
          <button onClick={onClose} className="closeButton">×</button>
        </div>

        <div className="searchControls">
          <div className="inputWithClear">
            <input
              type="text"
              placeholder="Type to search..."
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="filterInput"
            />
            {inputValue && (
              <button
                className="clearButton"
                onClick={() => {
                  setInputValue("");
                  setSearchTerm("");
                  setHasSearched(false);
                }}
              >
                ×
              </button>
            )}
          </div>

          <div className="searchModeToggle">
            <label>
              <input
                type="radio"
                checked={searchMode === "instant"}
                onChange={() => handleToggle("instant")}
              />
              Instant
            </label>
            <label>
              <input
                type="radio"
                checked={searchMode === "manual"}
                onChange={() => handleToggle("manual")}
              />
              Manual
            </label>
            <button className="resetButton" onClick={handleClearLocal}>
              Reset
            </button>
          </div>
        </div>

        {hasSearched ? (
          results.length === 0 ? (
            <div className="searchResultEmpty">No results found.</div>
          ) : (
            <ul>
              {results.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} onClick={onClose}>
                    <strong>{item.name}</strong>{" "}
                    <span className="breadcrumbs">
                      ({item.breadcrumbs.join(" > ")})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )
        ) : null}
      </div>
    </div>,
    document.body
  );
};

export default SearchModal;
