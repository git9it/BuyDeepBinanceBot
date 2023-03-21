import React, { useState, useEffect, useRef, ChangeEvent } from 'react';

interface Props {
  options: string[];
}

const Dropdown: React.FC<Props> = ({ options }) => {
  const [filteredOptions, setFilteredOptions] = useState<string[]>(
    options.slice(0, 20)
  );
  const [hasMore, setHasMore] = useState<boolean>(options.length > 20);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        dropdownRef.current &&
        dropdownRef.current.scrollHeight - dropdownRef.current.scrollTop ===
          dropdownRef.current.clientHeight
      ) {
        loadMoreOptions();
      }
    };

    if (dropdownRef.current) {
      dropdownRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (dropdownRef.current) {
        dropdownRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [filteredOptions]);

  const loadMoreOptions = () => {
    if (isLoading || !hasMore) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const startIndex = filteredOptions.length;
      const endIndex = startIndex + 20;
      const newOptions = options.slice(startIndex, endIndex);
      setFilteredOptions([...filteredOptions, ...newOptions]);
      setHasMore(endIndex < options.length);
      setIsLoading(false);
    }, 500);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredOptions(filtered.slice(0, 20));
    setHasMore(filtered.length > 20);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        onChange={handleInputChange}
      />
      <ul
        className="absolute left-0 right-0 z-10 overflow-y-auto bg-white border border-gray-300 top-full rounded-b-md max-h-56"
        ref={dropdownRef}
      >
        {filteredOptions.map((option) => (
          <li
            key={option}
            className="px-3 py-2 cursor-pointer hover:bg-gray-100"
          >
            {option}
          </li>
        ))}
        {isLoading && (
          <li className="px-3 py-2 opacity-50 cursor-not-allowed">
            Loading...
          </li>
        )}
        {!isLoading && hasMore && (
          <li
            className="px-3 py-2 cursor-pointer hover:bg-gray-100"
            onClick={loadMoreOptions}
          >
            Load more
          </li>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
