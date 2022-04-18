// Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya(kecuali : split, reverse, join, foreach, map)

/*
1. Metode includes() melakukan pencarian untuk menentukan apakah satu string dapat ditemukan di dalam string lain,
mengembalikan nilai boolean
*/
// const text = 'aku sedang belajar pemrograman'
// const cek = text.includes('aku')
// console.log(cek);

// /*
// 2. Fungsi isNaN() menentukan apakah suatu nilai adalah NotAnumber atau tidak
// */
// const angka = 12.2;
// console.log(isNaN(angka));

// /*
// 3. Fungsi Math.ceil() selalu membulatkan angka ke bilangan bulat terbesar berikutnya.
// */
// console.log(Math.ceil(12.8));

// /*
// 4. fungsi Math.floor() mengembalikan bilangan bulat ke bilangan terkecil
// */
// console.log(Math.floor(12.8));

// // 5. Reduce
// const array1 = [1, 2, 3, 4]; // 0 + 1 + 2 + 3 + 4
// const initialValue = 12;
// const hasil = array1.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     initialValue
// );

// console.log(hasil);

// // 6. Filter untuk menyaring sebuah array yang dengan kondisi tertetentu
// const saring = array1.filter(a => a % 2 == 0)
// console.log(saring);

// // 7. some akan mengembalikan nilai true apabila salah satu kondisi terpenuhi
// const students = [{
//         name: 'Siswa 1',
//         age: 15,
//     },
//     {
//         name: 'Siswa 2',
//         age: 16,
//     },
//     {
//         name: 'Siswa 3',
//         age: 16,
//     },
//     {
//         name: 'Siswa 4',
//         age: 15,
//     },
// ]

// if (students.some(siswa => {
//         return siswa.age > 16
//     })) {
//     console.log('ketemu beberapa orang');
// } else {
//     console.log('tidak ada yang berumur lebih dari 16');
// }

// // 8. Mengemabilakn nilai true jika semua kondisi yang diberikan nilainya true.
// const ages = [20, 18, 18, 43];
// const allAdults = ages.every(n => n >= 18);

// console.log(allAdults);

// // 9. mengambil karakter dengan kondisi index tertentu.
// const str = 'aku makan gorengan';
// const substr = str.substring(0, 9);

// console.log(substr);


// // 10. toUpperCase menjadikan semua karakter menjadi huruf besar semua
// console.log(str.toUpperCase());;

// // 11. merubah suatu tipe data ke tipe data string
// const test = 12134;
// const coba = test.toString();

// console.log(test);
// console.log(typeof(coba));
