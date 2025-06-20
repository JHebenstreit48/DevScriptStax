import React from "react";
import { Link } from "react-router-dom";
import { GroupedSearchResult } from "@/Components/NavigationUI/Search/Utils/types";

interface InputResultsProps {
  inputValue: string;
  onChange: (val: string) => void;
  onSearch: () => void;
  groupedResults: GroupedSearchResult[];
  hasSearched: boolean;
  onClose: () => void;
}

const InputResults: React.FC<InputResultsProps> = ({
  inputValue,
  onChange,
  onSearch,
  groupedResults,
  hasSearched,
  onClose
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <>
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
          <button className="clearButton" onClick={() => onChange("")}>×</button>
        )}
      </div>

      {hasSearched && (
        groupedResults.length === 0 ? (
          <div className="searchResultEmpty">No results found.</div>
        ) : (
          <div className="groupedResults">
            {groupedResults.map((group, i) => (
              <div key={i}>
                <h4 className="groupHeading">{group.section}</h4>
                <ul>
                  {group.matches.map((item, idx) => (
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
              </div>
            ))}
          </div>
        )
      )}
    </>
  );
};

export default InputResults;
