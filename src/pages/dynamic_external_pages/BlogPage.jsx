import React, { useState, useEffect } from "react";
import {
    HiOutlineNewspaper,
    HiOutlineTrendingUp,
    HiOutlineSparkles
} from "react-icons/hi";
import { BlogCard, CategoryBadge, BlogMeta, SearchBar, CategoryFilter } from "../../components/common/BlogComponents";
import Layout from "../../components/layout/Layout";

// Newsletter Component
const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        if (email) {
            alert(`Thank you for subscribing with email: ${email}`);
            setEmail("");
        }
    };

    return (
        <section className="py-16 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 mx-8 my-5 rounded-2xl">
            <div className="max-w-4xl mx-auto gap-2 px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-semibold text-white mb-4">Stay Updated</h2>
                <p className="text-blue-100 mb-8">
                    Get the latest health tips, rider stories, and community updates delivered to your inbox.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 bg-gray-400/30 rounded-2xl border focus:outline-none focus:ring-2 placeholder:text-gray-200 focus:ring-white/50"
                    />
                    <button
                        onClick={handleSubmit}
                        className="bg-white text-[#4873ED] px-6 py-3 rounded-2xl font-medium hover:bg-gray-100 transition-colors"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

// Main Blog Page Component
const BlogPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([]);

    // Mock blog data
    const blogPosts = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Health",
            title: "Managing Chronic Conditions with Home Delivery",
            excerpt: "How prescription delivery services are improving quality of life for patients with chronic conditions by ensuring medication adherence and reducing stress.",
            author: "Sarah Johnson",
            date: "March 15, 2024",
            readTime: "5 min read",
            views: "24",
            likes: "8"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Rider Stories",
            title: "A Day in the Life of a Qurexa Rider",
            excerpt: "Meet Emily, one of our dedicated prescription delivery riders, as she shares her experiences helping patients across Lincolnshire access their vital medications.",
            author: "Community Team",
            date: "March 10, 2024",
            readTime: "3 min read",
            views: "34",
            likes: "15"
        },
        // ... rest of your blog posts
    ];

    const categories = ["Health", "Home Care", "Rider Stories", "Food Culture", "NHS Updates", "Medication"];

    useEffect(() => {
        let filtered = blogPosts;

        // Filter by category
        if (activeCategory !== "All") {
            filtered = filtered.filter(post => post.category === activeCategory);
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(query) ||
                post.excerpt.toLowerCase().includes(query) ||
                post.category.toLowerCase().includes(query)
            );
        }

        setFilteredPosts(filtered);
    }, [activeCategory, searchQuery, blogPosts]);

    const featuredPost = blogPosts[0];
    const recentPosts = blogPosts.slice(1, 4);

    return (
        <Layout pageType="blog">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Blog & Insights
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Stories, insights, and updates from the Qurexa community
                        </p>

                        {/* Search and Filter */}
                        <div className="flex flex-col items-center justify-center gap-4 mb-8">
                            <SearchBar onSearch={setSearchQuery} />
                            <CategoryFilter
                                categories={categories}
                                activeCategory={activeCategory}
                                onCategoryChange={setActiveCategory}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {activeCategory === "All" && !searchQuery && (
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center space-x-2 mb-8">
                            <HiOutlineSparkles className="w-6 h-6 text-pink-500" />
                            <h2 className="text-2xl font-bold text-gray-900">Featured</h2>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <BlogCard {...featuredPost} variant="featured" />
                        </div>
                    </div>
                </section>
            )}

            {/* Recent Posts */}
            {activeCategory === "All" && !searchQuery && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center space-x-2 mb-8">
                            <HiOutlineTrendingUp className="w-6 h-6 text-blue-500" />
                            <h2 className="text-2xl font-bold text-gray-900">Recent Posts</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {recentPosts.map((post) => (
                                <BlogCard key={post.id} {...post} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* All Posts / Filtered Results */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {searchQuery ? `Search Results for "${searchQuery}"` :
                                activeCategory === "All" ? "All Articles" : `${activeCategory} Articles`}
                        </h2>
                        <span className="text-gray-500">
                            {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
                        </span>
                    </div>

                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <BlogCard key={post.id} {...post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-gray-400 mb-4">
                                <HiOutlineNewspaper className="w-16 h-16 mx-auto" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                            <p className="text-gray-500 mb-6">
                                Try adjusting your search terms or browse different categories.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setActiveCategory("All");
                                }}
                                className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
                            >
                                View All Articles
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Section */}
            <Newsletter />
        </Layout>
    );
};

export default BlogPage;