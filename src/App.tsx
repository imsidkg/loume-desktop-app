import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Toaster } from "sonner";
import ControlLayout from "./layouts/ControlLayout";
import AuthButton from "./components/global/AuthButton";
import '@fontsource/dm-sans'; // Defaults to weight 400
import '@fontsource/dm-sans/500.css'; // Optional: Import other weights
import '@fontsource/dm-sans/700.css'; // Optional: Import bold weight

function App() {
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <ControlLayout>
          <AuthButton />
        </ControlLayout>
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
