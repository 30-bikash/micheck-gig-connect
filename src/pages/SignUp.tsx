import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff, Music, Users, MapPin, Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { ThemeToggle } from "@/components/theme-toggle";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signUp, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      return;
    }
    
    setIsLoading(true);
    
    const { error } = await signUp(email, password, userType);
    
    if (!error) {
      navigate("/");
    }
    
    setIsLoading(false);
  };

  const getUserTypeIcon = (type: string) => {
    switch (type) {
      case "artist":
        return <Music className="h-4 w-4" />;
      case "venue":
        return <MapPin className="h-4 w-4" />;
      case "fan":
        return <Heart className="h-4 w-4" />;
      default:
        return <Users className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute top-4 left-4">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/267a2a38-4f0f-4b4f-9fb2-83322871e82a.png" 
            alt="MiCheck Logo" 
            className="w-8 h-8 rounded-lg"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-music-primary to-music-primary-light bg-clip-text text-transparent">
            MiCheck
          </span>
        </Link>
      </div>
      
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-md border-music-primary/20">
        <CardHeader className="space-y-1 text-center">
          <div className="w-16 h-16 bg-music-primary rounded-full flex items-center justify-center mx-auto mb-4">
            {getUserTypeIcon(userType)}
          </div>
          <CardTitle className="text-2xl">Join MiCheck</CardTitle>
          <p className="text-muted-foreground">
            Create your account and connect with the music industry
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="userType">I am a...</Label>
              <Select value={userType} onValueChange={setUserType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="artist">
                    <div className="flex items-center gap-2">
                      <Music className="h-4 w-4" />
                      Artist
                    </div>
                  </SelectItem>
                  <SelectItem value="venue">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Venue
                    </div>
                  </SelectItem>
                  <SelectItem value="fan">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Fan
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {password !== confirmPassword && confirmPassword && (
                <p className="text-sm text-destructive">Passwords do not match</p>
              )}
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              variant="hero"
              disabled={isLoading || password !== confirmPassword}
            >
              {isLoading ? "Creating Account..." : "Join Now"}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link 
                to="/signin" 
                className="text-music-primary hover:text-music-primary-light font-semibold"
              >
                Sign In
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;