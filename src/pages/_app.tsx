import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import ContextProvider from "@/contexts";

const App = function ({ Component, pageProps }: AppProps) {
    return (
        <ContextProvider>
            <Component {...pageProps} />
        </ContextProvider>
    );
};

export default App;
