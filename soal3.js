function cariUrutanAngka(nilaiAwal, nilaiAkhir, array) {

    const allInput = [nilaiAwal, nilaiAkhir, ...array];
    let sortAngka;
    if (allInput.every(a => typeof(a) === 'number')) {
        if (nilaiAwal < nilaiAkhir && array.length > 5) {
            sortAngka = array
            .sort((a, b) => a - b)
            .filter(a => a > nilaiAwal && a < nilaiAkhir);
            if (sortAngka.length === 0) { console.log('Nilai tidak ditemukan'); }

            console.log(sortAngka);
        } else {
            nilaiAwal > nilaiAkhir ? console.log('Nilai Awal harus lebih besar dari Nilai Akhir') :
                console.log('Panjang array harus lebih dari 5');
        }
    } else {
        console.log('input yang anda masukan bukan angka');
    }

}

cariUrutanAngka(40, 35, [2, 25, 3, 30, 8, 10]);



// function cariUrutanAngka(nilaiAwal, nilaiAkhir, array) {
//     let cekNumber = [nilaiAwal, nilaiAkhir, ...array];
//     for (let i = 0; i < cekNumber.length; i++) {
//         if (typeof(cekNumber[i]) !== 'number') {
//             return 'harap masukan angka'
//         }
//     }
//     let resultOfsort;
//     if (nilaiAwal < nilaiAkhir && array.length > 5) {
//         resultOfsort = array.filter(a => a > nilaiAwal && a < nilaiAkhir);
//         if (resultOfsort.length === 0) { return 'Nilai tidak ditemukan' }
//     } else {
//         return nilaiAwal > nilaiAkhir ? 'Nilai akhir harus lebih besar dari nilai awal' : 'jumlah data harus lebih dari 5';
//     }

//     return resultOfsort;
// }