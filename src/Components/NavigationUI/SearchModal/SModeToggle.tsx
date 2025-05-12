interface SModeToggleProps {
  searchMode: "instant" | "manual";
  onToggle: (mode: "instant" | "manual") => void;
  onReset: () => void;
}

const SModeToggle: React.FC<SModeToggleProps> = ({
  searchMode,
  onToggle,
  onReset
}) => (
  <div className="searchModeToggle">
    <label>
      <input
        type="radio"
        checked={searchMode === "instant"}
        onChange={() => onToggle("instant")}
      />
      Instant
    </label>
    <label>
      <input
        type="radio"
        checked={searchMode === "manual"}
        onChange={() => onToggle("manual")}
      />
      Manual
    </label>
    <button className="resetButton" onClick={onReset}>Reset</button>
  </div>
);

export default SModeToggle;
