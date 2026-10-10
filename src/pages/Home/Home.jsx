import HeroBanner from "./components/HeroBanner";
import HeroFeatures from "./components/HeroFeatures";
import CategoriesSection from "./components/CategoriesSection";
import PopularProducts from "./components/PopularProducts";
import AppPublicity from "./components/AppPublicity";
import PromoProducts from "./components/PromoProducts";
import CustomerReviews from "./components/CustomerReviews";
import NewsletterSection from "./components/NewsletterSection";

const Home = () => {
    return (
        <div className="w-full">
            <HeroBanner />
            <HeroFeatures />
            {/* <CategoryMarquee /> */}
            <CategoriesSection />
            <PopularProducts />
            <PromoProducts />
            <AppPublicity />
            <CustomerReviews />
            <NewsletterSection/>
        </div>
    );
};

export default Home;