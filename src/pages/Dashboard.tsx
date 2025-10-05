import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Building2, LogOut, User, Mail, Shield } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface Profile {
  name: string | null;
  email: string | null;
}

interface UserRole {
  role: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading, signOut } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [userRole, setUserRole] = useState<string>('user');
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    if (!user) return;

    try {
      // Fetch profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('name, email')
        .eq('id', user.id)
        .single();

      if (profileError) throw profileError;
      setProfile(profileData);

      // Fetch role
      const { data: roleData, error: roleError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (roleError) throw roleError;
      if (roleData) setUserRole(roleData.role);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoadingData(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
  };

  if (loading || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-primary">Loading...</div>
      </div>
    );
  }

  if (!user || !profile) {
    return null;
  }

  const initials = profile.name
    ?.split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase() || 'U';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-smooth"
            onClick={() => navigate('/')}
          >
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">Prime Properties</span>
          </div>
          <Button 
            variant="outline" 
            onClick={handleSignOut}
            className="gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Welcome Section */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Welcome back, {profile.name || 'User'}!
            </h1>
            <p className="text-muted-foreground">
              Manage your profile and explore premium properties
            </p>
          </div>

          {/* Profile Card */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Information
              </CardTitle>
              <CardDescription>
                Your account details and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="h-24 w-24 text-2xl">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {initials}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-4 text-center md:text-left w-full">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground justify-center md:justify-start">
                      <User className="h-4 w-4" />
                      <span className="text-sm font-medium">Full Name</span>
                    </div>
                    <p className="text-lg font-semibold">{profile.name || 'Not set'}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground justify-center md:justify-start">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm font-medium">Email</span>
                    </div>
                    <p className="text-lg font-semibold">{profile.email}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground justify-center md:justify-start">
                      <Shield className="h-4 w-4" />
                      <span className="text-sm font-medium">Account Type</span>
                    </div>
                    <p className="text-lg font-semibold capitalize">{userRole}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Explore properties and manage your preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button 
                  className="w-full h-auto py-6 flex-col gap-2"
                  onClick={() => navigate('/')}
                >
                  <Building2 className="h-6 w-6" />
                  <span>Browse Properties</span>
                </Button>
                <Button 
                  variant="outline"
                  className="w-full h-auto py-6 flex-col gap-2"
                  onClick={() => navigate('/')}
                >
                  <Mail className="h-6 w-6" />
                  <span>Contact Agent</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
