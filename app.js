const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Membuat folder "data" jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Membuat file "contacts.json" jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// Memanggil rl.question dengan promise
const question = (pertanyaan) => {
  return new Promise((resolve, rejects) => {
    rl.question(pertanyaan, (input) => {
      resolve(input);
    });
  });
};

const saveData = (nama, mobile, email) => {
  // Membuat objek "contact" dengan data yang sudah dikumpulkan sebelumnya.
  const contact = { nama, mobile, email };

  // Membaca isi file "contacts.json" dan menyimpannya dalam variabel "file".
  const file = fs.readFileSync(dataPath, "utf8");

  // Mengurai kontak-kontak yang ada dalam file JSON.
  const contacts = JSON.parse(file);

  // Menambahkan kontak baru ke dalam array "contacts".
  contacts.push(contact);

  // Menyimpan data yang sudah diperbarui kembali ke file "contacts.json".
  fs.writeFileSync(dataPath, JSON.stringify(contacts));

  // Menampilkan pesan terima kasih setelah data berhasil disimpan.
  console.log("Terima kasih sudah memasukkan data!");
  rl.close();
};
module.exports = { question, saveData };
