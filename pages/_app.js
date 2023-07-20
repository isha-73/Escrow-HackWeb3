import '../styles/globals.css';
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

import "regenerator-runtime/runtime";



export default function App({ Component, pageProps }) {
  const supportedChainIds = [80001, 4];

  const connectors = {
    injected: {},
  };
  return (
    <>
      <ThirdwebWeb3Provider
        supportedChainIds={supportedChainIds}
        connectors={connectors}
      >
        <Component {...pageProps} />
      </ThirdwebWeb3Provider>
    </>
  );
}
