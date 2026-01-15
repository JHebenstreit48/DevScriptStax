import React from "react";
import { Link } from "react-router-dom";
import type { Subpage } from '@/types/navigation';



interface NavSubpagesProps {
  subpages: Subpage[];
  parentKey: string;
  level?: number;
  activeDropdown: Set<string>;
  toggleDropdown: (key: string) => void;
}

const NavSubpages: React.FC<NavSubpagesProps> = ({
  subpages,
  parentKey,
  level = 1,
  activeDropdown,
  toggleDropdown,
}) => {
  return (
    <>
      {subpages.map((sp, index) => {
        const key = `${parentKey}-${index}`;
        const isActive = activeDropdown.has(key);

        return (
          <div key={key} className={`dropdownItem level-${level}`}>
            {sp.path ? (
              <Link to={sp.path} className={`dropdownButton level-${level}`}>
                {sp.name}
              </Link>
            ) : (
              <>
                <div
                  className={`dropdownButton level-${level} ${isActive ? "active" : ""}`}
                  onClick={() => toggleDropdown(key)}
                >
                  {sp.name}
                </div>

                {isActive && sp.subpages && (
                  <div className="dropdownMenu active">
                    <NavSubpages
                      subpages={sp.subpages}
                      parentKey={key}
                      level={level + 1}
                      activeDropdown={activeDropdown}
                      toggleDropdown={toggleDropdown}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default NavSubpages;