// ServiceDetailsModal.jsx

import React from "react";
import { CheckCircle, X, Calendar } from "lucide-react";
import { Button } from "./ui/button";

export default function ServiceDetailsModal({ service, onClose }) {
  if (!service) return null;

  // נתונים אמיתיים של הפעילויות
  const details = {
    "דוכני מזון וכיבוד": {
      info: `הפכו את האירוע שלכם לחוויה קולינרית בלתי נשכחת!
       אנו מציעים מגוון רחב של דוכני מזון מהיר ותחנות כיבוד שיהפכו כל אירוע לחגיגה אמיתית.
        מדוכנים מעוצבים ויפים, דרך ציוד מקצועי ועד לכיבוד טעים ואיכותי - הכל במקום אחד.
         הכל בכשרות מהדרין או בכשרות לפי דרישה אישית.`,
      features: [
        "מכונות שערות סבתא (צמר גפן) - קסם מתוק לכל הגילאים",
        "מכונות פופקורן טרי וחם - ריח ממכר ולא מפסיק",
        "מכונות ברד - מרענן ומושלם לימי קיץ חמים",
        "דוכן פלאפל מלא או מנות פרטניות - אוכל ביתי ומזין",
        "לחמניות בנקניק - מושלם לילדים וגם למבוגרים",
        "שקיות צ'יפס ונשנושים מגוונים",
        "ארטיקים וגלידות להנאה מירבית",
        "הכל בכשרות מהדרין או לפי דרישה אישית",
        "דוכנים מעוצבים ויפים שישדרגו את האירוע",
      ],
      extraImages: [
        "https://yami.co.il/wp-content/uploads/2018/07/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%9E-Guy-Tennbaum1.jpg?w=800",
        "https://noyasushi.co.il/wp-content/uploads/2021/11/%D7%94%D7%99%D7%A6%D7%A2-%D7%A0%D7%A8%D7%97%D7%91-%D7%A9%D7%9C-%D7%93%D7%95%D7%9B%D7%A0%D7%99-%D7%90%D7%95%D7%9B%D7%9C.jpg?w=800",
        "https://www.tablez.co.il/wp-content/uploads/2022/03/109.jpg?w=800",
        "https://static.wixstatic.com/media/91dd81_08d47cef6a594ab1a280096f22ef3db8~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_576,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/91dd81_08d47cef6a594ab1a280096f22ef3db8~mv2_d_4032_3024_s_4_2.jpg?w=800",
      ],
    },
    "סיור חקלאי בטרקטור ועגלה": {
      info: `חוויה כפרית אותנטית במושב חרדי ייחודי!
       עלו על טרקטור חקלאי אמיתי ועגלה נוחה, וצאו למסע מרתק אל לב החקלאות הישראלית.
        הסיור מתנהל על ידי חקלאי ותיק עם ניסיון של שנים רבות, שיסביר לכם בצורה מעניינת ונגישה כיצד מגרגר זעיר אחד הופך המזון שעל השולחן שלנו.
         הסיור עובר ברפת, בשדות הפתוחים, ובלב המושב - תוך למידה על חקלאות בת-קיימא ועל שמירת מצוות התלויות בארץ.`,
      features: [
        "סיור מודרך בטרקטור ועגלה",
        "ביקור ברפת יסודות - מבט מקרוב על חיי החווה",
        "סיור בשדות החקלאיים של המושב",
        "הסברים מפורטים ומעניינים מחקלאי מקצועי",
        "למידה על חקלאות ישראלית ושמירת מצוות הארץ",
        "חוויה כפרית אותנטית לכל המשפחה",
        "מתאים לילדים ומבוגרים כאחד",
      ],
      extraImages: ["./images/tra1.jpg", "./images/tra2.jpg"],
    },
    "סיור מודרך ברפת עם אוזניות מתקדמות": {
      info: `גלו את הסודות שמאחורי כוס החלב שלכם!
       סיור ייחודי ומרתק ברפת עם מערכת אוזניות מתקדמת שמאפשרת לכם לשמוע בבירור מושלם את כל ההסברים, גם בסביבה רועשת.
        הסיור כולל 10 תחנות במשך כחצי שעה, שבהן תלמדו על תהליך ייצור החלב, על חיי הפרות, על הציוד המתקדם ברפת, ועל החקלאות המודרנית.
         מבט מקרוב על עולם הרפת שלא הכרתם!`,
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
    },
    "סיורי עששיות - חוויה קסומה בלילה": {
      info: `בין כרמים לפרדסים נצעד לאורך השבילים, לאור עששיות מאירות לקול הטבע והחיות.
       נאזין להסברים מיוחדים על הסביבה ועצי ההדרים,
        באמצע המסלול בהקרנה נצפה על יחודיות המושב - ממש יפה!
         ובסיום, בטרקטור וכרכרה, נשוב אל נקודת ההתחלה במרכז היישוב.
          חוויה בלתי נשכחת לכל הגילאים!`,
      features: [
        "סיור מודרך בשדות המושב לאור עששיות מרצדות",
        "הליכה בין כרמים ופרדסים באווירה קסומה",
        "הסברים מיוחדים על הסביבה ועצי ההדרים",
        "הקרנת וידאו מרהיבה באמצע הסיור על יחודיות המושב",
        "חזרה בטרקטור וכרכרה למרכז היישוב",
        "חיבור לטבע ולחיים הכפריים",
        "מתאים לערבים מיוחדים, זוגות ומשפחות",
        "חוויה משפחתית ייחודית שלא תישכח",
      ],
      extraImages: ["/images/ash1.jpg?w=800", "/images/ash2.jpg?w=800"],
    },
    "תיפוף על דליי אור - GALAXIA": {
      info: `חוויה מוזיקלית אינטראקטיבית בלתי נשכחת

🎵 אופציה 1 - תיפוף על דליי אור (פעילות בודדת):
תיפוף קבוצתי על דליי אור זוהרים וססגוניים בליווי מוזיקה מרגשת.
 פעילות גיבוש ייחודית שמחברת בין משתתפים, משחררת אנרגיות ויוצרת רגעים קסומים.
  מתאים לכל גיל - מילדים ועד מבוגרים.

🌟 אופציה 2 - חוויה גלקטית (יום פעילות מלא בטבע):
יום שלם של פעילויות מרתקות בטבע!
 מגוון פעילויות לבחירה - משחקי ODT אינטראקטיביים, תיפוף על דליי אור, משחקי טיי-דיי (Tie-Dye), הרקדות והפעלות משחררות, ושיתופי פעולה קבוצתיים.
  האפשרות המיוחדת: ליווי מקצועי של צילום והפקת קליפ לאורך כל היום!
   מושלם למוסדות וימי כיף - פעילות מרגשת פלוס קליפ מקצועי שיישאר זיכרון לנצח.`,
      features: [
        "תיפוף על דליי אור זוהרים",
        "חבילת 'חוויה גלקטית' - יום פעילות מלא",
        "משחקי ODT אינטראקטיביים ומרתקים (בחוויה גלקטית)",
        "משחקי טיי-דיי (Tie-Dye) יצירתיים (בחוויה גלקטית)",
        "הרקדות והפעלות משחררות בשטח (בחוויה גלקטית)",
        "ליווי מקצועי של צילום והפקת קליפ - אופציונלי",
        "התאמה אישית מלאה לצרכי הקבוצה",
        "הפקה מקצועית של רבקה רוזנברג",
        "מתאים לכל הגילאים - ילדים, בני נוער ומבוגרים",
        "מושלם לאירועי חברה, מוסדות וימי כיף",
      ],
      extraImages: [
        "/images/tif1.jpg?w=800",
        "/images/tif2.jpg?w=800",
        "/images/tif3.jpg?w=800",
        "/images/tif4.jpg?w=800",
      ],
    },

    "שירותים ניידים ברמה גבוהה": {
      info: `פתרון מושלם לאירועים בשטח!
       שירותים ניידים איכותיים, נקיים ומעוצבים ברמה הגבוהה ביותר.
        אנו מספקים יחידות שירותים מודרניות עם כיורים לנטילת ידיים,
         שמירה על ניקיון לאורך כל האירוע, וליווי מקצועי.
          הפתרון האידיאלי לאירועים חיצוניים, ימי כיף, חתונות בשטח ואירועי חברה.
           אנחנו דואגים לכל הפרטים כדי שהאורחים שלכם ירגישו בנוח!`,
      features: [
        "שירותים ניידים איכותיים ומודרניים",
        "נקיים ומעוצבים ברמה גבוהה",
        "כיורים מרווחים לנטילת ידיים",
        "שמירה על ניקיון לאורך כל האירוע",
        "התקנה והסרה מקצועית",
        "מתאים לאירועים חיצוניים, חתונות וימי כיף",
        "ליווי מקצועי ושירות מהיר",
        "פתרון מושלם לכל אירוע בשטח",
      ],
      extraImages: ["/images/wc1.jpg?w=800"],
    },
    "הפקות אירועים מלאות": {
      info: `הפקת אירועים ברמה הגבוהה ביותר - מההתחלה ועד הסוף!
       אנו מציעים שירות מקיף הכולל הפקה מקצועית,
        קייטרינג משובח ומגוון, או אפשרות למנגל טרי ומעושן במקום בכשרויות מהודרות,
         והגשה מפוארת בכלי זכוכית איכותיים.
          בין אם זה אירוע פרטי, אירוע חברה או חגיגה משפחתית - אנחנו דואגים לכל פרט קטן כדי שהאירוע שלכם יהיה מושלם ובלתי נשכח.
           תנו לנו להפוך את החלום שלכם למציאות!`,
      features: [
        "הפקה מקצועית ומלאה מהתחלה ועד סוף",
        "קייטרינג משובח ומגוון לכל טעם",
        "מנגל טרי ומעושן במקום - בשרים איכותיים",
        "כשרויות מהודרת ביותר ולפי דרישה",
        "הגשה מפוארת בכלי זכוכית איכותיים",
        "תפריטים מותאמים אישית לפי דרישה",
        "צוות מקצועי ומנוסה לשירות מושלם",
        "פתרון מקיף לאירועים פרטיים, חברה ומשפחתיים",
      ],
      extraImages: [
        "/images/eru1.jpg?w=800",
        "/images/eru2.jpg?w=800",
        "/images/eru3.jpg?w=800",
        "/images/eru4.jpg?w=800",
        "/images/eru9.jpg?w=800",
        "/images/eru6.jpg?w=800",
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
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
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
          {serviceDetails.extraImages && (
            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                {serviceDetails.extraImages.length === 1
                  ? "מידע נוסף"
                  : "הצצה לפעילויות שלנו"}
              </h3>
              <div
                className={
                  serviceDetails.extraImages.length === 1
                    ? "flex justify-center"
                    : "grid grid-cols-1 sm:grid-cols-2 gap-4"
                }
              >
                {serviceDetails.extraImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`תמונה נוספת ${index + 1}`}
                    className={
                      serviceDetails.extraImages.length === 1
                        ? "w-full max-w-2xl h-[600px] object-cover rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
                        : "w-full h-48 object-cover rounded-xl shadow-md transition-all duration-300 hover:scale-[1.03]"
                    }
                  />
                ))}
              </div>
            </section>
          )}

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
