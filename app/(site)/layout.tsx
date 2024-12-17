import DiscountNotification from "../components/DiscountNotification.tsx/DiscountNotification";
import Footer from "../components/footer/footer";
import Header from "../components/header/header"


export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DiscountNotification />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
