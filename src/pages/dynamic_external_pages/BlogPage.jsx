// src/pages/dynamic_external_pages/BlogPage.js
import React, { useState, useMemo } from "react";
import { BlogCard } from "../../components/blog/Cards/BlogCard";
import { CategoryFilter } from "../../components/blog/Filters/CategoryFilter";
import { SearchInput } from "../../components/common/UI/Input";
import { Newsletter } from "../../components/blog/Newsletter";
import { Button } from "../../components/common/UI/Button";
import DefaultLayout from "../../components/layout/DefaultLayout";

const BlogPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [showFilters, setShowFilters] = useState(false);

    const blogPosts = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Health",
            title: "Managing Chronic Conditions with Home Delivery",
            excerpt: "How prescription delivery services are improving quality of life for patients with chronic conditions by ensuring medication adherence and reducing stress.",
            author: "Dr. Sarah Johnson",
            date: "March 15, 2024",
            readTime: "5 min read",
            views: "24",
            likes: "8",
            showBadge: true
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Rider Stories",
            title: "A Day in the Life of a Qurexa Rider",
            excerpt: "Meet Emily, one of our dedicated prescription delivery riders, as she shares her experiences helping patients across Lincolnshire access their vital medications.",
            author: "Community Team",
            date: "March 10, 2024",
            readTime: "3 min read",
            views: "34",
            likes: "15",
            showBadge: false
        },
        {
            id: 3,
            image: "https://plus.unsplash.com/premium_photo-1710361778847-6fccf6e476b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGhlJTIwRnV0dXJlJTIwb2YlMjBIb21lJTIwSGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
            category: "Health",
            title: "The Future of Home Healthcare",
            excerpt: "Exploring how technology is revolutionizing home healthcare delivery and making medical services more accessible to everyone.",
            author: "Dr. Michael Chen",
            date: "March 8, 2024",
            readTime: "7 min read",
            views: "18",
            likes: "12",
            showBadge: true
        },
        {
            id: 4,
            image: "https://plus.unsplash.com/premium_photo-1691784080844-8300ab4c6790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fE5ldyUyME5IUyUyMERpZ2l0YWwlMjBQcmVzY3JpcHRpb24lMjBJbml0aWF0aXZlfGVufDB8fDB8fHww",
            category: "NHS Updates",
            title: "New NHS Digital Prescription Initiative",
            excerpt: "Learn about the latest NHS digital prescription program and how it's streamlining medication delivery across the UK.",
            author: "NHS Communications",
            date: "March 5, 2024",
            readTime: "4 min read",
            views: "42",
            likes: "28",
            showBadge: true
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Home Care",
            title: "Supporting Elderly Care at Home",
            excerpt: "Essential tips for family caregivers and how delivery services can help maintain independence.",
            author: "Maria Lopez",
            date: "March 10, 2024",
            readTime: "5 min read",
            views: "24",
            likes: "8",
            showBadge: false
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Food Culture",
            title: "Exploring African Cuisine in Lincolnshire",
            excerpt: "A guide to finding authentic African ingredients and supporting local African food vendors.",
            author: "Chef Adaora Okafor",
            date: "March 8, 2024",
            readTime: "5 min read",
            views: "24",
            likes: "8",
            showBadge: false
        }
    ];

    const categories = [...new Set(blogPosts.map(post => post.category))];

    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const matchesCategory = activeCategory === "All" || post.category === activeCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [blogPosts, activeCategory, searchTerm]);

    const handleRefresh = async () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    };

    const clearFilters = () => {
        setActiveCategory("All");
        setSearchTerm("");
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const hasActiveFilters = activeCategory !== "All" || searchTerm.length > 0;

    return (
        <DefaultLayout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <header className="text-center mb-8 sm:mb-12">
                    <div className="mb-6">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Blog & Insights</h1>
                        <p className="text-base sm:text-lg text-gray-600">Stories, insights, and updates from the Qurexa community</p>
                    </div>

                    <div className="max-w-xl mx-auto mb-6">
                        <SearchInput
                            value={searchTerm}
                            onChange={setSearchTerm}
                            placeholder="Search articles..."
                            fullWidth={true}
                            variant="rounded"
                        />
                    </div>

                    <div className="flex justify-center mb-8">
                        <CategoryFilter
                            categories={categories}
                            activeCategory={activeCategory}
                            onCategoryChange={setActiveCategory}
                        />
                    </div>
                </header>

                <section className="mb-8 sm:mb-12">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Recent blog posts</h2>

                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-12 bg-gray-50 rounded-xl">
                            <p className="text-gray-500 text-lg mb-4">No articles found matching your criteria.</p>
                            <Button
                                variant="primary"
                                onClick={clearFilters}
                            >
                                Clear Filters & Browse All
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="lg:col-span-1">
                                <BlogCard
                                    key={filteredPosts[0]?.id}
                                    {...filteredPosts[0]}
                                    showBadge={filteredPosts[0]?.showBadge}
                                    badgePosition="overlay"
                                    variant="featured"
                                />
                            </div>

                            <div className="lg:col-span-1 space-y-4">
                                {filteredPosts.slice(1, 4).map((post) => (
                                    <BlogCard
                                        key={post.id}
                                        {...post}
                                        showBadge={post.showBadge}
                                        badgePosition="overlay"
                                        variant="compact"
                                        className="w-full"
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                <section className="mb-12 sm:mb-16">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">Health</h2>
                        <button className="text-pink-600 hover:text-pink-700 font-medium flex items-center gap-1 self-start sm:self-auto">
                            View All Articles
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <BlogCard
                            image="https://images.unsplash.com/photo-1580281658460-2d1114999983?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            category="Health"
                            title="Understanding Your Prescription Rights"
                            excerpt="Learn about your rights when it comes to prescription delivery services and how to make the most of at-home healthcare solutions."
                            author="Dr. Sarah Johnson"
                            date="March 7, 2024"
                            readTime="5 min read"
                            variant="default"
                            showBadge={false}
                        />

                        <BlogCard
                            image="https://images.unsplash.com/photo-1583088580067-16d1109aeacb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE5IUyUyMFByZXNjcmlwdGlvbiUyMERlbGl2ZXJ5JTNBJTIwV2hhdCUyMFlvdSUyME5lZWQlMjB0byUyMEtub3d8ZW58MHx8MHx8fDA%3D"
                            category="NHS Updates"
                            title="NHS Prescription Delivery: What You Need to Know"
                            excerpt="Complete guide to NHS prescription delivery services, eligibility, and how to access them safely."
                            author="NHS Pharmacist Team"
                            date="March 5, 2024"
                            readTime="5 min read"
                            variant="default"
                            showBadge={true}
                        />

                        <BlogCard
                            image="https://images.unsplash.com/photo-1559265053-e26116164bde?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            category="Health"
                            title="Medication Adherence: Tips for Success"
                            excerpt="Expert advice on staying consistent with your medication routine and recognizing side effects."
                            author="Clinical Pharmacist Sarah"
                            date="March 5, 2024"
                            readTime="5 min read"
                            variant="default"
                            showBadge={false}
                        />
                    </div>
                </section>

                <section className="mb-12 sm:mb-16">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">Home Care</h2>
                        <button className="text-pink-600 hover:text-pink-700 font-medium flex items-center gap-1 self-start sm:self-auto">
                            View All Articles
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <BlogCard
                            image="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            category="Home Care"
                            title="Disposing of Expired Medications Safely"
                            excerpt="Proper disposal methods for expired or unused medications to protect your family and environment."
                            author="Public Health Team"
                            date="March 12, 2024"
                            readTime="5 min read"
                            variant="default"
                            showBadge={false}
                        />

                        <BlogCard
                            image="https://images.unsplash.com/photo-1597188558265-f0fb7428a243?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaWNhbCUyMGVtZXJnZW5jeXxlbnwwfHwwfHx8MA%3D%3D"
                            category="Home Care"
                            title="Emergency Medical Kit Essentials"
                            excerpt="Building a comprehensive home medical kit with essential medications and first aid supplies."
                            author="First Aid Instructor Mark"
                            date="March 12, 2024"
                            readTime="5 min read"
                            variant="default"
                            showBadge={false}
                        />

                        <BlogCard
                            image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            category="Home Care"
                            title="Safe Medication Storage at Home"
                            excerpt="Essential tips for properly storing over-the-counter medications to maintain their effectiveness and safety."
                            author="Pharmacy Team"
                            date="March 13, 2024"
                            readTime="7 min read"
                            variant="default"
                            showBadge={false}
                        />
                    </div>
                </section>

                <section className="mb-12 sm:mb-16">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">Rider Stories</h2>
                        <button className="text-pink-600 hover:text-pink-700 font-medium flex items-center gap-1 self-start sm:self-auto">
                            View All Articles
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <BlogCard
                            image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            category="Rider Stories"
                            title="Rural Deliveries: Connecting Remote Communities"
                            excerpt="How our riders ensure medication access for patients in rural Lincolnshire, connecting remote communities with essential healthcare."
                            author="Tom Wilson"
                            date="March 12, 2024"
                            readTime="5 min read"
                            variant="default"
                            showBadge={false}
                        />

                        <BlogCard
                            image="https://images.unsplash.com/photo-1550207476-7323b6ceb373?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE1ha2luZyUyMGElMjBEaWZmZXJlbmNlJTNBJTIwUmlkZXIlMjBDb21tdW5pdHklMjBJbXBhY3R8ZW58MHx8MHx8fDA%3D"
                            title="Making a Difference: Rider Community Impact"
                            excerpt="Stories of how Qurexa riders have made meaningful connections and helped elderly patients with their medication needs."
                            author="Community Team"
                            date="March 12, 2024"
                            readTime="3 min read"
                            variant="default"
                            showBadge={false}
                        />

                        <BlogCard
                            image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            category="Rider Stories"
                            title="A Day in the Life of a Qurexa Rider"
                            excerpt="Meet Emily, who's been delivering hope and health across Lincolnshire for over two years."
                            author="Community Team"
                            date="March 12, 2024"
                            readTime="5 min read"
                            variant="default"
                            showBadge={false}
                        />
                    </div>
                </section>

                <section className="mb-12 sm:mb-16">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">Food Culture</h2>
                        <button className="text-pink-600 hover:text-pink-700 font-medium flex items-center gap-1 self-start sm:self-auto">
                            View All Articles
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <BlogCard
                            image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            category="Food Culture"
                            title="Nutritional Support During Illness Recovery"
                            excerpt="How proper nutrition can support medication effectiveness and speed up recovery times."
                            author="Nutritionist Jane"
                            date="March 11, 2024"
                            readTime="6 min read"
                            variant="default"
                            showBadge={false}
                        />

                        <BlogCard
                            image="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            category="Food Culture"
                            title="Spices That Heal: Medicinal Properties of Common Spices"
                            excerpt="Discover the therapeutic benefits of everyday spices and their role in traditional medicine."
                            author="Herbalist Maria"
                            date="March 10, 2024"
                            readTime="5 min read"
                            variant="default"
                            showBadge={false}
                        />

                        <BlogCard
                            image="https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            category="Food Culture"
                            title="Community Food Programs and Health Outcomes"
                            excerpt="How access to nutritious food complements medical treatment and improves community health."
                            author="Public Health Director"
                            date="March 9, 2024"
                            readTime="5 min read"
                            variant="default"
                            showBadge={false}
                        />
                    </div>
                </section>

                <Newsletter />
            </div>
        </DefaultLayout>
    );
};

export default BlogPage;