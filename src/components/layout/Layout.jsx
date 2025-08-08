import Footer from "../common/Footer";
import Header from "../common/Header";

const Layout = ({ children, pageType = "default" }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header pageType={pageType} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;