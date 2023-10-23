const app = require("./app");
const validator = require("validator");
let nama, mobile, email; //deklarasi variabel nama, mobile, dan email

// menggunakan async await
const main = async () => {
  nama = await app.question("What is your name? ");

  // validasi phone number
  while (true) {
    mobile = await app.question("Your phone number is? ");
    if (validator.isMobilePhone(mobile, "id-ID")) {
      break; //akan keluar jika tidak valid
    } else {
      console.log("Phone number is invalid. Please Input again!");
    }
  }
  // validasi email
  while (true) {
    email = await app.question("Your email is? ");
    if (validator.isEmail(email)) {
      break;
    } else {
      console.log("Email is invalid. Please input again!");
    }
  }
  // menyimpan sebuah inputan nama, mobile, dan email
  app.saveData(nama, mobile, email);
};
main();
