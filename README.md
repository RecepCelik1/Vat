To set up the Vat Calculator project, follow these steps:

# Create a new file, open it with VS Code, and in the terminal, run the command "npx create-react-app ." to create a React app.
# Replace the 'src' folder with the 'src' folder from my repository.
# Return to the terminal and run the following commands sequentially:
  
  npm install -D tailwindcss
  npx tailwindcss init

# Replace the code in the 'tailwind.config.js' file with the following:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

# Finally, run the following command in the terminal ;

npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch

and then close the terminal.

# Open a new terminal and start the project by running:

npm start
