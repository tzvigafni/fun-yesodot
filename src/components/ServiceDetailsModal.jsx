// ServiceDetailsModal.jsx

import React from "react";
import { CheckCircle, X, Calendar } from "lucide-react";
import { Button } from "./ui/button";

export default function ServiceDetailsModal({ service, onClose }) {
  if (!service) return null;

  // נתונים אמיתיים של הפעילויות
  const details = {
    "מכונות מזון וכיבוד מהיר": {
      info: "הפכו את האירוע שלכם לחוויה קולינרית בלתי נשכחת! אנו מציעים מגוון רחב של מכונות מזון מהיר ותחנות כיבוד שיהפכו כל אירוע לחגיגה אמיתית. מדוכנים מעוצבים ויפים, דרך ציוד מקצועי ועד לכיבוד טעים ואיכותי - הכל במקום אחד. הכל בכשרות מהדרין או בכשרות לפי דרישה אישית.",
      features: [
        "מכונות שערות סבתא (צמר גפן) - קסם מתוק לכל הגילאים",
        "מכונות פופקורן טרי וחם - ריח שממכר ולא מפסיק",
        "מכונות ברד (גרניטה) - מרענן ומושלם לימי קיץ חמים",
        "דוכן פלאפל מלא או מנות פרטניות - אוכל ביתי ומזין",
        "לחמניות בנקניק - מושלם לילדים וגם למבוגרים",
        "שקיות צ'יפס ונשנושים מגוונים",
        "ארטיקים מקררים להנאה מירבית",
        "הכל בכשרות מהדרין או לפי דרישה אישית",
        "דוכנים מעוצבים ויפים שישדרגו את האירוע",
      ],
      extraImages: [
        "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=800",
        "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=800",
        "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=800",
        "https://images.unsplash.com/photo-1585238341710-4a8fa9b6a00b?w=800",
      ],
    },
    "סיור חקלאי בטרקטור ועגלה": {
      info: "חוויה כפרית אותנטית במושב חרדי ייחודי! עלו על טרקטור חקלאי אמיתי ועגלה נוחה, וצאו למסע מרתק אל לב החקלאות הישראלית. הסיור מתנהל על ידי חקלאי ותיק עם ניסיון של שנים רבות, שיסביר לכם בצורה מעניינת ונגישה כיצד מגרגר זעיר אחד הופך למזון שעל השולחן שלנו. הסיור עובר ברפת, בשדות הפתוחים, ובלב המושב - תוך למידה על חקלאות בת-קיימא ועל שמירת מצוות התלויות בארץ.",
      features: [
        "סיור מודרך בטרקטור ועגלה נוחה",
        "ביקור ברפת יסודות - מבט מקרוב על חיי החווה",
        "סיור בשדות החקלאיים של המושב",
        "הסברים מפורטים ומעניינים מחקלאי מקצועי",
        "למידה על חקלאות ישראלית ושמירת מצוות הארץ",
        "חוויה כפרית אותנטית לכל המשפחה",
        "מתאים לכל הגילאים - ילדים, משפחות וקבוצות",
        "בואו להיות חקלאים ליום אחד!",
      ],
      extraImages: [
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800",
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800",
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800",
      ],
    },
    "מכוניות פדלים (באגי) במושב": {
      info: "הילדים שלכם חולמים לנהוג? תנו להם את ההזדמנות! מכוניות פדלים מקצועיות (באגי) שמאפשרות נסיעה עצמאית וחווייתית במסלולים המיוחדים שלנו במושב. בטוח, מהנה, ומתאים גם למבוגרים וגם לילדים. חוויית נהיגה ייחודית שתשאיר חיוך על הפנים!",
      features: [
        "מכוניות פדלים איכותיות ובטוחות",
        "מסלולים מסומנים ובטוחים במושב",
        "אפשרות לנסיעה משפחתית או תחרותית",
        "הדרכה קצרה לפני היציאה לדרך",
        "חוויית נהיגה ייחודית לכל הגילאים",
        "פעילות מהנה לילדים ומבוגרים כאחד",
      ],
      extraImages: [
        "https://images.unsplash.com/photo-1524701033731-e2c511f9eed5?w=800",
        "https://images.unsplash.com/photo-1533628635777-112b0dff6b5b?w=800",
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
        "https://images.unsplash.com/photo-1566024287286-457247b70310?w=800",
      ],
    },
    "ניווט יסודי - משחק ניווט משפחתי": {
      info: "אטרקציה משפחתית מרתקת שכזו עוד לא חוויתם! משחק ניווט אינטראקטיבי בכל רחבי המושב, שמשלב חידות, משימות והרפתקאות. מגיעים לנקודת ההתחלה, מקבלים משימה ראשונה (והיא ממש מגניבה!), ומשם מתחילה ההרפתקה. כל תחנה מובילה לתחנה הבאה עם מפת המושב שבידכם. תעברו בגלגל מזל, תחפשו אוצרות בבריכת כדורים, תבקרו ברפת, בגינת המשחקים, ובנקודות מעניינות נוספות במושב. ובסוד - באמצע המשחק יש ארטיק לכל המשתתפים, ובסיום פרס לכל הילדים!",
      features: [
        "משחק ניווט אינטראקטיבי עם משימות מגוונות",
        "מפת משחק של המושב",
        "גלגל מזל, בריכת כדורים וחידות מהנות",
        "ביקור בנקודות מעניינות: רפת, גינת משחקים ועוד",
        "הפתעת ארטיק באמצע המשחק",
        "פרס מיוחד לכל משתתף בסיום",
        "מתאים לכל המשפחה - ילדים, הורים וסבים",
        "חוויה בלתי נשכחת של הרפתקה משפחתית",
      ],
      extraImages: [
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
        "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800",
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800",
        "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800",
      ],
    },
    "סיור מודרך ברפת עם אוזניות מתקדמות": {
      info: "גלו את הסודות שמאחורי כוס החלב שלכם! סיור ייחודי ומרתק ברפת עם מערכת אוזניות מתקדמת שמאפשרת לכם לשמוע בבירור מושלם את כל ההסברים, גם בסביבה רועשת. הסיור כולל 10 תחנות במשך כחצי שעה, שבהן תלמדו על תהליך ייצור החלב, על חיי הפרות, על הציוד המתקדם ברפת, ועל החקלאות המודרנית. מבט מקרוב על עולם הרפת שלא הכרתם!",
      features: [
        "מערכת אוזניות אישית מתקדמת לכל משתתף",
        "סיור מודרך ב-10 תחנות מרתקות ברפת",
        "משך הסיור: כחצי שעה",
        "הסברים מקצועיים ומרתקים על ייצור חלב",
        "מבט מקרוב על עולם הרפת והחקלאות המודרנית",
        "למידה על תהליכי הייצור והטכנולוגיה החקלאית",
        "מתאים לקבוצות, משפחות וילדים",
        "חוויה חינוכית ומעשירה",
      ],
      extraImages: [
        "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800",
        "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800",
        "https://images.unsplash.com/photo-1615485500834-bc10199bc768?w=800",
        "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800",
      ],
    },
    "מתנפחים לאירועים": {
      info: "השלימו את האירוע או יום הכיף שלכם עם מתנפחים צבעוניים ומהנים! מגוון רחב של מתנפחים לכל הגילאים - מטירות קפיצה ועד מגלשות ענק. הילדים יתפוצצו משמחה! אנחנו מספקים מתנפחים איכותיים ובטוחים עם התקנה מקצועית וליווי צמוד לאורך כל האירוע. הפעילות המושלמת להוסיף אנרגיה ושמחה לכל אירוע.",
      features: [
        "מגוון מתנפחים איכותיים ובטוחים",
        "טירות קפיצה, מגלשות ומתנפחים מיוחדים",
        "התקנה והפעלה מקצועית",
        "מתאים לאירועים פרטיים, ימי כיף ואירועי חברה",
        "ליווי צמוד ושמירה על בטיחות לאורך כל האירוע",
        "מתאים לכל הגילאים",
        "הוספה מושלמת לכל חגיגה",
      ],
      extraImages: [
        "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=800",
        "https://images.unsplash.com/photo-1530027644375-9c83053d392e?w=800",
        "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800",
        "https://images.unsplash.com/photo-1508997449629-303059a039c0?w=800",
      ],
    },
    "סיורי עששיות - חוויה קסומה בלילה": {
      info: "סיור לילי מיסטי ומרגש! צאו למסע אל שדות המושב לאור עששיות מרצדות, והתנסו בחוויה שקטה ומיוחדת שמחברת אל הטבע ואל הכפר. הסיור כולל הקרנת וידאו מיוחדת באמצע, שמספרת על המושב, על החקלאות ועל החיים הכפריים. אווירה קסומה ורומנטית שמתאימה למשפחות, לזוגות וקבוצות. חוויה שתישאר בזיכרון לאורך זמן!",
      features: [
        "סיור מודרך בשדות המושב לאור עששיות",
        "אווירה קסומה ורומנטית",
        "הקרנת וידאו מיוחדת באמצע הסיור על המושב והחקלאות",
        "חיבור לטבע ולחיים הכפריים",
        "חוויה משפחתית ייחודית",
        "מתאים לערבים מיוחדים, לזוגות ולמשפחות",
        "מסלול בטוח ומסומן היטב",
        "זיכרון בלתי נשכח מהלילה",
      ],
      extraImages: [
        "https://images.unsplash.com/photo-1470472304068-4398a9daab00?w=800",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800",
        "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800",
        "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800",
      ],
    },
  };

  // משתמשים בנתונים האמיתיים או בברירת מחדל
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
        onClick={(e) => e.stopPropagation()}
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
              הצצה לפעילויות שלנו
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
              ליצירת קשר ותיאום פעילות
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
