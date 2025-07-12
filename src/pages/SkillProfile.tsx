import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Star, 
  Download, 
  Coins, 
  Shield, 
  Bot, 
  Users, 
  Calendar,
  ExternalLink,
  Heart,
  Share2,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Lock,
  Zap
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Progress } from '../components/ui/progress';

const SkillProfile = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [stakingAmount, setStakingAmount] = useState(100);

  // Mock data - would come from API based on id
  const skill = {
    id: 1,
    name: "Autonomous Navigation",
    description: "Advanced pathfinding and obstacle avoidance for mobile robots with real-time environment mapping.",
    longDescription: "The Autonomous Navigation skill provides state-of-the-art pathfinding capabilities for mobile robots. Using advanced SLAM algorithms and real-time sensor fusion, this skill enables robots to navigate complex environments safely and efficiently.",
    category: "Robotics Navigation",
    price: 150,
    rating: 4.7,
    reviews: 89,
    downloads: 890,
    safetyLevel: "Verified",
    trustScore: 95,
    cyberButlerCompatible: true,
    developer: {
      name: "RoboTech Dynamics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      reputation: 4.8,
      skills: 8
    },
    requirements: {
      hardware: "Lidar sensor, IMU, wheel encoders",
      software: "ROS 2, Python 3.8+",
      memory: "4GB RAM minimum",
      processing: "ARM64 or x86_64 processor"
    },
    securityMetrics: {
      codeAudit: 98,
      behaviorTest: 95,
      failsafeScore: 97,
      ethicsCompliance: 94
    },
    useCases: [
      "Warehouse automation",
      "Service robots in hotels",
      "Autonomous delivery vehicles",
      "Manufacturing floor navigation",
      "Hospital logistics robots"
    ],
    testResults: [
      {
        date: "2024-01-20",
        testType: "Obstacle Avoidance",
        result: "Passed",
        score: 96,
        details: "Successfully avoided 482/500 obstacles in simulation"
      },
      {
        date: "2024-01-18",
        testType: "Path Efficiency",
        result: "Passed",
        score: 94,
        details: "Average path efficiency of 94% across 100 test scenarios"
      },
      {
        date: "2024-01-15",
        testType: "Failsafe Response",
        result: "Passed",
        score: 98,
        details: "Proper emergency stops in 98/100 critical scenarios"
      }
    ],
    cover: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
  };

  const getTrustScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getTestResultIcon = (result: string) => {
    switch (result) {
      case 'Passed': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Failed': return <XCircle className="h-4 w-4 text-red-500" />;
      default: return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div 
            className="h-64 bg-cover bg-center rounded-xl relative overflow-hidden mb-6"
            style={{ backgroundImage: `url(${skill.cover})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{skill.name}</h1>
                  <p className="text-lg opacity-90">{skill.description}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <Badge className="bg-green-500 text-white">
                    {skill.safetyLevel}
                  </Badge>
                  <div className="flex items-center space-x-2 bg-black/30 rounded-full px-3 py-1">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm font-medium">Trust: {skill.trustScore}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cyber Butler Compatibility Alert */}
          {skill.cyberButlerCompatible ? (
            <Alert className="mb-6 border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                <strong>Cyber Butler Compatible:</strong> This skill has been verified to work seamlessly with Cyber Butler systems.
              </AlertDescription>
            </Alert>
          ) : (
            <Alert className="mb-6 border-orange-200 bg-orange-50">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              <AlertDescription className="text-orange-800">
                <strong>Cyber Butler Incompatible:</strong> This skill requires additional integration work for Cyber Butler systems.
              </AlertDescription>
            </Alert>
          )}

          {/* Action Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{skill.rating}</span>
                <span className="text-gray-500">({skill.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <Download className="h-5 w-5" />
                <span>{skill.downloads.toLocaleString()} deployments</span>
              </div>
              <Badge variant="secondary">{skill.category}</Badge>
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
                <Lock className="h-4 w-4 mr-2" />
                Stake {skill.price} PPT to Deploy
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
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="tests">Test Results</TabsTrigger>
                <TabsTrigger value="deployment">Deployment</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About this Skill</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      {skill.longDescription}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3">Use Cases</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {skill.useCases.map((useCase, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Bot className="h-4 w-4 text-violet-500" />
                            <span className="text-sm">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Hardware Requirements</h4>
                      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Hardware:</span>
                          <span className="text-sm font-medium">{skill.requirements.hardware}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Software:</span>
                          <span className="text-sm font-medium">{skill.requirements.software}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Memory:</span>
                          <span className="text-sm font-medium">{skill.requirements.memory}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Processing:</span>
                          <span className="text-sm font-medium">{skill.requirements.processing}</span>
                        </div>
                      </div>
                    </div>

                    <Alert className="border-violet-200 bg-violet-50">
                      <Lock className="h-4 w-4 text-violet-600" />
                      <AlertDescription className="text-violet-800">
                        <strong>Security Notice:</strong> This skill requires token staking for activation as a security measure. 
                        Staked tokens are returned upon successful completion or if the skill is safely deactivated.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-violet-600" />
                        Security Metrics
                      </CardTitle>
                      <CardDescription>
                        Comprehensive security analysis and safety scores
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Code Audit Score</span>
                          <span className="font-medium">{skill.securityMetrics.codeAudit}%</span>
                        </div>
                        <Progress value={skill.securityMetrics.codeAudit} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Behavior Testing</span>
                          <span className="font-medium">{skill.securityMetrics.behaviorTest}%</span>
                        </div>
                        <Progress value={skill.securityMetrics.behaviorTest} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Failsafe Systems</span>
                          <span className="font-medium">{skill.securityMetrics.failsafeScore}%</span>
                        </div>
                        <Progress value={skill.securityMetrics.failsafeScore} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Ethics Compliance</span>
                          <span className="font-medium">{skill.securityMetrics.ethicsCompliance}%</span>
                        </div>
                        <Progress value={skill.securityMetrics.ethicsCompliance} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Safety Measures</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm">Emergency stop protocols verified</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm">Collision avoidance systems active</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm">Human override capabilities enabled</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm">Real-time monitoring integrated</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="tests" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Test Results</CardTitle>
                    <CardDescription>
                      Simulated and real-world testing data
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {skill.testResults.map((test, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              {getTestResultIcon(test.result)}
                              <span className="font-medium">{test.testType}</span>
                              <Badge variant={test.result === 'Passed' ? 'default' : 'destructive'}>
                                {test.result}
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-500">
                              <Calendar className="h-4 w-4 inline mr-1" />
                              {test.date}
                            </div>
                          </div>
                          <div className="mb-2">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Score</span>
                              <span className="font-medium">{test.score}%</span>
                            </div>
                            <Progress value={test.score} className="h-2" />
                          </div>
                          <p className="text-sm text-gray-600">{test.details}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="deployment" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Deployment Instructions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Alert className="border-blue-200 bg-blue-50">
                        <Zap className="h-4 w-4 text-blue-600" />
                        <AlertDescription className="text-blue-800">
                          <strong>Token Staking Required:</strong> You must stake {skill.price} PPT tokens before deploying this skill. 
                          Tokens will be locked during operation and returned upon safe deactivation.
                        </AlertDescription>
                      </Alert>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Deployment Steps</h4>
                        <ol className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <span className="bg-violet-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">1</span>
                            <span>Verify hardware compatibility and requirements</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="bg-violet-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">2</span>
                            <span>Stake required PPT tokens ({skill.price} PPT)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="bg-violet-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">3</span>
                            <span>Download and install skill package</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="bg-violet-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">4</span>
                            <span>Run initial calibration and safety checks</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="bg-violet-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">5</span>
                            <span>Activate skill with monitoring enabled</span>
                          </li>
                        </ol>
                      </div>
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
                    src={skill.developer.avatar} 
                    alt={skill.developer.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{skill.developer.name}</h4>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span>{skill.developer.reputation}</span>
                      <span>• {skill.developer.skills} skills</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  View Profile
                </Button>
              </CardContent>
            </Card>

            {/* Trust Score */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-violet-600" />
                  Trust Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className={`text-4xl font-bold mb-1 ${getTrustScoreColor(skill.trustScore)}`}>
                    {skill.trustScore}%
                  </div>
                  <div className="text-sm text-gray-500">Overall Trust Rating</div>
                </div>
                <Progress value={skill.trustScore} className="mb-4" />
                <div className="text-sm text-gray-600 text-center">
                  Based on security audits, testing results, and community feedback
                </div>
              </CardContent>
            </Card>

            {/* Staking Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Staking & Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-violet-600 mb-1">
                    {skill.price} PPT
                  </div>
                  <div className="text-sm text-gray-500">Required Stake</div>
                </div>
                
                <Alert className="mb-4 border-amber-200 bg-amber-50">
                  <Lock className="h-4 w-4 text-amber-600" />
                  <AlertDescription className="text-amber-800 text-xs">
                    Tokens are staked during operation and returned upon safe deactivation
                  </AlertDescription>
                </Alert>

                <Button className="w-full bg-violet-600 hover:bg-violet-700 mb-3">
                  <Lock className="h-4 w-4 mr-2" />
                  Stake & Deploy
                </Button>
                <div className="text-center">
                  <Button variant="link" className="text-sm text-violet-600">
                    Need more PPT? Buy tokens →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Compatibility */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Compatibility</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Cyber Butler</span>
                    <Badge variant={skill.cyberButlerCompatible ? "default" : "secondary"}>
                      {skill.cyberButlerCompatible ? 'Compatible' : 'Not Compatible'}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">ROS 2</span>
                    <Badge variant="default">Compatible</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">ARM64</span>
                    <Badge variant="default">Supported</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">x86_64</span>
                    <Badge variant="default">Supported</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillProfile;