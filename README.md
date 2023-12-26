Vat Calculator projesini ayağa kaldırmak için şu adımları takip edin ;

# bir dosya oluşturup vs code ile açın terminale npx create-react-app . komutlarını girerek bir react app oluşturun
# src dosyasını benim repostory'im içerisinde bulunan src dosyası ile değiştirin
# terminale dönün ve sırasıyla 
  npm install -D tailwindcss
  npx tailwindcss init
komutlarını girin
# tailwind.config.js dosyası içerisindeki kodları aşağıdakiler ile değiştirin ;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
# son olarak terminale aşağıdaki komutu girin
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
ve terminali kapatın
# yeni bir terminal açın ve npm start diyerek projeyi ayağa kaldırın
