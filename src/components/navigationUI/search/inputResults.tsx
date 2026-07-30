import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { GroupedSearchResult } from "@/types/navigation/types";

interface InputResultsProps {
  inputValue: string;
  onChange: (val: string) => void;
  onSearch: () => void;
  groupedResults: GroupedSearchResult[];
  hasSearched: boolean;
  onClose: () => void;
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightSnippet(snippet: string, searchTerm: string): React.ReactNode {
  const terms = searchTerm.split(/\s+/).filter(Boolean).map(escapeRegExp);
  if (terms.length === 0) return snippet;

  const pattern = new RegExp(`(${terms.join("|")})`, "gi");
  const parts = snippet.split(pattern);

  return parts.map((part, i) =>
    pattern.test(part) ? (
      <mark key={i} className="searchHighlight">{part}</mark>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

const InputResults: React.FC<InputResultsProps> = ({
  inputValue,
  onChange,
  onSearch,
  groupedResults,
  hasSearched,
  onClose
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
          ref={inputRef}
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
                      <Link
                        to={{
                          pathname: item.path,
                          search: `?highlight=${encodeURIComponent(inputValue)}`,
                        }}
                        onClick={onClose}
                      >
                        <strong>{item.name}</strong>{" "}
                        <span className="breadcrumbs">
                          ({item.breadcrumbs.join(" > ")})
                        </span>
                        {item.snippet && (
                          <p className="searchSnippet">
                            {highlightSnippet(item.snippet, inputValue)}
                          </p>
                        )}
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