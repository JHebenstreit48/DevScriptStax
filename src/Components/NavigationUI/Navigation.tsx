import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import pages from '@/domain/navigation/mainTabs';
import { flattenNavigation } from '@/Components/NavigationUI/Search/Utils/flattenNavigation';
import type { SearchMatch } from '@/Components/NavigationUI/Search/Utils/types';

import SearchIcon from '@/Components/NavigationUI/Search/SearchIcon';
import SearchModal from '@/Components/NavigationUI/Search/Modal';
import NavSubpages from '@/Components/NavigationUI/Dropdown/NavSubpages';

import { useNavDropdown } from '@/hooks/navigation/useNavDropdown';
import { useClickOutside } from '@/hooks/ui/useClickOutside';
import { useLocalStorageState } from '@/hooks/storage/useLocalStorageState';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [searchMode, setSearchMode] = useLocalStorageState<'instant' | 'manual'>('searchMode', 'instant', {
    serialize: (v) => v,
    deserialize: (raw) => (raw === 'manual' ? 'manual' : 'instant'),
  });

  const navRef = useRef<HTMLDivElement | null>(null);
  const { activeDropdown, toggleDropdown, closeAll } = useNavDropdown();

  useEffect(() => {
    const savedTerm = localStorage.getItem('lastSearchTerm') || '';
    if (savedTerm) setSearchTerm(savedTerm);
  }, []);

  useClickOutside(navRef, closeAll);

  const allPages: SearchMatch[] = useMemo(() => flattenNavigation(pages), []);

  return (
    <div
      className="navigationMenu"
      ref={navRef}
    >
      <SearchIcon onClick={() => setShowModal(true)} />
      <button
        className="hamburgerButton"
        onClick={() => setIsMenuOpen((p) => !p)}
        type="button"
      >
        ☰
      </button>

      <div className={`navigationContent ${isMenuOpen ? 'open' : ''}`}>
        

        {showModal && (
          <SearchModal
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            allPages={allPages}
            searchMode={searchMode}
            setSearchMode={setSearchMode}
            onClose={() => {
              setSearchTerm('');
              setShowModal(false);
            }}
          />
        )}

        <nav className="mainNav">
          {pages.map((page, index) => {
            const pageKey = `page-${index}`;
            const isActive = activeDropdown.has(pageKey);

            return (
              <div
                key={pageKey}
                className="dropdown"
              >
                {!page.subpages?.length ? (
                  <Link
                    to="/"
                    className="dropdownButton level-1"
                  >
                    {page.name}
                  </Link>
                ) : (
                  <>
                    <button
                      className={`dropdownButton level-1 ${isActive ? 'active' : ''}`}
                      onClick={() => toggleDropdown(pageKey)}
                      type="button"
                    >
                      {page.name}
                    </button>

                    {isActive && (
                      <div className="dropdownContent active">
                        <NavSubpages
                          subpages={page.subpages}
                          parentKey={pageKey}
                          level={2}
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
        </nav>
      </div>
    </div>
  );
};

export default Navigation;