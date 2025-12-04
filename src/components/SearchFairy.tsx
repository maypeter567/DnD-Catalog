import { useEffect, useMemo, useState } from "react";

import { sectionDefinitions, type TabId } from "../data/sections";

type SearchFairyProps = {
  onNavigate: (tab: TabId) => void;
};

type SearchResult = {
  title: string;
  description: string;
  section: string;
  tabId: TabId;
  key: string;
};

const flattenEntries = (): SearchResult[] => {
  return sectionDefinitions.flatMap((section) => {
    if (!section.entries) return [];
    return section.entries.map((entry, index) => ({
      title: entry.title,
      description: entry.description,
      section: section.label,
      tabId: section.id,
      key: `${section.id}-${entry.title}-${index}`,
    }));
  });
};

const catalogEntries = flattenEntries();

export default function SearchFairy({ onNavigate }: SearchFairyProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];
    return catalogEntries.filter(
      (entry) =>
        entry.title.toLowerCase().includes(trimmed) ||
        entry.description.toLowerCase().includes(trimmed)
    );
  }, [query]);

  const closeModal = () => {
    setIsOpen(false);
    setQuery("");
  };

  const handleNavigate = (tabId: TabId) => {
    onNavigate(tabId);
    closeModal();
  };

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <div className="fairy-search">
      <button
        type="button"
        className="fairy-button"
        onClick={() => setIsOpen(true)}
      >
        <span className="fairy-icon" role="img" aria-hidden="true">
          🧚
        </span>
        <span>Ask the Fairy for help finding things</span>
      </button>
      {isOpen && (
        <div
          className="fairy-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Fairy search"
          onClick={closeModal}
        >
          <div
            className="fairy-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={closeModal}
              aria-label="Close search"
            >
              ×
            </button>
            <h3>Ask the Fairy a Question</h3>
            <p className="fairy-helper">
              She will lead you to the page you seek.
            </p>
            <input
              type="search"
              autoFocus
              placeholder="What knowledge do you seek?"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <div className="fairy-results">
              {!query.trim() && <p>Whisper a topic above to begin.</p>}
              {query.trim() && results.length === 0 && (
                <p>No results yet. Try a different question.</p>
              )}
              {results.length > 0 && (
                <ul>
                  {results.map((result) => (
                    <li key={result.key}>
                      <button
                        type="button"
                        onClick={() => handleNavigate(result.tabId)}
                      >
                        <strong>{result.title}</strong>
                        <small>{result.section}</small>
                        <p>{result.description}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
