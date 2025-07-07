import { Toaster } from "react-hot-toast";
import App from "./App";
import { createRoot } from "react-dom/client";
import Context from "./Component/context/Context";

createRoot(document.getElementById("root")).render(<><Context><App></App></Context>
<Toaster></Toaster>
</>)