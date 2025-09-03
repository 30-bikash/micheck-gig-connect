import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Music, Users, MapPin, Heart, ArrowRight, Mail, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import heroImage from "@/assets/music-hero.jpg";

const Index = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/267a2a38-4f0f-4b4f-9fb2-83322871e82a.png" 
              alt="MiCheck Logo" 
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-music-primary to-music-primary-light bg-clip-text text-transparent">MiCheck</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#artists" className="text-foreground hover:text-music-primary transition-all duration-300 hover:scale-105">For Artists</a>
            <a href="#venues" className="text-foreground hover:text-music-primary transition-all duration-300 hover:scale-105">For Venues</a>
            <a href="#fans" className="text-foreground hover:text-music-primary transition-all duration-300 hover:scale-105">For Fans</a>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {user ? (
              <Button variant="ghost" onClick={signOut}>
                Sign Out
              </Button>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/signin">Sign In</Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/signup">Join Now</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-music-primary/90 to-music-primary-light/80" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The Professional Network for Musicians
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Connect artists, venues, and fans. Find gigs, book talent, and build your music career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="text-lg px-8 border-white/30 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Built for the Music Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're an artist, venue, or fan, MiCheck connects you with the right opportunities and people.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Artists */}
            <Card id="artists" className="border-music-primary/20 hover:shadow-music transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-music-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground">For Artists</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  Showcase your talent, apply for gigs, and connect with venues and fans.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-music-accent rounded-full" />
                    Create professional profiles
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-music-accent rounded-full" />
                    Apply for gigs and opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-music-accent rounded-full" />
                    Build your fan base
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-music-accent rounded-full" />
                    Network with industry professionals
                  </li>
                </ul>
                <Button variant="music" className="w-full">Join as Artist</Button>
              </CardContent>
            </Card>

            {/* Venues */}
            <Card id="venues" className="border-music-primary/20 hover:shadow-music transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-music-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground">For Venues</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  List your venue, post gigs, and discover amazing local talent.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-music-accent rounded-full" />
                    List and promote your venue
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-music-accent rounded-full" />
                    Post gigs and job opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-music-accent rounded-full" />
                    Browse and book artists
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-music-accent rounded-full" />
                    Manage bookings efficiently
                  </li>
                </ul>
                <Button variant="music" className="w-full">Join as Venue</Button>
              </CardContent>
            </Card>

            {/* Fans */}
            <Card id="fans" className="border-music-primary/20 hover:shadow-music transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-music-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground">For Fans</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  Support your favorite artists and hire local talent for your events.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-music-accent rounded-full" />
                    Discover local artists
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-music-accent rounded-full" />
                    Support musicians directly
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-music-accent rounded-full" />
                    Hire artists for events
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-music-accent rounded-full" />
                    Stay updated on shows
                  </li>
                </ul>
                <Button variant="music" className="w-full">Join as Fan</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Mail className="h-16 w-16 text-music-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Connected to the Music Scene
            </h2>
            <p className="text-xl text-muted-foreground">
              Get the latest updates on gigs, new artists, and industry news delivered to your inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1"
            />
            <Button variant="hero" size="default">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Join over 10,000 music industry professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-music-primary text-white py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/267a2a38-4f0f-4b4f-9fb2-83322871e82a.png" 
                  alt="MiCheck Logo" 
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xl font-bold">MiCheck</span>
              </div>
              <p className="text-white/80">
                The professional network connecting artists, venues, and fans in the music industry.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">For Artists</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Find Gigs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Create Profile</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Build Network</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">For Venues</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Post Gigs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Find Artists</a></li>
                <li><a href="#" className="hover:text-white transition-colors">List Venue</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-white/60">
                © 2024 MiCheck. All rights reserved. Connecting the music industry, one connection at a time.
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-white/80">Follow us:</span>
                <div className="flex gap-3">
                  <a href="https://twitter.com/micheck" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="https://facebook.com/micheck" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://instagram.com/micheck" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://linkedin.com/company/micheck" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;