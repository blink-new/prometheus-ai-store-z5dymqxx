import { useState } from 'react';
import { Search, Filter, Star, Download, Zap, Bot, Code, Shield, Coins } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('tools');

  const mockTools = [
    {
      id: 1,
      name: "GPT-4 Text Processor",
      description: "Advanced text analysis and generation module with custom fine-tuning capabilities",
      category: "Natural Language",
      price: 25,
      rating: 4.8,
      downloads: 12500,
      safetyLevel: "Verified",
      modelCompatible: ["GPT-4", "GPT-3.5", "Claude"],
      cover: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Vision Analytics Pro",
      description: "Computer vision module for image recognition, object detection, and scene analysis",
      category: "Computer Vision",
      price: 35,
      rating: 4.9,
      downloads: 8900,
      safetyLevel: "Verified",
      modelCompatible: ["GPT-4V", "Claude Vision", "Gemini Pro Vision"],
      cover: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Audio Synthesizer",
      description: "Real-time audio generation and voice synthesis with emotional parameters",
      category: "Audio Processing",
      price: 15,
      rating: 4.6,
      downloads: 5600,
      safetyLevel: "Pending",
      modelCompatible: ["Whisper", "ElevenLabs", "Custom"],
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop"
    }
  ];

  const mockSkills = [
    {
      id: 1,
      name: "Autonomous Navigation",
      description: "Advanced pathfinding and obstacle avoidance for mobile robots",
      category: "Robotics",
      price: 150,
      rating: 4.7,
      downloads: 890,
      safetyLevel: "Verified",
      trustScore: 95,
      cyberButlerCompatible: true,
      cover: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Precision Manipulation",
      description: "Fine motor control system for delicate object handling and assembly tasks",
      category: "Manipulation",
      price: 200,
      rating: 4.9,
      downloads: 567,
      safetyLevel: "Verified",
      trustScore: 98,
      cyberButlerCompatible: true,
      cover: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Social Interaction AI",
      description: "Natural conversation and human interaction protocols for service robots",
      category: "Social AI",
      price: 75,
      rating: 4.5,
      downloads: 1200,
      safetyLevel: "Under Review",
      trustScore: 82,
      cyberButlerCompatible: false,
      cover: "https://images.unsplash.com/photo-1561144179-da52bb0eadda?w=400&h=200&fit=crop"
    }
  ];

  const getSafetyColor = (level: string) => {
    switch (level) {
      case 'Verified': return 'bg-green-900/30 text-green-400 border-green-600/30';
      case 'Pending': return 'bg-yellow-900/30 text-yellow-400 border-yellow-600/30';
      case 'Under Review': return 'bg-orange-900/30 text-orange-400 border-orange-600/30';
      default: return 'bg-gray-900/30 text-gray-400 border-gray-600/30';
    }
  };

  const renderModuleCard = (module: any, type: 'tool' | 'skill') => (
    <Link key={module.id} to={`/${type}/${module.id}`}>
      <Card className="group hover-lift cursor-pointer transition-all duration-500 bg-black/40 border-violet-600/20 hover:border-violet-400/40 hover:bg-black/60 backdrop-blur-sm">
        <CardHeader className="p-0">
          <div 
            className="h-48 bg-cover bg-center rounded-t-lg relative overflow-hidden"
            style={{ backgroundImage: `url(${module.cover})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-violet-900/20" />
            <div className="absolute top-3 right-3">
              <Badge className={getSafetyColor(module.safetyLevel)}>
                {module.safetyLevel}
              </Badge>
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <h3 className="font-semibold text-lg mb-1 neon-violet">{module.name}</h3>
              <Badge variant="secondary" className="bg-violet-900/40 text-violet-300 border-violet-600/30">
                {module.category}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardDescription className="text-sm text-gray-400 mb-3 line-clamp-2">
            {module.description}
          </CardDescription>
          
          <div className="space-y-3">
            {/* Stats */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="font-medium text-gray-300">{module.rating}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-500">
                <Download className="h-4 w-4" />
                <span>{module.downloads.toLocaleString()}</span>
              </div>
            </div>

            {/* Price and Action */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Coins className="h-4 w-4 text-violet-400" />
                <span className="font-semibold text-violet-300">{module.price} PPT</span>
              </div>
              <Button size="sm" className="bg-violet-600 hover:bg-violet-700 violet-glow text-white">
                {type === 'tool' ? 'Install' : 'Deploy'}
              </Button>
            </div>

            {/* Additional info for skills */}
            {type === 'skill' && (
              <div className="pt-2 border-t border-violet-900/30">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Trust Score:</span>
                  <span className="font-medium text-green-400">{module.trustScore}%</span>
                </div>
                <div className="flex items-center justify-between text-xs mt-1">
                  <span className="text-gray-500">Cyber Butler:</span>
                  <Badge variant={module.cyberButlerCompatible ? "default" : "secondary"} 
                         className={module.cyberButlerCompatible ? "bg-violet-900/30 text-violet-300 border-violet-600/30" : "bg-gray-900/30 text-gray-400 border-gray-600/30"}>
                    {module.cyberButlerCompatible ? 'Compatible' : 'Not Compatible'}
                  </Badge>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 to-violet-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient-violet neon-violet">
                Modular AI
              </span>
              <br />
              <span className="text-white">Marketplace</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover, deploy, and monetize AI modules. Build composable AI solutions 
              with verified tools and embodied robotics skills.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-violet-400" />
              <Input
                type="text"
                placeholder="Search for AI tools, robotics skills, or developers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-full bg-black/40 border-violet-600/30 focus:border-violet-400 focus:ring-violet-400/20 text-white placeholder:text-gray-400 backdrop-blur-sm"
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { label: "AI Tools", value: "2,500+", icon: Code },
                { label: "Robot Skills", value: "850+", icon: Bot },
                { label: "Developers", value: "12K+", icon: Shield },
                { label: "PPT Traded", value: "2.5M+", icon: Coins }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-violet-900/30 border border-violet-600/30 rounded-full mb-2 violet-glow">
                      <Icon className="h-6 w-6 text-violet-400" />
                    </div>
                    <div className="font-bold text-2xl text-white neon-violet">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <TabsList className="grid w-full lg:w-auto grid-cols-2 lg:grid-cols-2 mb-4 lg:mb-0 bg-black/40 border-violet-600/30">
                <TabsTrigger value="tools" className="flex items-center space-x-2 data-[state=active]:bg-violet-600/30 data-[state=active]:text-violet-300">
                  <Code className="h-4 w-4" />
                  <span>AI Tools</span>
                </TabsTrigger>
                <TabsTrigger value="skills" className="flex items-center space-x-2 data-[state=active]:bg-violet-600/30 data-[state=active]:text-violet-300">
                  <Bot className="h-4 w-4" />
                  <span>Robot Skills</span>
                </TabsTrigger>
              </TabsList>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                <Select>
                  <SelectTrigger className="w-40 bg-black/40 border-violet-600/30 text-gray-300">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-violet-600/30">
                    <SelectItem value="nlp">Natural Language</SelectItem>
                    <SelectItem value="vision">Computer Vision</SelectItem>
                    <SelectItem value="audio">Audio Processing</SelectItem>
                    <SelectItem value="robotics">Robotics</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-40 bg-black/40 border-violet-600/30 text-gray-300">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-violet-600/30">
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="low">1-50 PPT</SelectItem>
                    <SelectItem value="mid">51-150 PPT</SelectItem>
                    <SelectItem value="high">150+ PPT</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-40 bg-black/40 border-violet-600/30 text-gray-300">
                    <SelectValue placeholder="Safety Level" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-violet-600/30">
                    <SelectItem value="verified">Verified</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="review">Under Review</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="sm" className="bg-black/40 border-violet-600/30 text-gray-300 hover:bg-violet-900/30 hover:text-violet-300">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>

            <TabsContent value="tools">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockTools.map(tool => renderModuleCard(tool, 'tool'))}
              </div>
            </TabsContent>

            <TabsContent value="skills">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockSkills.map(skill => renderModuleCard(skill, 'skill'))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;