import "./App.css";
import HomePage from "./pages/HomePage";
import PostDetailPage from './pages/PostDetailPage.tsx'
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/post/:id" element={<PostDetailPage />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
