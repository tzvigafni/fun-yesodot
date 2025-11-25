import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Users,
  Sparkles,
  Heart,
  Music,
  Camera,
  UtensilsCrossed,
  PartyPopper,
  Truck,
  Bike,
  Compass,
  Headphones,
  Smile,
  Moon,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Card, CardContent } from "./components/ui/card";
import ServiceDetailsModal from "./components/ServiceDetailsModal";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // States for contact form
  const [formData, setFormData] = useState({
    from_name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const formRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "services", "gallery", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // 🔥 החלף את הערכים האלה בערכים שלך מ-EmailJS:
      const result = await emailjs.send(
        "service_tk56p6v", // 👈 שים כאן את ה-Service ID שלך
        "template_8fjdcql", // 👈 שים כאן את ה-Template ID שלך
        formData,
        "z75gQQwMlz2bygG7x" // 👈 שים כאן את ה-Public Key שלך
      );

      console.log("Email sent successfully:", result);
      setSubmitStatus("success");

      // Clear form after successful submission
      setFormData({
        from_name: "",
        phone: "",
        email: "",
        message: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");

      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const navItems = [
    { id: "home", label: "בית" },
    { id: "about", label: "אודות" },
    { id: "services", label: "שירותים" },
    { id: "gallery", label: "גלריה" },
    { id: "contact", label: "צור קשר" },
  ];

  const services = [
    {
      icon: UtensilsCrossed,
      title: "דוכני מזון וכיבוד",
      description:
        "מגוון רחב של דוכני מזון מהיר - שערות סבתא, פופקורן, ברד, פלאפל, נקניקיות וארטיקים. הכל בכשרות מהדרין ובדוכנים מעוצבים",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: Truck,
      title: "סיור חקלאי בטרקטור ועגלה",
      description:
        "חוויה כפרית אותנטית! סיור מרתק ברפת, בשדות ובמושב עם הסברים מחקלאי ותיק. למידה על חקלאות ושמירת מצוות הארץ",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Headphones,
      title: "סיור מודרך ברפת עם אוזניות מתקדמות",
      description:
        "גלו את הסודות מאחורי כוס החלב! 10 תחנות חינוכיות עם מערכת אוזניות מתקדמת. סיור של כחצי שעה",
      color: "from-pink-400 to-rose-500",
    },
    {
      icon: Moon,
      title: "סיורי עששיות - חוויה קסומה בלילה",
      description:
        "סיור לילי מיסטי בשדות המושב לאור עששיות! כולל הקרנת וידאו מיוחדת על המושב והחקלאות. חוויה בלתי נשכחת לכל הגילאים",
      color: "from-indigo-400 to-purple-500",
    },
    {
      icon: PartyPopper,
      title: "הפקות אירועים מלאות",
      description:
        "הפקת אירועים ברמה הגבוהה ביותר - הפקה מקצועית, קייטרינג משובח, מנגל טרי במקום (כשרות בד״ץ), והגשה בכלי זכוכית. פתרון מקיף לכל אירוע",
      color: "from-orange-400 to-pink-500",
    },
    {
      icon: Music,
      title: "תיפוף על דליי אור - GALAXIA",
      description:
        "חוויה מוזיקלית אינטראקטיבית ומרהיבה! תיפוף קבוצתי על דליי אור זוהרים בליווי מוזיקה. פעילות גיבוש מרגשת ומחזקת לכל גיל",
      color: "from-purple-400 to-indigo-500",
    },
    {
      icon: Sparkles,
      title: "שירותים ניידים ברמה גבוהה",
      description:
        "שירותים ניידים איכותיים להשכרה - נקיים, מעוצבים וברמה גבוהה. כולל כיורים לנטילת ידיים. פתרון מושלם לאירועים בשטח",
      color: "from-cyan-400 to-blue-500",
    },
  ];

  const galleryImages = [
    {
      url: "/images/ash1.jpg",
      span: "col-span-2 row-span-2",
    },
    {
      url: "/images/eru1.jpg",
      span: "col-span-1 row-span-1",
    },
    {
      url: "/images/tra1.jpg",
      span: "col-span-1 row-span-1",
    },
    {
      url: "/images/tif4.jpg",
      span: "col-span-1 row-span-2",
    },
    {
      url: "/images/eru5.jpg",
      span: "col-span-2 row-span-1",
    },
    {
      url: "/images/eru9.jpg",
      span: "col-span-1 row-span-1",
    },
  ];

  const openServiceDetails = (service) => {
    setSelectedService(service);
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-stone-100"
      dir="rtl"
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              {/* <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
                <Sparkles className="w-6 h-6 text-white" />
              </div> */}
              <div>
                <h1
                  className={`text-2xl font-bold transition-colors duration-300 ${
                    scrolled
                      ? "bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"
                      : "text-white"
                  }`}
                >
                  פאן כיף ואווירה
                </h1>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    scrolled ? "text-gray-600" : "text-white/90"
                  }`}
                >
                  מושב יסודות
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? scrolled
                        ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white hover:from-orange-600 hover:to-pink-700"
                        : "bg-white/20 text-white hover:bg-white/30"
                      : scrolled
                      ? "text-gray-700 hover:bg-gray-100"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={scrolled ? "text-gray-900" : "text-white"} />
              ) : (
                <Menu className={scrolled ? "text-gray-900" : "text-white"} />
              )}
            </Button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full justify-start text-base font-medium ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
                      : scrolled
                      ? "text-gray-700"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              פאן <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                כיף ואווירה
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-white/95 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
              במושב יסודות מחכה לכם חוויה בלתי נשכחת של אירועים, ימי כיף ואווירה
              ברמה הגבוהה ביותר
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-lg px-8 py-6 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                <Calendar className="ml-2" />
                הזמינו עכשיו
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                גלו עוד
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-2 bg-white/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              אודות המקום
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ברוכים הבאים למושב יסודות - מקום קסום בלב השפלה
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800"
                  alt="המושב שלנו"
                  className="rounded-3xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />
              </div>
            </div>

            <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <MapPin className="w-6 h-6 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  מיקום מושלם בלב השפלה
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  מושב יסודות ממוקם על גבעה מוקפת עצים ושדות באזור השפלה. המיקום
                  המצוין שלנו קרוב למרכז הארץ אך רחוק מההמולה והרעש, מה שיוצר
                  אווירה כפרית שלווה ומרגיעה המושלמת לכל אירוע או פעילות.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Truck className="w-6 h-6 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  מושב חקלאי פורח
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  מושב יסודות הוא מושב שיתופי חרדי ייחודי עם מסורת חקלאית עשירה.
                  כ-5,000 דונם של שדות, פרדסים וכרמים, ורפת חלב מודרנית המייצרת
                  מעל 3 מיליון ליטר בשנה. אנו מזמינים אתכם לחוות את הקסם החקלאי!
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Heart className="w-6 h-6 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  מורשת ואותנטיות
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  המושב נוסד בשנת 1946 על ידי ניצולי שואה חרדים חברי תנועת פועלי
                  אגודת ישראל. עד היום שומרים אנו על האופי המיוחד והאותנטי של
                  המושב, תוך שילוב מודרניות ומסורת.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 px-4 bg-gradient-to-br from-gray-50 to-stone-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              הפעילויות שלנו
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              מסיורים חקלאיים קסומים ועד הפקות אירועים מלאות - חוויה בלתי נשכחת
              לכל הגילאים
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                onClick={() => openServiceDetails(service)}
                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:cursor-pointer animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <CardContent className="p-8 relative  flex flex-col justify-between min-h-[320px]">
                  <div
                    className={`w-8 h-8 rounded-md bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-end justify-center text-stone-500 text-sm font-medium group-hover:text-stone-600 transition-all">
                    <span className="animate-pulse">לחצו לפרטים נוספים</span>
                    <svg
                      className="w-4 h-4 mr-2 group-hover:translate-x-[-4px] transition-transform animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              גלריית תמונות
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              הציצו לפעילויות שלנו ותרגישו את האווירה המיוחדת
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`${image.span} group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-in fade-in zoom-in-95`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={image.url}
                  alt={`גלריה ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <Camera className="w-6 h-6 mb-2" />
                  <p className="font-semibold">רגעים בלתי נשכחים</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              צרו קשר
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              נשמח לשמוע מכם ולעזור בתכנון הפעילות המושלמת
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-700">
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        טלפון
                      </h3>
                      <p className="text-gray-600 text-lg" dir="ltr">
                        058-323-8104
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        אימייל
                      </h3>
                      <p className="text-gray-600 text-lg">
                        fun.yesodot@gmail.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        כתובת
                      </h3>
                      <p className="text-gray-600 text-lg">
                        מושב יסודות, השפלה, ישראל
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        שעות פעילות
                      </h3>
                      <p className="text-gray-600">
                        ראשון - חמישי: 9:00 - 18:00
                      </p>
                      <p className="text-gray-600">
                        שישי, מוצ"ש: לפי תיאום מראש
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm animate-in fade-in slide-in-from-left-8 duration-700">
              <CardContent className="p-8">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      שם מלא
                    </label>
                    <Input
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleInputChange}
                      placeholder="הכניסו את שמכם המלא"
                      className="text-lg py-6 border-2 focus:border-orange-500 transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      טלפון
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="050-123-4567"
                      className="text-lg py-6 border-2 focus:border-orange-500 transition-colors"
                      dir="ltr"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      אימייל
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="text-lg py-6 border-2 focus:border-orange-500 transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      הודעה
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="ספרו לנו על הפעילות שאתם מתכננים..."
                      rows={5}
                      className="text-lg border-2 focus:border-orange-500 transition-colors resize-none"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-3 p-4 bg-green-50 border-2 border-green-200 rounded-lg animate-in fade-in slide-in-from-top-2">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <p className="text-green-800 font-medium">
                        תודה רבה! ההודעה נשלחה בהצלחה. ניצור איתך קשר בהקדם 🎉
                      </p>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === "error" && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-lg animate-in fade-in slide-in-from-top-2">
                      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                      <p className="text-red-800 font-medium">
                        אופס! משהו השתבש. אנא נסה שוב או צור קשר בטלפון.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full text-lg py-6 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2" />
                        שולח...
                      </>
                    ) : (
                      <>
                        <Mail className="ml-2" />
                        שלחו הודעה
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">פאן כיף ואווירה</h3>
                  <p className="text-sm text-gray-400">מושב יסודות</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                יוצרים חוויות בלתי נשכחות במושב החקלאי הייחודי שלנו
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">קישורים מהירים</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">צרו קשר</h4>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">058-323-8104</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  fun.yesodot@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  מושב יסודות, השפלה, ישראל
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} פאן כיף ואווירה - כל הזכויות שמורות
            </p>
          </div>
        </div>
      </footer>
      <ServiceDetailsModal
        service={selectedService}
        onClose={closeServiceDetails}
      />
    </div>
  );
}
