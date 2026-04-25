import { useState, useRef, useEffect } from 'react';
import './DownSelect.css';

/**
 * Замена нативного select: список всегда открывается вниз (под полем).
 * options: { value: string, label: string }[]
 */
function DownSelect({
  id,
  className = '',
  value,
  onChange,
  options,
  disabled = false,
  ariaLabel,
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const listId = id ? `${id}-listbox` : undefined;

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const current =
    options.find((o) => String(o.value) === String(value)) ?? options[0];
  const display = current?.label ?? '';

  const triggerClass = `down-select__trigger ${className}`.trim();

  return (
    <div className="down-select" ref={rootRef}>
      <button
        type="button"
        id={id}
        className={triggerClass}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={ariaLabel}
        onClick={() => {
          if (!disabled) setOpen((o) => !o);
        }}
      >
        <span className="down-select__value">{display}</span>
      </button>
      {open && !disabled && (
        <ul id={listId} className="down-select__list" role="listbox">
          {options.map((opt, idx) => (
            <li
              key={`${String(opt.value)}-${idx}`}
              role="option"
              aria-selected={String(opt.value) === String(value)}
              className={
                String(opt.value) === String(value)
                  ? 'down-select__option down-select__option--active'
                  : 'down-select__option'
              }
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                onChange(String(opt.value));
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DownSelect;
