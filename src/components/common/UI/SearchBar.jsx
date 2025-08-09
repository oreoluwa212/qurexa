// src/components/common/UI/SearchBar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { HiSearch, HiX, HiFilter } from 'react-icons/hi';

export const SearchBar = ({
    placeholder = "Search...",
    value = "",
    onChange = () => { },
    onSearch = () => { },
    onClear = () => { },
    onFocus = () => { },
    onBlur = () => { },
    variant = 'default',
    size = 'md',
    fullWidth = false,
    showClearButton = true,
    showSearchIcon = true,
    showFilterButton = false,
    onFilterClick = () => { },
    disabled = false,
    loading = false,
    autoFocus = false,
    debounceMs = 300,
    className = '',
    ...props
}) => {
    const [internalValue, setInternalValue] = useState(value);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);
    const debounceRef = useRef(null);

    useEffect(() => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            onSearch(internalValue);
        }, debounceMs);

        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, [internalValue, onSearch, debounceMs]);

    useEffect(() => {
        setInternalValue(value);
    }, [value]);

    useEffect(() => {
        if (autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [autoFocus]);

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInternalValue(newValue);
        onChange(newValue);
    };

    const handleClear = () => {
        setInternalValue("");
        onChange("");
        onClear();
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleFocus = (e) => {
        setIsFocused(true);
        onFocus(e);
    };

    const handleBlur = (e) => {
        setIsFocused(false);
        onBlur(e);
    };

    const baseStyles = `
    relative flex items-center
    transition-all duration-200 ease-in-out
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

    const variants = {
        default: `
      bg-white border border-gray-300 rounded-lg
      ${isFocused ? 'border-pink-500 ring-2 ring-pink-500/20' : 'hover:border-gray-400'}
      ${disabled ? 'bg-gray-50' : ''}
    `,
        filled: `
      bg-gray-100 border border-transparent rounded-lg
      ${isFocused ? 'bg-white border-pink-500 ring-2 ring-pink-500/20' : 'hover:bg-gray-200'}
      ${disabled ? 'bg-gray-50' : ''}
    `,
        outlined: `
      bg-transparent border-2 border-gray-300 rounded-lg
      ${isFocused ? 'border-pink-500' : 'hover:border-gray-400'}
    `,
        rounded: `
      bg-white border border-gray-300 rounded-full
      ${isFocused ? 'border-pink-500 ring-2 ring-pink-500/20' : 'hover:border-gray-400'}
      ${disabled ? 'bg-gray-50' : ''}
    `
    };

    const sizes = {
        sm: 'h-9',
        md: 'h-10',
        lg: 'h-12',
        xl: 'h-14'
    };

    const inputSizes = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-2.5 text-sm',
        lg: 'px-5 py-3 text-base',
        xl: 'px-6 py-4 text-lg'
    };

    const iconSizes = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-5 h-5',
        xl: 'w-6 h-6'
    };

    const LoadingSpinner = () => (
        <svg
            className={`animate-spin ${iconSizes[size]} text-gray-400`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            />
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
        </svg>
    );

    const containerClasses = `
    ${baseStyles}
    ${variants[variant] || variants.default}
    ${sizes[size]}
  `.replace(/\s+/g, ' ').trim();

    const inputClasses = `
    flex-1 bg-transparent border-none outline-none
    ${inputSizes[size]}
    ${showSearchIcon ? 'pl-0' : ''}
    ${disabled ? 'cursor-not-allowed' : ''}
    placeholder-gray-400
  `;

    return (
        <div className={containerClasses}>
            {showSearchIcon && (
                <div className={`flex items-center justify-center px-3 ${disabled ? 'text-gray-400' : 'text-gray-500'}`}>
                    {loading ? <LoadingSpinner /> : <HiSearch className={iconSizes[size]} />}
                </div>
            )}

            <input
                ref={inputRef}
                type="text"
                value={internalValue}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={placeholder}
                disabled={disabled}
                className={inputClasses}
                {...props}
            />

            {showClearButton && internalValue && !loading && (
                <button
                    type="button"
                    onClick={handleClear}
                    className={`flex items-center justify-center px-2 text-gray-400 hover:text-gray-600 transition-colors ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                        }`}
                    disabled={disabled}
                >
                    <HiX className={iconSizes[size]} />
                </button>
            )}

            {showFilterButton && (
                <button
                    type="button"
                    onClick={onFilterClick}
                    className={`flex items-center justify-center px-3 text-gray-500 hover:text-gray-700 transition-colors border-l border-gray-200 ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                        }`}
                    disabled={disabled}
                >
                    <HiFilter className={iconSizes[size]} />
                </button>
            )}
        </div>
    );
};

export const BlogSearchBar = (props) => (
    <SearchBar
        variant="rounded"
        placeholder="Search articles..."
        showFilterButton={true}
        {...props}
    />
);

export const QuickSearchBar = (props) => (
    <SearchBar
        variant="filled"
        size="sm"
        {...props}
    />
);

export const FullSearchBar = (props) => (
    <SearchBar
        variant="outlined"
        size="lg"
        fullWidth
        {...props}
    />
);
