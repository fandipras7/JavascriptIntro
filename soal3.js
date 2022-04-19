function seleksiNilai(nilaiAwal, nilaiAkhir, array) {
    let sortAngka;
    let allInput;
    if (Array.isArray(array)) {
        allInput = [nilaiAwal, nilaiAkhir, ...array];

        if (allInput.every(a => typeof(a) === 'number')) {
            if (nilaiAwal < nilaiAkhir && array.length > 5) {
                sortAngka = array
                    .sort((a, b) => a - b)
                    .filter(a => a > nilaiAwal && a < nilaiAkhir);

                sortAngka.length > 0 ? console.log(sortAngka) : console.log('Nilai Tidak ditemukan');;

            } else {
                nilaiAwal >= nilaiAkhir ? console.log('Nilai akhir harus lebih besar dari nilai awal') :
                    console.log('Jumlah angka dalam dataArray harus lebih dari 5');
            }
        } else {
            console.log('input yang anda masukan bukan angka');
        }

    } else {
        console.log('Harap masukan array');
    }



}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);

seleksiNilai(4, 3, [2, 3, 3, 30, 8, 10]);

seleksiNilai(4, 5, [2, 3, 3, 30, 8]);

seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])


// Tambahan Validasi
seleksiNilai('1', 12, [2, 25, 4, 1, 30, 18])
seleksiNilai(1, 12, { nama: 'fandi' })
seleksiNilai('1', 12, 'fandi')