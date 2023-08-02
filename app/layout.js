import "@styles/index.css";

import Provider from "@components/Provider";
import Nav from "@components/Nav";

export const metadata = {
  title: "BizLinks",
  description: "Easily store and share your review site profile links",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
