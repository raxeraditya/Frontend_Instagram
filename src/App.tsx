import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Search } from "./pages/Search";
import { Messages } from "./pages/Messages";
import { Reels } from "./pages/Reels";
import { LoginForm } from "./components/auth/LoginForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/auth" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
