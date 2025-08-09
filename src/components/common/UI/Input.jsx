import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { HiEye, HiEyeOff, HiX, HiExclamationCircle, HiCheck, HiSearch } from 'react-icons/hi';

export const Input = forwardRef(({
    type = 'text',
    label = '',
    placeholder = '',
    value = '',
    onChange = () => { },
    onFocus = () => { },
    onBlur = () => { },
    onKeyDown = () => { },
    variant = 'default',
    size = 'md',
    fullWidth = true,
    disabled = false,
    readOnly = false,
    required = false,
    error = '',
    success = false,
    helperText = '',
    showClearButton = false,
    autoFocus = false,
    maxLength,
    minLength,
    pattern,
    id,
    name,
    className = '',
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    leftElement,
    rightElement,
    ...props
}, ref) => {
    const [internalValue, setInternalValue] = useState(value);
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef(null);

    const finalRef = ref || inputRef;

    useEffect(() => {
        setInternalValue(value);
    }, [value]);

    useEffect(() => {
        if (autoFocus && finalRef.current) {
            finalRef.current.focus();
        }
    }, [autoFocus, finalRef]);

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInternalValue(newValue);
        onChange(newValue, e);
    };

    const handleFocus = (e) => {
        setIsFocused(true);
        onFocus(e);
    };

    const handleBlur = (e) => {
        setIsFocused(false);
        onBlur(e);
    };

    const handleClear = () => {
        setInternalValue('');
        onChange('');
        if (finalRef.current) {
            finalRef.current.focus();
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const inputType = type === 'password' && showPassword ? 'text' : type;

    const baseStyles = `
        relative flex items-center transition-all duration-200 ease-in-out
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `;

    const variants = {
        default: `
            bg-white border border-gray-300 rounded-lg
            ${isFocused ? 'border-pink-500 ring-2 ring-pink-500/20' : 'hover:border-gray-400'}
            ${error ? 'border-red-500 ring-2 ring-red-500/20' : ''}
            ${success ? 'border-green-500 ring-2 ring-green-500/20' : ''}
            ${disabled ? 'bg-gray-50 border-gray-200' : ''}
        `,
        filled: `
            bg-gray-100 border border-transparent rounded-lg
            ${isFocused ? 'bg-white border-pink-500 ring-2 ring-pink-500/20' : 'hover:bg-gray-200'}
            ${error ? 'bg-red-50 border-red-500 ring-2 ring-red-500/20' : ''}
            ${success ? 'bg-green-50 border-green-500 ring-2 ring-green-500/20' : ''}
            ${disabled ? 'bg-gray-50 border-gray-200' : ''}
        `,
        outlined: `
            bg-transparent border-2 border-gray-300 rounded-full
            ${isFocused ? 'border-pink-500' : 'hover:border-gray-400'}
            ${error ? 'border-red-500' : ''}
            ${success ? 'border-green-500' : ''}
            ${disabled ? 'border-gray-200' : ''}
        `,
        rounded: `
            bg-white border border-gray-300 rounded-full
            ${isFocused ? 'border-pink-500 ring-2 ring-pink-500/20' : 'hover:border-gray-400'}
            ${error ? 'border-red-500 ring-2 ring-red-500/20' : ''}
            ${success ? 'border-green-500 ring-2 ring-green-500/20' : ''}
            ${disabled ? 'bg-gray-50 border-gray-200' : ''}
        `,
        minimal: `
            bg-transparent border-0 border-b-2 border-gray-300 rounded-none
            ${isFocused ? 'border-pink-500' : 'hover:border-gray-400'}
            ${error ? 'border-red-500' : ''}
            ${success ? 'border-green-500' : ''}
        `
    };

    const sizes = {
        xs: 'h-8',
        sm: 'h-9',
        md: 'h-10',
        lg: 'h-12',
        xl: 'h-14'
    };

    const inputSizes = {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-2.5 text-sm',
        lg: 'px-5 py-3 text-base',
        xl: 'px-6 py-4 text-lg'
    };

    const iconSizes = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-5 h-5',
        xl: 'w-6 h-6'
    };

    const labelSizes = {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-sm',
        lg: 'text-base',
        xl: 'text-lg'
    };

    const helperSizes = {
        xs: 'text-xs',
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-sm',
        xl: 'text-base'
    };

    const containerClasses = `
        ${baseStyles}
        ${variants[variant] || variants.default}
        ${sizes[size]}
        ${className}
    `.replace(/\s+/g, ' ').trim();

    const inputClasses = `
        flex-1 bg-transparent border-none outline-none
        ${inputSizes[size]}
        ${disabled || readOnly ? 'cursor-not-allowed' : ''}
        placeholder-gray-400
        ${LeftIcon || leftElement ? 'pl-0' : ''}
        ${(RightIcon || rightElement || showClearButton || type === 'password') ? 'pr-0' : ''}
    `;

    const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className="space-y-1">
            {label && (
                <label
                    htmlFor={inputId}
                    className={`block font-medium text-gray-700 ${labelSizes[size]} ${required ? 'after:content-["*"] after:text-red-500 after:ml-1' : ''}`}
                >
                    {label}
                </label>
            )}

            <div className={containerClasses}>
                {(LeftIcon || leftElement) && (
                    <div className="flex items-center justify-center pl-3 text-gray-500">
                        {leftElement || <LeftIcon className={iconSizes[size]} />}
                    </div>
                )}

                <input
                    ref={finalRef}
                    id={inputId}
                    name={name}
                    type={inputType}
                    value={internalValue}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={onKeyDown}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required}
                    maxLength={maxLength}
                    minLength={minLength}
                    pattern={pattern}
                    className={inputClasses}
                    {...props}
                />

                <div className="flex items-center pr-3 space-x-1">
                    {showClearButton && internalValue && !disabled && !readOnly && (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <HiX className={iconSizes[size]} />
                        </button>
                    )}

                    {type === 'password' && (
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            {showPassword ? (
                                <HiEyeOff className={iconSizes[size]} />
                            ) : (
                                <HiEye className={iconSizes[size]} />
                            )}
                        </button>
                    )}

                    {error && (
                        <HiExclamationCircle className={`${iconSizes[size]} text-red-500`} />
                    )}
                    {success && !error && (
                        <HiCheck className={`${iconSizes[size]} text-green-500`} />
                    )}

                    {(RightIcon || rightElement) && (
                        <div className="text-gray-500">
                            {rightElement || <RightIcon className={iconSizes[size]} />}
                        </div>
                    )}
                </div>
            </div>

            {(error || helperText) && (
                <div className={`${helperSizes[size]} ${error ? 'text-red-500' : 'text-gray-500'}`}>
                    {error || helperText}
                </div>
            )}
        </div>
    );
});

Input.displayName = 'Input';

export const SearchInput = forwardRef((props, ref) => (
    <Input
        ref={ref}
        variant="rounded"
        placeholder="Search..."
        showClearButton={true}
        leftIcon={HiSearch}
        {...props}
    />
));

SearchInput.displayName = 'SearchInput';

export const EmailInput = forwardRef((props, ref) => (
    <Input
        ref={ref}
        type="email"
        placeholder="Enter your email"
        {...props}
    />
));

EmailInput.displayName = 'EmailInput';

export const PasswordInput = forwardRef((props, ref) => (
    <Input
        ref={ref}
        type="password"
        placeholder="Enter your password"
        {...props}
    />
));

PasswordInput.displayName = 'PasswordInput';

export const FilledInput = forwardRef((props, ref) => (
    <Input
        ref={ref}
        variant="filled"
        {...props}
    />
));

FilledInput.displayName = 'FilledInput';

export const MinimalInput = forwardRef((props, ref) => (
    <Input
        ref={ref}
        variant="minimal"
        {...props}
    />
));

MinimalInput.displayName = 'MinimalInput';