import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import LandingPage from './pages/LandingPage';
import ToolProfile from './pages/ToolProfile';
import SkillProfile from './pages/SkillProfile';
import DeveloperConsole from './pages/DeveloperConsole';
import Governance from './pages/Governance';
import TokenMarketplace from './pages/TokenMarketplace';
import Navigation from './components/Navigation';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      <Router>
        <div className="min-h-screen black-violet-gradient">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/tool/:id" element={<ToolProfile />} />
              <Route path="/skill/:id" element={<SkillProfile />} />
              <Route path="/developer" element={<DeveloperConsole />} />
              <Route path="/governance" element={<Governance />} />
              <Route path="/tokens" element={<TokenMarketplace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;