import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element= {<HomePage/>} />
        <Route path="/home" element= {<HomePage/>} />
        <Route path="/upload" element={<VideoUploadPage />} />
        <Route path="/video/:videoId" element= {<HomePage />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
