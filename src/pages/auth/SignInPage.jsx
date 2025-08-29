import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, EmailInput, PasswordInput } from '../../components/common/UI/Input';
import { Button } from '../../components/common/UI/Button';
import { authBg, logo } from '../../assets';
import { HiArrowLeft } from 'react-icons/hi';

const SignInPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Handle successful form submission
            console.log('Form submitted:', formData);
        }
    };

    const handleGoogleSignIn = () => {
        console.log('Google sign in clicked');
    };

    const handleAppleSignIn = () => {
        console.log('Apple sign in clicked');
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="min-h-screen flex">
            {/* Left side - Background */}
            <div
                className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${authBg})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/80 to-purple-800/80" />

                {/* Back button */}
                <button
                    onClick={handleBack}
                    className="absolute top-6 left-6 z-20 flex items-center space-x-2 text-white hover:text-pink-200 transition-colors"
                >
                    <HiArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                </button>

                <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
                    <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
                                        <div className="flex items-center space-x-3 mb-8">
                                            <img src={logo} alt="Qurexa Logo" className="w-16 h-16" />
                                            <div>
                                                <h1 className="text-3xl font-bold">Qurexa</h1>
                                                <p className="text-lg opacity-90">Trust. Care. Deliver.</p>
                                            </div>
                                        </div>
                        <div>
                        </div>
                    </div>

                    <div className="text-center max-w-md">
                        <h2 className="text-2xl font-semibold mb-4">
                            Welcome back to your health companion
                        </h2>
                        <p className="text-lg opacity-90">
                            Continue your journey with safe, reliable prescription and grocery delivery.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-6 mt-12">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="m16 11.37-4-4-4 4" />
                                <path d="M12 3v14" />
                            </svg>
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </div>
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                {/* Mobile back button */}
                <button
                    onClick={handleBack}
                    className="lg:hidden absolute top-6 left-6 flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <HiArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                </button>

                <div className="w-full max-w-md mt-12 lg:mt-0">
                    {/* Mobile logo */}
                    <div className="lg:hidden flex items-center justify-center mb-8">
                        <div className="flex items-center space-x-3">
                            <img src={logo} alt="Qurexa Logo" className="w-12 h-12" />
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Qurexa</h1>
                                <p className="text-sm text-gray-600">Trust. Care. Deliver.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Welcome Back
                        </h2>
                        <p className="text-gray-600">
                            Sign in to your account
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <EmailInput
                                label="Email"
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={(value) => handleInputChange('email', value)}
                                error={errors.email}
                                required
                                variant="rounded"
                            />
                        </div>

                        <div>
                            <PasswordInput
                                label="Password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={(value) => handleInputChange('password', value)}
                                error={errors.password}
                                required
                                variant="rounded"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                                    className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 focus:ring-2"
                                />
                                <label htmlFor="rememberMe" className="text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>

                            <Link
                                to="/forgot-password"
                                className="text-sm text-pink-600 hover:underline"
                            >
                                Forget Password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            fullWidth
                            className="rounded-full py-4"
                        >
                            Sign In
                        </Button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">OR</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Button
                                variant="outline"
                                size="lg"
                                fullWidth
                                onClick={handleGoogleSignIn}
                                className="rounded-full py-4 border-gray-300"
                                leftElement={
                                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                }
                            >
                                Sign in with Google
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                fullWidth
                                onClick={handleAppleSignIn}
                                className="rounded-full py-4 border-gray-300"
                                leftElement={
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                                    </svg>
                                }
                            >
                                Sign in with Apple
                            </Button>
                        </div>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <Link
                                to="/signup"
                                className="text-pink-600 hover:underline font-medium"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;