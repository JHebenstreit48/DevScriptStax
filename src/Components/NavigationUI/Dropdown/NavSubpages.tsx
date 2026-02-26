import React from "react";
import { NavLink } from "react-router-dom";
import type { Subpage } from "@/types/navigation";

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
        const isOpen = activeDropdown.has(key);

        return (
          <div key={key} className={`dropdownItem level-${level}`}>
            {sp.path ? (
              <NavLink
                to={sp.path}
                className={({ isActive }) =>
                  [
                    "dropdownButton",
                    `level-${level}`,
                    isActive ? "isCurrent" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                {sp.name}
              </NavLink>
            ) : (
              <>
                <button
                  type="button"
                  className={[
                    "dropdownButton",
                    `level-${level}`,
                    isOpen ? "active" : "",
                    "isGroup",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => toggleDropdown(key)}
                >
                  {sp.name}
                </button>

                {isOpen && sp.subpages && (
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