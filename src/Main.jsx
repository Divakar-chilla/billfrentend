import { Toaster } from "react-hot-toast";
import App from "./App";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(<><App></App>
<Toaster></Toaster>
</>)