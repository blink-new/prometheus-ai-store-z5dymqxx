import { useState } from 'react';
import { 
  Shield, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Clock, 
  Eye, 
  FileText, 
  Bot,
  Users,
  Gavel,
  TrendingUp,
  Target,
  Activity
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Textarea } from '../components/ui/textarea';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Progress } from '../components/ui/progress';

const Governance = () => {
  const [selectedSubmission, setSelectedSubmission] = useState<number | null>(null);

  const mockSubmissions = [
    {
      id: 1,
      name: "Advanced Facial Recognition",
      developer: "VisionAI Corp",
      type: "skill",
      submittedDate: "2024-01-20",
      status: "pending",
      riskLevel: "high",
      description: "Facial recognition system for security applications",
      securityScore: 72,
      ethicsScore: 45,
      safetyChecklist: {
        codeAudit: true,
        behaviorTest: true,
        failsafeTest: false,
        ethicsReview: false,
        documentationComplete: true
      },
      testLogs: [
        "Security scan completed - 3 vulnerabilities found",
        "Behavioral test passed - no unexpected actions detected",
        "Ethics review flagged: potential privacy concerns",
        "Failsafe test pending - awaiting developer fixes"
      ]
    },
    {
      id: 2,
      name: "Warehouse Navigation Bot",
      developer: "LogiTech Solutions",
      type: "skill",
      submittedDate: "2024-01-18",
      status: "approved",
      riskLevel: "medium",
      description: "Autonomous navigation for warehouse environments",
      securityScore: 94,
      ethicsScore: 88,
      safetyChecklist: {
        codeAudit: true,
        behaviorTest: true,
        failsafeTest: true,
        ethicsReview: true,
        documentationComplete: true
      },
      testLogs: [
        "All security tests passed",
        "Behavioral analysis complete - safe operation confirmed",
        "Ethics review passed - no ethical concerns",
        "Failsafe mechanisms tested and verified"
      ]
    },
    {
      id: 3,
      name: "Emotional AI Companion",
      developer: "EmpathyAI Inc",
      type: "skill",
      submittedDate: "2024-01-15",
      status: "rejected",
      riskLevel: "high",
      description: "AI companion for emotional support and interaction",
      securityScore: 81,
      ethicsScore: 34,
      safetyChecklist: {
        codeAudit: true,
        behaviorTest: false,
        failsafeTest: false,
        ethicsReview: false,
        documentationComplete: false
      },
      testLogs: [
        "Ethics review failed - manipulation potential detected",
        "Behavioral test failed - inappropriate responses in edge cases",
        "Documentation incomplete - missing safety protocols",
        "Rejected pending major revisions"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-700';
      case 'rejected': return 'bg-red-100 text-red-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'high': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'rejected': return <XCircle className="h-5 w-5 text-red-500" />;
      case 'pending': return <Clock className="h-5 w-5 text-yellow-500" />;
      default: return <AlertTriangle className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Governance & Moderation</h1>
          <p className="text-gray-600">Review and moderate robotics skills for safety and ethics compliance</p>
        </div>

        <Tabs defaultValue="queue" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="queue">Review Queue</TabsTrigger>
            <TabsTrigger value="dashboard">Safety Dashboard</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="queue" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Submissions List */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Pending Reviews</CardTitle>
                    <CardDescription>
                      Robotics skills awaiting safety and ethics approval
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockSubmissions.map((submission) => (
                        <div 
                          key={submission.id} 
                          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                            selectedSubmission === submission.id ? 'border-violet-400 bg-violet-50' : 'hover:border-gray-300'
                          }`}
                          onClick={() => setSelectedSubmission(submission.id)}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-start space-x-3">
                              {getStatusIcon(submission.status)}
                              <div>
                                <h3 className="font-semibold">{submission.name}</h3>
                                <p className="text-sm text-gray-600">{submission.developer}</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end space-y-1">
                              <Badge className={getStatusColor(submission.status)}>
                                {submission.status}
                              </Badge>
                              <Badge className={getRiskColor(submission.riskLevel)}>
                                {submission.riskLevel} risk
                              </Badge>
                            </div>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-3">{submission.description}</p>
                          
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>Submitted: {submission.submittedDate}</span>
                            <div className="flex items-center space-x-4">
                              <span>Security: {submission.securityScore}%</span>
                              <span>Ethics: {submission.ethicsScore}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Review Panel */}
              <div>
                {selectedSubmission ? (
                  <ReviewPanel 
                    submission={mockSubmissions.find(s => s.id === selectedSubmission)!} 
                  />
                ) : (
                  <Card>
                    <CardContent className="flex items-center justify-center h-64">
                      <div className="text-center">
                        <Eye className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">Select a submission to review</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dashboard" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">+2 from yesterday</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Approved Today</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+5 from yesterday</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rejected</CardTitle>
                  <XCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">-1 from yesterday</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Review Time</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.4h</div>
                  <p className="text-xs text-muted-foreground">-0.3h from yesterday</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Safety Checklist Template</CardTitle>
                  <CardDescription>
                    Standard safety requirements for robotics skills
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Code security audit completed</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Behavioral testing passed</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Failsafe mechanisms verified</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Ethics review completed</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Documentation complete</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Risk Assessment Matrix</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Low Risk Skills</span>
                        <span className="text-green-600 font-medium">67%</span>
                      </div>
                      <Progress value={67} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Medium Risk Skills</span>
                        <span className="text-yellow-600 font-medium">25%</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>High Risk Skills</span>
                        <span className="text-red-600 font-medium">8%</span>
                      </div>
                      <Progress value={8} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Review Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Review performance analytics would be displayed here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Safety Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Average Security Score</span>
                        <span className="font-medium">87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Average Ethics Score</span>
                        <span className="font-medium">79%</span>
                      </div>
                      <Progress value={79} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Approval Rate</span>
                        <span className="font-medium">73%</span>
                      </div>
                      <Progress value={73} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Review Speed</span>
                        <span className="font-medium">2.4h avg</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Review Settings</CardTitle>
                  <CardDescription>
                    Configure governance and moderation parameters
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Minimum Security Score</label>
                    <div className="mt-1 text-2xl font-bold text-violet-600">85%</div>
                    <Progress value={85} className="h-2 mt-2" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Minimum Ethics Score</label>
                    <div className="mt-1 text-2xl font-bold text-violet-600">75%</div>
                    <Progress value={75} className="h-2 mt-2" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Auto-approve Low Risk</label>
                    <div className="mt-1">
                      <Badge className="bg-green-100 text-green-700">Enabled</Badge>
                    </div>
                  </div>
                  <Button className="w-full">Update Settings</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Moderator Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        JD
                      </div>
                      <div>
                        <div className="font-medium">Dr. Jane Smith</div>
                        <div className="text-sm text-gray-500">Lead Safety Auditor</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        MP
                      </div>
                      <div>
                        <div className="font-medium">Mike Peterson</div>
                        <div className="text-sm text-gray-500">Ethics Reviewer</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        AL
                      </div>
                      <div>
                        <div className="font-medium">Alex Lee</div>
                        <div className="text-sm text-gray-500">Security Analyst</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Review Panel Component
const ReviewPanel = ({ submission }: { submission: any }) => {
  const [reviewComment, setReviewComment] = useState('');

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bot className="h-5 w-5 mr-2 text-violet-600" />
          Review Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-2">{submission.name}</h4>
          <p className="text-sm text-gray-600">{submission.description}</p>
        </div>

        {/* Safety Checklist */}
        <div>
          <h4 className="font-semibold mb-3">Safety Checklist</h4>
          <div className="space-y-2">
            {Object.entries(submission.safetyChecklist).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                {value ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-500" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scores */}
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Security Score</span>
              <span className="font-medium">{submission.securityScore}%</span>
            </div>
            <Progress value={submission.securityScore} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Ethics Score</span>
              <span className="font-medium">{submission.ethicsScore}%</span>
            </div>
            <Progress value={submission.ethicsScore} className="h-2" />
          </div>
        </div>

        {/* Test Logs */}
        <div>
          <h4 className="font-semibold mb-3">Test Logs</h4>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {submission.testLogs.map((log: string, index: number) => (
              <div key={index} className="text-xs p-2 bg-gray-50 rounded font-mono">
                {log}
              </div>
            ))}
          </div>
        </div>

        {/* Review Comment */}
        <div>
          <label className="text-sm font-medium">Review Comment</label>
          <Textarea
            value={reviewComment}
            onChange={(e) => setReviewComment(e.target.value)}
            placeholder="Add your review comments..."
            className="mt-1"
            rows={3}
          />
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button className="flex-1 bg-green-600 hover:bg-green-700">
            <CheckCircle className="h-4 w-4 mr-2" />
            Approve
          </Button>
          <Button variant="destructive" className="flex-1">
            <XCircle className="h-4 w-4 mr-2" />
            Reject
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Governance;