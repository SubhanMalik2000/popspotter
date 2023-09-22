import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeadNav from "../../compnents/navbars/headNav/head";
import SiteNav from "../../compnents/navbars/sitenav/page";
import Box from "@mui/material/Box";

const inter = Inter({ subsets: ["latin"] });
const drawerWidth = 240;
export const metadata: Metadata = {
  title: "Creating Admin UI",
  description: "Admin UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <HeadNav />
        </header>
        <Box>
          <SiteNav />
        </Box>
        <Box
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          {children}
        </Box>
      </body>
    </html>
  );
}
