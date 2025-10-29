# פאן כיף ואווירה - אתר אירועים

אתר לאירועים וימי כיף במושב יסודות

## התקנה מקומית

```bash
# התקן תלויות
npm install

# הרץ שרת פיתוח
npm run dev

# בנה לפרודקשן
npm run build
```

## העלאה לאינטרנט - אפשרויות חינמיות

### 1. Netlify (מומלץ!)
1. הירשם ל-Netlify: https://www.netlify.com
2. לחץ על "Add new site" > "Deploy manually"
3. גרור את תיקיית `dist` אחרי `npm run build`
4. תקבל כתובת: `https://your-site-name.netlify.app`

### 2. Vercel
1. הירשם ל-Vercel: https://vercel.com
2. התקן Vercel CLI: `npm i -g vercel`
3. הרץ: `vercel`
4. עקוב אחרי ההוראות

### 3. GitHub Pages
1. צור repository ב-GitHub
2. העלה את הקוד
3. בהגדרות הפעל GitHub Pages
4. כתובת: `https://username.github.io/repository-name`

## מבנה הפרויקט

```
fun-yesodot/
├── src/
│   ├── components/
│   │   └── ui/          # קומפוננטות UI
│   ├── App.jsx          # קומפוננט ראשי
│   ├── main.jsx         # נקודת כניסה
│   └── index.css        # סגנונות
├── index.html           # HTML ראשי
└── package.json         # תלויות
```

## טכנולוגיות

- React 18
- Vite
- Tailwind CSS
- Lucide React (אייקונים)
