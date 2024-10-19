import { Providers } from "./providers";
import { BrowserRouter } from "./router";
import "./styles/styles.scss";

export default function App() {
  return (
    <Providers>
      <BrowserRouter />
    </Providers>
  );
}
