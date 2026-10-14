For your Vue 3 + Vite + Vue Router + Tailwind CSS v4 + PrimeVue v4 project, here's how to run it locally during development and deploy it to a live website.
The default README.md text you shared is just the Vite template description. You can replace it with project-specific instructions once your setup is working.
1. Run the project locally
Open a terminal in your project folder.

npm install
npm run dev


Vite will display a local URL, usually:
http://localhost:5173/
Open it in your browser. When you edit a .vue file and save it, Vite automatically refreshes the page.


Useful commands:
Command	Purpose
npm install	Install project dependencies
npm run dev	Start the development server
npm run build	Build the production website
npm run preview	Preview the production build locally
You can also run the development server on your local network, if needed:
npm run dev -- --host 0.0.0.0


Only do this on a trusted network, since it can expose your development server to other devices on that network.
2. Build and test the production version locally
Before deployment, make sure your project builds successfully.
npm run build


Vite creates a dist/ folder containing the optimized production files. You deploy this folder, not your src/ folder or node_modules/.
