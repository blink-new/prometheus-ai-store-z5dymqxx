import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Cpu, 
  Bot, 
  Code, 
  Shield, 
  Coins,
  Menu,
  User,
  Search
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Marketplace', icon: Search },
    { href: '/developer', label: 'Developer', icon: Code },
    { href: '/governance', label: 'Governance', icon: Shield },
    { href: '/tokens', label: 'Tokens', icon: Coins },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-violet-900/20 glass-effect-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl gradient-violet violet-glow flex items-center justify-center">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient-violet neon-violet">
                Prometheus
              </span>
              <span className="text-xs text-violet-400 -mt-1">AI Store</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                    isActive(item.href)
                      ? "bg-violet-600/20 text-violet-300 violet-glow"
                      : "text-gray-300 hover:text-violet-400 hover:bg-violet-900/30"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* PPT Balance */}
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-violet-900/30 border border-violet-600/30 rounded-full">
              <Coins className="h-4 w-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-300">1,250 PPT</span>
            </div>

            {/* User Menu */}
            <Button variant="ghost" size="sm" className="hidden sm:flex text-violet-300 hover:text-violet-200 hover:bg-violet-900/30">
              <User className="h-4 w-4 mr-2" />
              <span>Profile</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-violet-300 hover:text-violet-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-violet-900/20 glass-effect py-4">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                      isActive(item.href)
                        ? "bg-violet-600/20 text-violet-300"
                        : "text-gray-300 hover:text-violet-400 hover:bg-violet-900/30"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="px-4 py-2 border-t border-violet-900/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">PPT Balance</span>
                  <Badge variant="secondary" className="bg-violet-900/30 text-violet-300 border-violet-600/30">
                    1,250 PPT
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;