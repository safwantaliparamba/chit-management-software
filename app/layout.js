import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import DashboardLayout from "@/components/layout/DashboardLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Chit Management Software",
    description: "Chit management software",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    style={{
                        zIndex: "1000000",
                    }}
                />
                <StyledComponentsRegistry>
                    <DashboardLayout>{children}</DashboardLayout>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
