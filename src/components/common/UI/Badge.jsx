// src/components/common/UI/Badge.jsx
import React from 'react';
import { HiX, HiCheck, HiExclamation, HiInformationCircle } from 'react-icons/hi';

export const Badge = ({
    children,
    variant = 'default',
    size = 'md',
    removable = false,
    onRemove = () => { },
    icon = null,
    className = '',
    onClick = null,
    ...props
}) => {
    const baseStyles = `
    inline-flex items-center font-medium rounded-full
    transition-all duration-200 ease-in-out
    ${onClick ? 'cursor-pointer hover:shadow-md' : ''}
    ${className}
  `;

    const variants = {
        default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
        primary: 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-sm',
        secondary: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-sm',
        success: 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-sm',
        danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-sm',
        warning: 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-sm',
        info: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm',
        outline: 'bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-50',
        'outline-primary': 'bg-transparent border-2 border-pink-500 text-pink-600 hover:bg-pink-50',
        'outline-success': 'bg-transparent border-2 border-green-500 text-green-600 hover:bg-green-50',
        'outline-danger': 'bg-transparent border-2 border-red-500 text-red-600 hover:bg-red-50',
        'outline-warning': 'bg-transparent border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50',
        'outline-info': 'bg-transparent border-2 border-blue-500 text-blue-600 hover:bg-blue-50',

        health: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-sm',
        homecare: 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-sm',
        stories: 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-sm',
        food: 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-sm',
        nhs: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-sm',
        medication: 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-sm'
    };

    const sizes = {
        xs: 'px-2 py-0.5 text-xs',
        sm: 'px-2.5 py-1 text-xs',
        md: 'px-3 py-1.5 text-sm',
        lg: 'px-4 py-2 text-sm',
        xl: 'px-5 py-2.5 text-base'
    };

    const iconSizes = {
        xs: 'w-3 h-3',
        sm: 'w-3 h-3',
        md: 'w-4 h-4',
        lg: 'w-4 h-4',
        xl: 'w-5 h-5'
    };

    const renderIcon = () => {
        if (icon) {
            const IconComponent = icon;
            return <IconComponent className={`${iconSizes[size]} mr-1`} />;
        }
        return null;
    };

    const renderRemoveButton = () => {
        if (removable) {
            return (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove();
                    }}
                    className={`ml-1 ${iconSizes[size]} text-current hover:text-white hover:bg-black/20 rounded-full p-0.5 transition-colors`}
                >
                    <HiX className="w-full h-full" />
                </button>
            );
        }
        return null;
    };

    const badgeClasses = `
    ${baseStyles}
    ${variants[variant] || variants.default}
    ${sizes[size]}
  `.replace(/\s+/g, ' ').trim();

    return (
        <span
            className={badgeClasses}
            onClick={onClick}
            {...props}
        >
            {renderIcon()}
            {children}
            {renderRemoveButton()}
        </span>
    );
};

export const StatusBadge = ({ status, ...props }) => {
    const statusConfig = {
        success: { variant: 'success', icon: HiCheck },
        error: { variant: 'danger', icon: HiExclamation },
        warning: { variant: 'warning', icon: HiExclamation },
        info: { variant: 'info', icon: HiInformationCircle },
        pending: { variant: 'warning', icon: null },
        active: { variant: 'success', icon: null },
        inactive: { variant: 'default', icon: null }
    };

    const config = statusConfig[status] || statusConfig.info;

    return (
        <Badge
            variant={config.variant}
            icon={config.icon}
            {...props}
        >
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
    );
};

export const CategoryBadge = ({ category, ...props }) => {
    const categoryVariants = {
        'Health': 'health',
        'Home Care': 'homecare',
        'New Stories': 'stories',
        'Food Culture': 'food',
        'NHS Updates': 'nhs',
        'Medication': 'medication'
    };

    return (
        <Badge
            variant={categoryVariants[category] || 'default'}
            {...props}
        >
            {category}
        </Badge>
    );
};