import React, { useState, useEffect, useRef, ChangeEvent } from 'react';

interface Props {
  options: string[];
  updatePairValue: Function;
}

const Dropdown: React.FC<Props> = ({ options, updatePairValue }) => {
  const shortedOptionsList = options.slice(0, 10);

  const [filteredOptions, setFilteredOptions] =
    useState<string[]>(shortedOptionsList);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string | null>(null);

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
      const endIndex = startIndex + 10;
      const newOptions = options.slice(startIndex, endIndex);
      setFilteredOptions([...filteredOptions, ...newOptions]);
      setHasMore(endIndex < options.length);
      setIsLoading(false);
    }, 300);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputVal = event.target.value;
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredOptions(filtered.slice(0, 10));
    setHasMore(filtered.length > 10);
    setSelectedOption(null);
    setIsDropdownOpen(true);
    setInputValue(inputVal);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    updatePairValue(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-56 px-4 py-3 font-thin duration-100 rounded shadow focus:outline-none focus:shadow-lg focus:shadow-slate-200 shadow-gray-100"
        onChange={handleInputChange}
        value={selectedOption || inputValue?.toUpperCase()}
        onClick={() => setIsDropdownOpen(true)}
      />
      {isDropdownOpen && (
        <ul
          className="absolute w-56 overflow-y-auto bg-white border border-gray-300 shadow-lg top-10 rounded-b-md max-h-56"
          ref={dropdownRef}
        >
          {filteredOptions.map((option) => (
            <li
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
          {isLoading && (
            <li className="px-4 py-2 opacity-50 cursor-not-allowed">
              Loading...
            </li>
          )}
          {!isLoading && hasMore && (
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={loadMoreOptions}
            >
              Load more
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
