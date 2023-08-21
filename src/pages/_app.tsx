import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import ContextProvider from "@/contexts";
import Layout from "@/layouts";

const App = function ({ Component, pageProps }: AppProps) {
    return (
        <ContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ContextProvider>
    );
};

export default App;
