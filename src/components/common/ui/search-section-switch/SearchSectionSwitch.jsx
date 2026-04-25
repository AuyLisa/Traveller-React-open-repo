import { useLocation, useNavigate } from 'react-router-dom';
import './SearchSectionSwitch.css';

const SECTIONS = [
  { id: 'recommendations', label: 'Рекомендации', to: '/', match: (p) => p === '/' },
  { id: 'trips', label: 'Туры', to: '/trips', match: (p) => p.startsWith('/trips') },
  { id: 'avia', label: 'Авиабилеты', to: '/avia', match: (p) => p.startsWith('/avia') },
  { id: 'hotels', label: 'Отели', to: '/hotels', match: (p) => p.startsWith('/hotels') },
];

function getActiveSectionId(pathname) {
  const found = SECTIONS.find((s) => s.match(pathname));
  return found?.id ?? 'recommendations';
}

function SearchSectionSwitch({ className = '' }) {
  const navigate = useNavigate();
  const location = useLocation();
  const activeId = getActiveSectionId(location.pathname);

  return (
    <div className={`section-switch ${className}`.trim()}>
      <div className="section-switch__group" role="tablist" aria-label="Категория поиска">
        {SECTIONS.map((s) => {
          const isActive = s.id === activeId;
          return (
            <button
              key={s.id}
              type="button"
              className={`section-switch__tab ${isActive ? 'section-switch__tab--active' : ''}`.trim()}
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                if (!isActive) navigate(s.to);
              }}
            >
              {s.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SearchSectionSwitch;
