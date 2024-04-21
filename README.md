#### **Code Internationalizer 🌎**

Code internationalizer is a modern web application designed for developers who need to translate the non-code elements (like comments and strings) within their source code between different languages. This tool offers a clean and efficient user interface, leveraging the latest web technologies.

### **NOTE: This repo includes the frontend app, you can find the flask api in the repo: <a href='https://github.com/ramicorrea21/internationalizer-rest'>Backend Repository</a>

#### **⚒️STACK**:
- <a href='https://openai.com/blog/openai-api' target='_blank'>OPENAI API</a> for GPT featured code translation.
- <a href='https://nextjs.org/' target='_blank'>Next.js</a> as the React framework for server-rendered and static web applications.
- <a href='https://reactjs.org/' target='_blank'>React</a> for building the user interface with stateful components.
- <a href='https://tailwindcss.com/' target='_blank'>TailwindCSS</a> for utility-first styling and responsive design.
- <a href='https://ui.shadcn.com/' target='_blank'>Shadcn UI</a> for modern, accessible UI components that are easy to customize and integrate.
-<a href='https://openai.com/blog/openai-api' target='_blank'>OPENAI API</a> for leveraging advanced AI to translate code comments and strings.
-<a href='https://flask.palletsprojects.com/' target='_blank'>Flask</a> as the lightweight WSGI web application framework to serve the API.
-<a href='https://www.python.org/' target='_blank'>Python</a> for backend scripting, providing a powerful yet easy-to-use language for web services.
-<a href='https://flask-cors.readthedocs.io/en/latest/' target='_blank'>Flask-CORS</a> for handling Cross-Origin Resource Sharing (CORS), allowing the frontend to interact securely with the backend.


#### **Setup and Installation**

1. **Clone the Repository**
   ```
   git clone https://github.com/ramicorrea21/code-internationalizer.git
   cd code-internationalizer
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Run the Development Server**
   ```
   npm run dev
   ```
   This command starts the Next.js development server on `http://localhost:3000`. The application will reload if you make edits.

4. **Build for Production**
   ```
   npm run build
   npm run start
   ```
   This commands will build the application for production usage and start the server.

#### **Environment Variables**

- `NEXT_PUBLIC_BACKEND_URL`: URL of the backend server. Set this in your `.env.local` file.

#### **Key Features**

- Interactive UI components using Shadcn/ui.
- Efficient state management with React Hooks.
- Real-time code translation feedback.
- TailwindCSS for responsive and stylish design.

#### **Dependencies**

- React and Next.js for frontend architecture.
- TailwindCSS for styling.
- Shadcn for prebuilt Next UI components.

