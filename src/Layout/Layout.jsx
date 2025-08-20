import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedPost from '../components/FeaturedPost'
import RecentPost from '../components/RecentPost'
import RecomendedPost from '../components/RecomendedPost'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'

const Layout = () => {
    return (
        <div>
            <Header />
            <SearchBar />
            <Hero />
            <FeaturedPost />
            <RecentPost />
            <RecomendedPost />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Layout