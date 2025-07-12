import { useState } from 'react';
import { 
  Coins, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  CreditCard, 
  Trophy, 
  Star,
  Users,
  Calendar,
  BarChart3,
  Wallet,
  ArrowUpDown,
  Plus,
  Minus
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const TokenMarketplace = () => {
  const [buyAmount, setBuyAmount] = useState('');
  const [sellAmount, setSellAmount] = useState('');

  const tokenPrice = 2.45; // USD per PPT
  const priceChange = 0.12; // +$0.12 (5.1%)

  const topDevelopers = [
    {
      rank: 1,
      name: "AI Labs Inc.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      earnings: 12500,
      modules: 15,
      rating: 4.9,
      change: "+15%"
    },
    {
      rank: 2,
      name: "RoboTech Dynamics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      earnings: 8900,
      modules: 8,
      rating: 4.8,
      change: "+22%"
    },
    {
      rank: 3,
      name: "Neural Networks Co.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
      earnings: 7200,
      modules: 12,
      rating: 4.7,
      change: "+8%"
    },
    {
      rank: 4,
      name: "Vision Systems Ltd.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
      earnings: 6800,
      modules: 9,
      rating: 4.6,
      change: "+18%"
    },
    {
      rank: 5,
      name: "Cognitive Solutions",
      avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=100&h=100&fit=crop",
      earnings: 5400,
      modules: 6,
      rating: 4.8,
      change: "+12%"
    }
  ];

  const marketStats = [
    { label: "Market Cap", value: "$45.2M", change: "+5.2%", trend: "up" },
    { label: "24h Volume", value: "$2.1M", change: "-2.1%", trend: "down" },
    { label: "Total Supply", value: "18.5M PPT", change: "0%", trend: "neutral" },
    { label: "Active Developers", value: "12,847", change: "+3.8%", trend: "up" }
  ];

  const recentTransactions = [
    { type: "buy", amount: 500, price: 2.45, user: "Dev_Alex92", time: "2 min ago" },
    { type: "sell", amount: 250, price: 2.44, user: "RoboticsGuru", time: "5 min ago" },
    { type: "buy", amount: 1000, price: 2.46, user: "AI_Researcher", time: "8 min ago" },
    { type: "sell", amount: 750, price: 2.43, user: "TechInnovator", time: "12 min ago" },
    { type: "buy", amount: 300, price: 2.45, user: "SmartDev", time: "15 min ago" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Power Token (PPT) Marketplace</h1>
          <p className="text-gray-600">Buy, sell, and trade PPT tokens • Discover top-earning developers</p>
        </div>

        {/* Token Price Card */}
        <Card className="mb-8 bg-gradient-to-r from-violet-500 to-violet-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <Coins className="h-8 w-8" />
                  <div>
                    <h2 className="text-2xl font-bold">Power Token (PPT)</h2>
                    <p className="opacity-90">The utility token of Prometheus AI Store</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold">${tokenPrice}</div>
                  <div className={`flex items-center space-x-1 px-3 py-1 rounded-full ${
                    priceChange > 0 ? 'bg-green-500/20' : 'bg-red-500/20'
                  }`}>
                    {priceChange > 0 ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    <span>+${priceChange} (5.1%)</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm opacity-90">Your Balance</div>
                <div className="text-2xl font-bold">1,250 PPT</div>
                <div className="text-sm opacity-75">≈ $3,062.50</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {marketStats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                {stat.trend === 'up' ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : stat.trend === 'down' ? (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                ) : (
                  <Minus className="h-4 w-4 text-gray-500" />
                )}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${
                  stat.trend === 'up' ? 'text-green-600' : 
                  stat.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {stat.change} from yesterday
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="trade" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="trade">Trade</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="trade" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Trading Panel */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Buy Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-green-600 flex items-center">
                        <Plus className="h-5 w-5 mr-2" />
                        Buy PPT
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Amount (PPT)</label>
                        <Input
                          type="number"
                          value={buyAmount}
                          onChange={(e) => setBuyAmount(e.target.value)}
                          placeholder="0"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Payment Method</label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="card">Credit Card</SelectItem>
                            <SelectItem value="bank">Bank Transfer</SelectItem>
                            <SelectItem value="crypto">Cryptocurrency</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="flex justify-between text-sm">
                          <span>You pay:</span>
                          <span className="font-medium">
                            ${buyAmount ? (parseFloat(buyAmount) * tokenPrice).toFixed(2) : '0.00'}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>You receive:</span>
                          <span className="font-medium">{buyAmount || '0'} PPT</span>
                        </div>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Buy PPT
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Sell Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-red-600 flex items-center">
                        <Minus className="h-5 w-5 mr-2" />
                        Sell PPT
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Amount (PPT)</label>
                        <Input
                          type="number"
                          value={sellAmount}
                          onChange={(e) => setSellAmount(e.target.value)}
                          placeholder="0"
                          className="mt-1"
                        />
                        <div className="text-xs text-gray-500 mt-1">
                          Available: 1,250 PPT
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Withdraw to</label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select withdrawal method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bank">Bank Account</SelectItem>
                            <SelectItem value="wallet">Crypto Wallet</SelectItem>
                            <SelectItem value="paypal">PayPal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="bg-red-50 rounded-lg p-3">
                        <div className="flex justify-between text-sm">
                          <span>You sell:</span>
                          <span className="font-medium">{sellAmount || '0'} PPT</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>You receive:</span>
                          <span className="font-medium">
                            ${sellAmount ? (parseFloat(sellAmount) * tokenPrice).toFixed(2) : '0.00'}
                          </span>
                        </div>
                      </div>
                      <Button variant="destructive" className="w-full">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Sell PPT
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Chart Placeholder */}
                <Card>
                  <CardHeader>
                    <CardTitle>Price Chart</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">PPT price chart would be displayed here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Market Activity */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <ArrowUpDown className="h-5 w-5 mr-2 text-violet-600" />
                      Recent Trades
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentTransactions.map((tx, index) => (
                        <div key={index} className="flex items-center justify-between p-2 border rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Badge variant={tx.type === 'buy' ? 'default' : 'secondary'} className={
                              tx.type === 'buy' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                            }>
                              {tx.type.toUpperCase()}
                            </Badge>
                            <div>
                              <div className="text-sm font-medium">{tx.amount} PPT</div>
                              <div className="text-xs text-gray-500">{tx.user}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium">${tx.price}</div>
                            <div className="text-xs text-gray-500">{tx.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
                  Top Earning Developers
                </CardTitle>
                <CardDescription>
                  Developers ranked by total PPT earnings this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topDevelopers.map((dev) => (
                    <div key={dev.rank} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          dev.rank === 1 ? 'bg-yellow-500' :
                          dev.rank === 2 ? 'bg-gray-400' :
                          dev.rank === 3 ? 'bg-amber-600' : 'bg-violet-500'
                        }`}>
                          {dev.rank}
                        </div>
                        <img 
                          src={dev.avatar} 
                          alt={dev.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h4 className="font-semibold">{dev.name}</h4>
                          <div className="flex items-center space-x-3 text-sm text-gray-500">
                            <span>{dev.modules} modules</span>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                              <span>{dev.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-violet-600">
                          {dev.earnings.toLocaleString()} PPT
                        </div>
                        <div className="text-sm text-green-600">{dev.change}</div>
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
                  <CardTitle>Market Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Market trend analytics would be displayed here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Token Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Developers</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-violet-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Staking</span>
                        <span>30%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Treasury</span>
                        <span>15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Liquidity</span>
                        <span>10%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wallet className="h-5 w-5 mr-2 text-violet-600" />
                  Transaction History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Plus className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium">Earned from "Smart Vision Analyzer"</div>
                        <div className="text-sm text-gray-500">Jan 20, 2024 • 14:30</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-medium">+125 PPT</div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <Minus className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <div className="font-medium">Staked for "Robotic Navigation"</div>
                        <div className="text-sm text-gray-500">Jan 19, 2024 • 09:15</div>
                      </div>
                    </div>
                    <div className="text-red-600 font-medium">-150 PPT</div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <CreditCard className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">Purchased PPT tokens</div>
                        <div className="text-sm text-gray-500">Jan 18, 2024 • 16:22</div>
                      </div>
                    </div>
                    <div className="text-blue-600 font-medium">+500 PPT</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TokenMarketplace;