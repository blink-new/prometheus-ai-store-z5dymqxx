import { useState } from 'react';
import { 
  Upload, 
  GitBranch, 
  Play, 
  BarChart3, 
  Coins, 
  Code, 
  Bot, 
  Plus,
  FileText,
  CheckCircle,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  Download
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Progress } from '../components/ui/progress';

const DeveloperConsole = () => {
  const [dragOver, setDragOver] = useState(false);

  const mockProjects = [
    {
      id: 1,
      name: "Smart Vision Analyzer",
      type: "tool",
      status: "published",
      version: "1.2.1",
      downloads: 5600,
      revenue: 1250,
      rating: 4.6,
      lastUpdated: "2024-01-15"
    },
    {
      id: 2,
      name: "Robotic Arm Controller",
      type: "skill",
      status: "under_review",
      version: "2.0.0",
      downloads: 890,
      revenue: 2100,
      rating: 4.8,
      lastUpdated: "2024-01-20"
    },
    {
      id: 3,
      name: "Natural Language Processor",
      type: "tool",
      status: "published",
      version: "3.1.5",
      downloads: 12400,
      revenue: 3200,
      rating: 4.9,
      lastUpdated: "2024-01-18"
    }
  ];

  const mockLogs = [
    {
      id: 1,
      project: "Smart Vision Analyzer",
      type: "deployment",
      message: "Successfully deployed to sandbox environment",
      timestamp: "2024-01-20 14:30:25",
      status: "success"
    },
    {
      id: 2,
      project: "Robotic Arm Controller",
      type: "test",
      message: "Safety test failed: Emergency stop response time exceeded threshold",
      timestamp: "2024-01-20 12:15:10",
      status: "error"
    },
    {
      id: 3,
      project: "Natural Language Processor",
      type: "review",
      message: "Code review completed - approved for publication",
      timestamp: "2024-01-20 09:45:33",
      status: "success"
    },
    {
      id: 4,
      project: "Smart Vision Analyzer",
      type: "test",
      message: "Performance benchmark completed - 15% improvement over previous version",
      timestamp: "2024-01-19 16:22:18",
      status: "info"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-700';
      case 'under_review': return 'bg-yellow-100 text-yellow-700';
      case 'draft': return 'bg-gray-100 text-gray-700';
      case 'rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getLogStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'info': return <AlertTriangle className="h-4 w-4 text-blue-500" />;
      default: return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    // Handle file drop logic here
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Developer Console</h1>
            <p className="text-gray-600">Manage your AI modules, track performance, and earn rewards</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            <Card className="p-4">
              <div className="flex items-center space-x-3">
                <Coins className="h-8 w-8 text-violet-600" />
                <div>
                  <div className="text-2xl font-bold text-violet-700">2,850 PPT</div>
                  <div className="text-sm text-gray-500">Total Earned</div>
                </div>
              </div>
            </Card>
            <Button className="bg-violet-600 hover:bg-violet-700">
              <Plus className="h-4 w-4 mr-2" />
              New Module
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                  <Code className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
                  <Download className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18,890</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                  <Coins className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,850 PPT</div>
                  <p className="text-xs text-muted-foreground">+22% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.7</div>
                  <p className="text-xs text-muted-foreground">+0.2 from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockProjects.slice(0, 3).map((project) => (
                      <div key={project.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          {project.type === 'tool' ? (
                            <Code className="h-5 w-5 text-violet-600" />
                          ) : (
                            <Bot className="h-5 w-5 text-violet-600" />
                          )}
                          <div>
                            <h4 className="font-medium">{project.name}</h4>
                            <p className="text-sm text-gray-500">v{project.version}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status.replace('_', ' ')}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Token Rewards Estimator</CardTitle>
                  <CardDescription>
                    Estimate earnings based on download projections
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Module Price (PPT)</label>
                      <Input type="number" placeholder="25" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Expected Downloads/Month</label>
                      <Input type="number" placeholder="100" className="mt-1" />
                    </div>
                    <div className="bg-violet-50 rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-violet-700">2,500 PPT</div>
                        <div className="text-sm text-gray-600">Estimated monthly earnings</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="upload" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Upload className="h-5 w-5 mr-2 text-violet-600" />
                    Upload Module
                  </CardTitle>
                  <CardDescription>
                    Upload your AI module files or sync from GitHub
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Drag & Drop Area */}
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      dragOver 
                        ? 'border-violet-400 bg-violet-50' 
                        : 'border-gray-300 hover:border-violet-400'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      Drag & drop your files here
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Support for .zip, .tar.gz, or individual Python/JavaScript files
                    </p>
                    <Button variant="outline">
                      Choose Files
                    </Button>
                  </div>

                  {/* GitHub Sync */}
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <GitBranch className="h-4 w-4 mr-2" />
                      GitHub Sync
                    </h4>
                    <div className="space-y-3">
                      <Input placeholder="https://github.com/username/repo" />
                      <div className="flex space-x-2">
                        <Input placeholder="main" className="flex-1" />
                        <Button>Connect</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Module Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Module Name</label>
                    <Input placeholder="My Awesome AI Module" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Type</label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select module type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tool">AI Tool (Software)</SelectItem>
                        <SelectItem value="skill">Robot Skill (Embodied)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Category</label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nlp">Natural Language Processing</SelectItem>
                        <SelectItem value="vision">Computer Vision</SelectItem>
                        <SelectItem value="audio">Audio Processing</SelectItem>
                        <SelectItem value="robotics">Robotics</SelectItem>
                        <SelectItem value="ml">Machine Learning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <Textarea 
                      placeholder="Describe what your module does..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Price (PPT)</label>
                    <Input type="number" placeholder="25" className="mt-1" />
                  </div>
                  <Button className="w-full bg-violet-600 hover:bg-violet-700">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload & Deploy to Sandbox
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>My Projects</CardTitle>
                <CardDescription>
                  Manage all your AI modules and robotics skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockProjects.map((project) => (
                    <div key={project.id} className="border rounded-lg p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-violet-100 rounded-lg">
                            {project.type === 'tool' ? (
                              <Code className="h-6 w-6 text-violet-600" />
                            ) : (
                              <Bot className="h-6 w-6 text-violet-600" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{project.name}</h3>
                            <p className="text-gray-500 mb-2">Version {project.version}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>{project.downloads.toLocaleString()} downloads</span>
                              <span>{project.revenue} PPT earned</span>
                              <span>★ {project.rating}</span>
                              <span>Updated {project.lastUpdated}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(project.status)}>
                            {project.status.replace('_', ' ')}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <Play className="h-4 w-4 mr-2" />
                            Test
                          </Button>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Download Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Download analytics chart would be displayed here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">This Month</span>
                      <span className="font-medium">450 PPT</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Last Month</span>
                      <span className="font-medium">380 PPT</span>
                    </div>
                    <Progress value={63} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Average</span>
                      <span className="font-medium">320 PPT</span>
                    </div>
                    <Progress value={53} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Top Performing Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockProjects.map((project, index) => (
                      <div key={project.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg font-bold text-gray-400">#{index + 1}</span>
                          <div>
                            <h4 className="font-medium">{project.name}</h4>
                            <p className="text-sm text-gray-500">{project.downloads.toLocaleString()} downloads</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{project.revenue} PPT</div>
                          <div className="text-sm text-gray-500">★ {project.rating}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="logs" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Activity Logs</CardTitle>
                <CardDescription>
                  Development, testing, and deployment history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockLogs.map((log) => (
                    <div key={log.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                      {getLogStatusIcon(log.status)}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium">{log.project}</h4>
                          <Badge variant="outline" className="text-xs">
                            {log.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{log.message}</p>
                        <p className="text-xs text-gray-400">{log.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DeveloperConsole;