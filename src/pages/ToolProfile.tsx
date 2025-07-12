import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Star, 
  Download, 
  Coins, 
  Play, 
  Code, 
  GitBranch, 
  Shield, 
  Users, 
  Calendar,
  ExternalLink,
  Heart,
  Share2
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Separator } from '../components/ui/separator';
import { Progress } from '../components/ui/progress';

const ToolProfile = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);

  // Mock data - would come from API based on id
  const tool = {
    id: 1,
    name: "GPT-4 Text Processor",
    description: "Advanced text analysis and generation module with custom fine-tuning capabilities. This powerful tool enables developers to build sophisticated natural language processing applications with ease.",
    longDescription: "The GPT-4 Text Processor is a comprehensive text analysis and generation module designed for developers who need powerful NLP capabilities in their applications. Built on the latest GPT-4 architecture, this module provides fine-tuning capabilities, custom prompt engineering, and advanced text processing features.",
    category: "Natural Language Processing",
    price: 25,
    rating: 4.8,
    reviews: 156,
    downloads: 12500,
    safetyLevel: "Verified",
    developer: {
      name: "AI Labs Inc.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      reputation: 4.9,
      modules: 12
    },
    modelCompatible: ["GPT-4", "GPT-3.5", "Claude", "Gemini Pro"],
    cover: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    changelog: [
      {
        version: "2.1.0",
        date: "2024-01-15",
        changes: ["Added fine-tuning capabilities", "Improved processing speed by 30%", "Fixed memory leak issues"]
      },
      {
        version: "2.0.5",
        date: "2024-01-08",
        changes: ["Bug fixes for edge cases", "Updated API documentation"]
      },
      {
        version: "2.0.0",
        date: "2023-12-20",
        changes: ["Major architecture overhaul", "Added support for GPT-4", "New streaming capabilities"]
      }
    ],
    features: [
      "Real-time text processing",
      "Custom model fine-tuning",
      "Multi-language support",
      "Streaming API",
      "Batch processing",
      "Advanced prompt engineering"
    ],
    requirements: {
      memory: "2GB RAM minimum",
      storage: "500MB disk space",
      network: "Stable internet connection",
      apiKeys: "OpenAI API key required"
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div 
            className="h-64 bg-cover bg-center rounded-xl relative overflow-hidden mb-6"
            style={{ backgroundImage: `url(${tool.cover})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{tool.name}</h1>
                  <p className="text-lg opacity-90">{tool.description}</p>
                </div>
                <Badge className="bg-green-500 text-white">
                  {tool.safetyLevel}
                </Badge>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{tool.rating}</span>
                <span className="text-gray-500">({tool.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <Download className="h-5 w-5" />
                <span>{tool.downloads.toLocaleString()} downloads</span>
              </div>
              <Badge variant="secondary">{tool.category}</Badge>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`h-4 w-4 mr-2 ${isLiked ? 'fill-current text-red-500' : ''}`} />
                {isLiked ? 'Liked' : 'Like'}
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button className="bg-violet-600 hover:bg-violet-700 px-8">
                <Coins className="h-4 w-4 mr-2" />
                Install for {tool.price} PPT
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="demo">Live Demo</TabsTrigger>
                <TabsTrigger value="docs">Documentation</TabsTrigger>
                <TabsTrigger value="changelog">Changelog</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About this Tool</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      {tool.longDescription}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {tool.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="h-2 w-2 bg-violet-500 rounded-full" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Model Compatibility</h4>
                      <div className="flex flex-wrap gap-2">
                        {tool.modelCompatible.map((model, index) => (
                          <Badge key={index} variant="secondary">
                            {model}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">System Requirements</h4>
                      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Memory:</span>
                          <span className="text-sm font-medium">{tool.requirements.memory}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Storage:</span>
                          <span className="text-sm font-medium">{tool.requirements.storage}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Network:</span>
                          <span className="text-sm font-medium">{tool.requirements.network}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">API Keys:</span>
                          <span className="text-sm font-medium">{tool.requirements.apiKeys}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="demo" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Play className="h-5 w-5 mr-2 text-violet-600" />
                      Test Module Live
                    </CardTitle>
                    <CardDescription>
                      Try out the module functionality with sample inputs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <Code className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="font-semibold text-gray-700 mb-2">Interactive Demo</h3>
                      <p className="text-gray-500 mb-4">
                        Live demo interface would be embedded here allowing users to test the module
                        with real inputs and see outputs in real-time.
                      </p>
                      <Button className="bg-violet-600 hover:bg-violet-700">
                        <Play className="h-4 w-4 mr-2" />
                        Launch Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="docs" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Quick Start Guide</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Get up and running with the GPT-4 Text Processor in minutes.
                        </p>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Guide
                        </Button>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">API Reference</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Complete API documentation with examples and code samples.
                        </p>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View API Docs
                        </Button>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Examples</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Sample implementations and use cases to help you get started.
                        </p>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Examples
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="changelog" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GitBranch className="h-5 w-5 mr-2 text-violet-600" />
                      Version History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {tool.changelog.map((release, index) => (
                        <div key={index} className="border-l-2 border-violet-200 pl-4">
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge variant="outline">v{release.version}</Badge>
                            <span className="text-sm text-gray-500 flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {release.date}
                            </span>
                          </div>
                          <ul className="space-y-1">
                            {release.changes.map((change, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start">
                                <span className="text-violet-500 mr-2">•</span>
                                {change}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Developer Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Developer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src={tool.developer.avatar} 
                    alt={tool.developer.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{tool.developer.name}</h4>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span>{tool.developer.reputation}</span>
                      <span>• {tool.developer.modules} modules</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  View Profile
                </Button>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-violet-600 mb-1">
                    {tool.price} PPT
                  </div>
                  <div className="text-sm text-gray-500">One-time purchase</div>
                </div>
                <Button className="w-full bg-violet-600 hover:bg-violet-700 mb-3">
                  <Coins className="h-4 w-4 mr-2" />
                  Purchase & Install
                </Button>
                <div className="text-center">
                  <Button variant="link" className="text-sm text-violet-600">
                    Need more PPT? Buy tokens →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>5 Stars</span>
                    <span>{Math.round(tool.reviews * 0.7)}</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>4 Stars</span>
                    <span>{Math.round(tool.reviews * 0.2)}</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>3 Stars</span>
                    <span>{Math.round(tool.reviews * 0.05)}</span>
                  </div>
                  <Progress value={5} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>2 Stars</span>
                    <span>{Math.round(tool.reviews * 0.03)}</span>
                  </div>
                  <Progress value={3} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>1 Star</span>
                    <span>{Math.round(tool.reviews * 0.02)}</span>
                  </div>
                  <Progress value={2} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolProfile;