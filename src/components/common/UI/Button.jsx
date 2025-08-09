// src/components/common/UI/Button.jsx
import React from 'react';
import { HiOutlineArrowRight, HiOutlineDownload, HiOutlinePlus, HiOutlineTrash } from 'react-icons/hi';

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    fullWidth = false,
    leftIcon = null,
    rightIcon = null,
    onClick = () => { },
    type = 'button',
    className = '',
    href = null,
    target = '_self',
    ...props
}) => {
    const baseStyles = `
    inline-flex items-center justify-center font-medium
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

    const variants = {
        primary: `
      bg-gradient-to-r from-pink-500 to-pink-600 text-white
      hover:from-pink-600 hover:to-pink-700
      focus:ring-pink-500
      shadow-md hover:shadow-lg
    `,
        secondary: `
      bg-white text-pink-600 border-2 border-pink-500
      hover:bg-pink-50 hover:border-pink-600
      focus:ring-pink-500
    `,
        secondary2: `
      bg-white rounded-full text-[#4873ED] border-2 
      hover:bg-pink-50 hover:border-pink-600
      focus:ring-pink-500
    `,
        outline: `
      bg-transparent text-gray-700 border-2 border-gray-300
      hover:bg-gray-50 hover:border-gray-400
      focus:ring-gray-500
    `,
        ghost: `
      bg-transparent text-gray-600
      hover:bg-gray-100 hover:text-gray-900
      focus:ring-gray-500
    `,
        danger: `
      bg-gradient-to-r from-red-500 to-red-600 text-white
      hover:from-red-600 hover:to-red-700
      focus:ring-red-500
      shadow-md hover:shadow-lg
    `,
        success: `
      bg-gradient-to-r from-green-500 to-green-600 text-white
      hover:from-green-600 hover:to-green-700
      focus:ring-green-500
      shadow-md hover:shadow-lg
    `,
        warning: `
      bg-gradient-to-r from-yellow-500 to-yellow-600 text-white
      hover:from-yellow-600 hover:to-yellow-700
      focus:ring-yellow-500
      shadow-md hover:shadow-lg
    `,
        info: `
      bg-gradient-to-r from-blue-500 to-blue-600 text-white
      hover:from-blue-600 hover:to-blue-700
      focus:ring-blue-500
      shadow-md hover:shadow-lg
    `,
        dark: `
      bg-gradient-to-r from-gray-800 to-gray-900 text-white
      hover:from-gray-900 hover:to-black
      focus:ring-gray-700
      shadow-md hover:shadow-lg
    `
    };

    const sizes = {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
        xl: 'px-8 py-4 text-lg'
    };

    const iconSizes = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-4 h-4',
        lg: 'w-5 h-5',
        xl: 'w-6 h-6'
    };

    const LoadingSpinner = () => (
        <svg
            className={`animate-spin -ml-1 mr-2 ${iconSizes[size]} text-current`}
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

    const renderLeftIcon = () => {
        if (loading) return <LoadingSpinner />;
        if (leftIcon) {
            const IconComponent = leftIcon;
            return <IconComponent className={`${iconSizes[size]} mr-2`} />;
        }
        return null;
    };

    const renderRightIcon = () => {
        if (rightIcon && !loading) {
            const IconComponent = rightIcon;
            return <IconComponent className={`${iconSizes[size]} ml-2`} />;
        }
        return null;
    };

    const buttonClasses = `
    ${baseStyles}
    ${variants[variant] || variants.primary}
    ${sizes[size]}
  `.replace(/\s+/g, ' ').trim();

    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={buttonClasses}
                {...props}
            >
                {renderLeftIcon()}
                {children}
                {renderRightIcon()}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={buttonClasses}
            {...props}
        >
            {renderLeftIcon()}
            {children}
            {renderRightIcon()}
        </button>
    );
};

export const PrimaryButton = (props) => (
    <Button variant="primary" {...props} />
);

export const SecondaryButton = (props) => (
    <Button variant="secondary" {...props} />
);

export const DangerButton = (props) => (
    <Button variant="danger" {...props} />
);

export const SuccessButton = (props) => (
    <Button variant="success" {...props} />
);

export const OutlineButton = (props) => (
    <Button variant="outline" {...props} />
);

export const GhostButton = (props) => (
    <Button variant="ghost" {...props} />
);

export const CTAButton = ({ children, ...props }) => (
    <Button
        variant="primary"
        size="lg"
        rightIcon={HiOutlineArrowRight}
        {...props}
    >
        {children}
    </Button>
);

export const DownloadButton = ({ children, ...props }) => (
    <Button
        variant="secondary"
        leftIcon={HiOutlineDownload}
        {...props}
    >
        {children}
    </Button>
);

export const AddButton = ({ children, ...props }) => (
    <Button
        variant="success"
        leftIcon={HiOutlinePlus}
        {...props}
    >
        {children}
    </Button>
);

export const DeleteButton = ({ children, ...props }) => (
    <Button
        variant="danger"
        leftIcon={HiOutlineTrash}
        {...props}
    >
        {children}
    </Button>
);

export const ButtonExamples = () => {
    return (
        <div className="p-6 space-y-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900">Button Examples</h2>

            <section className="space-y-4">
                <h3 className="text-lg font-semibold">Variants</h3>
                <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="info">Info</Button>
                    <Button variant="dark">Dark</Button>
                </div>
            </section>

            <section className="space-y-4">
                <h3 className="text-lg font-semibold">Sizes</h3>
                <div className="flex items-center gap-4">
                    <Button size="xs">Extra Small</Button>
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">Extra Large</Button>
                </div>
            </section>

            <section className="space-y-4">
                <h3 className="text-lg font-semibold">States</h3>
                <div className="flex gap-4">
                    <Button>Normal</Button>
                    <Button loading>Loading</Button>
                    <Button disabled>Disabled</Button>
                </div>
            </section>

            <section className="space-y-4">
                <h3 className="text-lg font-semibold">With Icons</h3>
                <div className="flex gap-4">
                    <Button leftIcon={HiOutlinePlus}>Add Item</Button>
                    <Button rightIcon={HiOutlineArrowRight}>Continue</Button>
                    <Button leftIcon={HiOutlineDownload} rightIcon={HiOutlineArrowRight}>
                        Download & Continue
                    </Button>
                </div>
            </section>

            <section className="space-y-4">
                <h3 className="text-lg font-semibold">Preset Components</h3>
                <div className="flex gap-4">
                    <CTAButton>Get Started</CTAButton>
                    <DownloadButton>Download</DownloadButton>
                    <AddButton>Add New</AddButton>
                    <DeleteButton>Delete</DeleteButton>
                </div>
            </section>

            <section className="space-y-4">
                <h3 className="text-lg font-semibold">Full Width</h3>
                <Button fullWidth variant="primary">Full Width Button</Button>
            </section>

            <section className="space-y-4">
                <h3 className="text-lg font-semibold">As Link</h3>
                <Button href="https://example.com" target="_blank">
                    Visit Website
                </Button>
            </section>
        </div>
    );
};