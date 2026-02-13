import { Search, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function SearchBar({ 
  onSearch, 
  placeholder = "ابحث بالاسم أو رقم التحويل..." 
}: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");

  const debouncedSearch = useCallback(
    (value: string) => {
      onSearch(value);
    },
    [onSearch]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedSearch(inputValue);
    }, 150);

    return () => clearTimeout(timer);
  }, [inputValue, debouncedSearch]);

  const handleClear = () => {
    setInputValue("");
    onSearch("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      handleClear();
    }
  };

  return (
    <div className="w-full px-4 py-4 sm:px-6">
      <div className="glass-input relative flex items-center">
        <Search className="absolute right-4 h-5 w-5 text-white/40" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full bg-transparent py-3.5 pr-12 pl-12 text-right text-white/90 placeholder:text-white/40 focus:outline-none"
          dir="rtl"
        />
        {inputValue && (
          <button
            onClick={handleClear}
            className="absolute left-4 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/50 transition-colors hover:bg-white/20 hover:text-white/80"
            aria-label="مسح البحث"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
