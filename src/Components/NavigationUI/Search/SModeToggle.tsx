interface SModeToggleProps {
  searchMode: "instant" | "manual";
  onToggle: (mode: "instant" | "manual") => void;
  onReset: () => void;
}

const SModeToggle: React.FC<SModeToggleProps> = ({ searchMode, onToggle, onReset }) => (
  <div className="searchModeRow">
    <div className="segmented" role="group" aria-label="Search mode">
      <button
        type="button"
        className={searchMode === "instant" ? "segBtn active" : "segBtn"}
        onClick={() => onToggle("instant")}
      >
        Instant
      </button>
      <button
        type="button"
        className={searchMode === "manual" ? "segBtn active" : "segBtn"}
        onClick={() => onToggle("manual")}
      >
        Manual
      </button>
    </div>

    <button className="resetButton" onClick={onReset} type="button">
      Reset
    </button>
  </div>
);

export default SModeToggle;