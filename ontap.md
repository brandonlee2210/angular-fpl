Link https://angular.io/docs
## Day 1: Khởi tạo Project
- Cài Angular CLI: 
npm install -g @angular/cli ( sử dụng ng)
- Tạo Project:
ng new project_name
cd my-app
ng serve --open
### Add tailwind css:
- Cài thư viện tailwind: 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
- Add content trong taildwind config: 
content: [
    "./src/**/*.{html,ts}",
  ],
- Add style.css
@tailwind base;
@tailwind components;
@tailwind utilities;

### Create components
ng generate component [name]  
ng g c [name]
### Component (4 file)
- css
- html
- spec.ts: test
- component.ts: xử lý logic