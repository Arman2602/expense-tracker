
import Approutes from "./routes/Approutes";
import { Toaster, toast } from "sonner";
function App() {
  return <>
    <Toaster
      position="top"
      theme="dark"
      richColors
    />
    <Approutes />
  </>
}

export default App;