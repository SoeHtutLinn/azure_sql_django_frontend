import React from 'react';
import { LayoutDashboard, Store, ShoppingBag, Users, ShoppingCart, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Link } from 'react-router-dom';

const StatCard = ({ title, value, icon: Icon, to, color }) => (
    <Link to={to} className="block group">
        <Card className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-slate-800/50 backdrop-blur-xl">
            <CardContent className="flex items-center justify-between p-6">
                <div>
                    <p className="text-sm font-medium text-slate-400">{title}</p>
                    <h3 className="text-3xl font-bold text-white mt-1 group-hover:text-primary transition-colors">{value}</h3>
                </div>
                <div className={`p-4 rounded-xl bg-gradient-to-br ${color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={24} />
                </div>
            </CardContent>
        </Card>
    </Link>
);

const Dashboard = () => {
    // Mock data for initial display
    const stats = [
        { title: 'Total Stores', value: '12', icon: Store, to: '/stores', color: 'from-blue-500 to-cyan-500' },
        { title: 'Total Products', value: '48', icon: ShoppingBag, to: '/products', color: 'from-purple-500 to-pink-500' },
        { title: 'Active Orders', value: '24', icon: ShoppingCart, to: '/orders', color: 'from-orange-500 to-red-500' },
        { title: 'Total Users', value: '156', icon: Users, to: '/users', color: 'from-emerald-500 to-green-500' },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Dashboard Overview</h1>
                <p className="text-slate-400 mt-2">Welcome back to Nexus Admin.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <StatCard key={stat.title} {...stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="min-h-[300px] bg-slate-800/30">
                    <CardContent>
                        <div className="flex items-center gap-2 mb-6">
                            <TrendingUp className="text-primary" />
                            <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <div className="flex-1">
                                        <p className="text-sm text-white">New order received #102{i}</p>
                                        <p className="text-xs text-slate-500">2 minutes ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="min-h-[300px] bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-indigo-500/10">
                    <CardContent className="flex flex-col items-center justify-center h-full text-center space-y-4">
                        <div className="p-4 rounded-full bg-indigo-500/10 animate-pulse">
                            <Store size={48} className="text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Manage Stores</h3>
                        <p className="text-slate-400 max-w-sm">Add or update store locations to expand your business reach.</p>
                        <Link to="/stores" className="text-primary hover:text-white transition-colors">Go to Stores &rarr;</Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
