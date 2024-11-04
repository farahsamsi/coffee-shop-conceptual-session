import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <div className="lg:h-16">
                <Navbar></Navbar>
            </div>

            {/* Dynamic section */}
            <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto lg:px-12">
                <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;