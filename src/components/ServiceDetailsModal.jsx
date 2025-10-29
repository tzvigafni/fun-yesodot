// ServiceDetailsModal.jsx

import React from "react";
import { CheckCircle, X, Calendar } from "lucide-react";
import { Button } from "./ui/button";

export default function ServiceDetailsModal({ service, onClose }) {
  if (!service) return null; // לא מציגים אם אין שירות נבחר

  // נתונים דמיוניים להדגמת פירוט נוסף
  const details = {
    "אירועים פרטיים": {
      info: "החללים שלנו מתאימים לאירועים של 50 עד 200 אורחים, עם גמישות מלאה בעיצוב האולם ובבחירת התפריט. אנחנו מספקים פתרונות תאורה וסאונד מתקדמים, והכל בליווי אישי של מנהל אירוע צמוד.",
      features: [
        "תפריט גורמה מותאם אישית (כשר)",
        "עיצוב אירוע בהתאמה אישית מלאה",
        "צוות ניהול אירוע צמוד וליווי מקצועי",
        "מערכת הגברה ותאורה מתקדמת",
      ],
      extraImages: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
        "https://images.unsplash.com/photo-1552581234-26160f608093?w=800",
      ],
    },
    "ימי כיף קבוצתיים": {
      info: "תוכניות גיבוש מיוחדות לחברות וארגונים הכוללות סדנאות בישול, חדרי בריחה ניידים, ופעילויות ODT מחוץ למבנה. ניתן לשלב ארוחות בוקר וצהריים עשירות במתחם פרטי.",
      features: [
        "סדנאות מנהיגות וגיבוש אינטראקטיביות",
        "ציוד מולטימדיה להרצאות ומצגות",
        "מרחבי עבודה וכינוס מאובזרים",
        "שילוב פעילויות אקסטרים קלילות",
      ],
      extraImages: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
        "https://images.unsplash.com/photo-1552581234-26160f608093?w=800",
      ],
    },
    "אוכל ביתי משובח": {
      info: "המטבח שלנו מבוסס על אהבה לאוכל ביתי ואיכותי. אנו מציעים תפריטים גמישים, כולל מנות מסורתיות ומודרניות, תוך שימוש בחומרי גלם טריים ובכשרות מלאה.",
      features: [
        "תפריטים גמישים בהתאמה אישית",
        "כשרות מלאה ומאושרת",
        "אפשרויות מותאמות (טבעוני, צליאק וכו')",
        "צוות שירות ומלצרים מקצועי",
      ],
      extraImages: [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
      ],
    },
    "בידור ומוזיקה": {
      info: "אנו מספקים חבילת בידור מלאה, החל ממערכות קול מתקדמות ועד לאפשרויות בחירת DJ, להקה או אמנים. אנו דואגים לפלייליסט המושלם לאווירה שאתם מחפשים.",
      features: [
        "מערכות הגברה וסאונד ברמה גבוהה",
        "אפשרות לבחירת DJ מקצועי ממאגר מומלץ",
        "תאורה ממוחשבת ואפקטים מיוחדים",
        "בקרת רעש ושמירה על האישורים הדרושים",
      ],
      extraImages: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
      ],
    },
    "צילום ותיעוד": {
      info: "שיתוף פעולה עם צלמים ואנשי וידאו מובילים בתחום האירועים. אנו מבטיחים תיעוד איכותי של כל רגע, מזוויות שונות ובעריכה מקצועית שתשמר את הזיכרונות לשנים ארוכות.",
      features: [
        "צילום סטילס ווידאו מקצועי",
        "צילום רחפן (בכפוף לתנאים)",
        "אלבומים דיגיטליים ומודפסים מעוצבים",
        "הדגש על רגעים אותנטיים וטבעיים",
      ],
      extraImages: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
      ],
    },
    "אווירה משפחתית": {
      info: "הערך המרכזי שלנו הוא יחס אישי וחם. אנחנו מעניקים ליווי צמוד מהרגע הראשון ודואגים שתרגישו בבית, כאילו האירוע נערך אצלכם בחצר. אנחנו הופכים כל אירוע לחוויה של שותפות.",
      features: [
        "יחס אישי וחם לכל אורח",
        "ליווי צמוד של משפחת המארחים",
        "גמישות מלאה לשינויים של הרגע האחרון",
        "פינות ישיבה וזולה ייחודיות",
      ],
      extraImages: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800", // תמונות שמתאימות לאווירה
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800", // תמונות שמתאימות לאווירה
      ],
    },
  };

  // משתמשים בנתונים הדמיוניים או בברירת מחדל
  const serviceDetails = details[service.title] || {
    info: service.description + ". לפרטים נוספים, אנא צרו קשר ישירות.",
    features: ["אפשרות להתאמה אישית", "מקצועיות ואיכות", "חוויה בלתי נשכחת"],
    extraImages: [
      service.url ||
        "https://images.unsplash.com/photo-1517478056258-f54f738096f2?w=800",
    ],
  };

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full mx-auto my-8 overflow-hidden max-h-full transform transition-all duration-300 scale-100 animate-in zoom-in-95 slide-in-from-bottom-2"
        onClick={(e) => e.stopPropagation()} // מונע סגירה בלחיצה בתוך המודאל
      >
        <div className="p-8 md:p-12 relative h-full overflow-y-auto max-h-[90vh]">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-gray-700 hover:text-red-500 z-10"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </Button>
          <header className="text-center mb-8">
            <div
              className={`w-16 h-16 rounded-full mx-auto mb-4 bg-gradient-to-br ${service.color} flex items-center justify-center`}
            >
              <service.icon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-pink-600">
              {service.title}
            </h2>
          </header>
          {/* Details */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
              פרטים נוספים
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {serviceDetails.info}
            </p>
          </section>
          {/* Features */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
              מה כלול?
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceDetails.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 ml-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
          {/* Image Gallery */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
              הצצה לאירועים שלנו
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceDetails.extraImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`תמונה נוספת ${index + 1}`}
                  className="w-full h-48 object-cover rounded-xl shadow-md transition-all duration-300 hover:scale-[1.03]"
                />
              ))}
            </div>
          </section>
          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white shadow-xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
              onClick={() => {
                onClose();
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Calendar className="ml-2" />
              ליצירת קשר ותיאום אירוע
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
