import React, { useState } from "react";
import { Button } from "../common/UI/Button";
import { Input } from "../common/UI/Input";

export const Newsletter = ({
    title = "Stay Updated",
    description = "Get the latest health tips, rider stories, and community updates delivered to your inbox.",
    placeholder = "Enter your email",
    buttonText = "Subscribe",
    disclaimer = "Weekly digest • No spam • Unsubscribe anytime",
    className = ""
}) => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubscribed(true);
            setIsSubmitting(false);
            setEmail("");
        }, 1500);
    };

    if (isSubscribed) {
        return (
            <section className={`bg-gradient-to-br from-blue-600 via-purple-600 py-16 to-pink-600 rounded-2xl p-8 text-center ${className}`}>
                <div className="max-w-md mx-auto">
                    <div className="mb-4">
                        <svg className="w-16 h-16 text-white mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Thank you for subscribing!</h3>
                    <p className="text-blue-100 mb-6">You'll start receiving our weekly updates soon.</p>
                    <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-purple-600"
                        onClick={() => setIsSubscribed(false)}
                    >
                        Subscribe Another Email
                    </Button>
                </div>
            </section>
        );
    }

    return (
        <section className={`bg-gradient-to-br from-blue-600 via-purple-600 py-16 to-pink-600 rounded-2xl p-8 text-center ${className}`}>
            <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white pb-1">{title}</h3>
                <p className="text-blue-100 mb-6">{description}</p>

                <div className="flex justify-center">
                    <div className="w-full sm:w-3/5 max-w-2xl">
                        <div className="flex flex-col sm:flex-row gap-3 items-stretch w-full">
                            <div className="flex-1 sm:min-w-0">
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={setEmail}
                                    placeholder={placeholder}
                                    required
                                    variant="outlined"
                                    disabled={isSubmitting}
                                    className="!w-full text-white placeholder-white/70"
                                    fullWidth={true}
                                />
                            </div>
                            <div className="sm:flex-shrink-0">
                                <Button
                                    type="submit"
                                    variant="secondary2"
                                    size="md"
                                    className="w-full sm:w-auto sm:px-6 z-100 rounded-full"
                                    disabled={isSubmitting || !email}
                                    loading={isSubmitting}
                                    onClick={handleSubmit}
                                >
                                    {buttonText}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-xs text-blue-100 mt-4 opacity-80">
                    {disclaimer}
                </p>
            </div>
        </section>
    );
};