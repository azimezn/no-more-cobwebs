import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Header, Footer, Navigation } from "./components";
import { Home, Drumkit } from "./pages";

export default function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/drumkit" element={<Drumkit />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

// export default function App() {

//   const [currentPage, setCurrentPage] = useState("Home");

//   const renderPage = () => {
//     // if (currentPage === "Home") {
//     //   return <Home />
//     // }
//     if (currentPage === "Home") return <Home />
//     if (currentPage === "Drumkit") return <Drumkit />
//   }

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div className="App">
//       <Header />
//       <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
//       {renderPage()}
//       <Footer />
//     </div>
//   );
// };
