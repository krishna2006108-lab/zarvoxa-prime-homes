import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Building2, LogOut, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import ListPropertyModal from "./ListPropertyModal";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/#properties" },
    { name: "Agents", path: "/#agents" },
    { name: "About", path: "/#about" },
    { name: "Contact", path: "/#contact" },
  ];

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.href = '/';
  };

  const NavLinks = ({ mobile = false }) => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.path}
          className={`${
            mobile ? "block py-3" : ""
          } text-sm font-medium transition-smooth hover:text-gold ${
            location.pathname === link.path ? "text-gold" : "text-foreground"
          }`}
        >
          {link.name}
        </a>
      ))}
    </>
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">Prime Properties</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLinks />
            </nav>

            <div className="flex items-center gap-4">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="hidden md:flex bg-gold hover:bg-gold-dark text-primary font-semibold shadow-gold transition-smooth"
              >
                List Your Property
              </Button>

              {user ? (
                <div className="hidden md:flex items-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => navigate('/dashboard')}
                    className="gap-2"
                  >
                    <User className="h-4 w-4" />
                    Dashboard
                  </Button>
                  <Button
                    variant="outline"
                    onClick={signOut}
                    className="gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button
                  className="hidden md:flex bg-primary hover:bg-primary-dark text-primary-foreground"
                  onClick={() => navigate('/auth')}
                >
                  Login / Sign Up
                </Button>
              )}

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <nav className="flex flex-col gap-4 mt-8">
                    <NavLinks mobile />
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      className="mt-4 bg-gold hover:bg-gold-dark text-primary font-semibold"
                    >
                      List Your Property
                    </Button>
                    
                    {user ? (
                      <>
                        <Button
                          variant="outline"
                          onClick={() => navigate('/dashboard')}
                          className="gap-2"
                        >
                          <User className="h-4 w-4" />
                          Dashboard
                        </Button>
                        <Button
                          variant="outline"
                          onClick={signOut}
                          className="gap-2"
                        >
                          <LogOut className="h-4 w-4" />
                          Logout
                        </Button>
                      </>
                    ) : (
                      <Button
                        className="bg-primary hover:bg-primary-dark text-primary-foreground"
                        onClick={() => navigate('/auth')}
                      >
                        Login / Sign Up
                      </Button>
                    )}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <ListPropertyModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default Header;
