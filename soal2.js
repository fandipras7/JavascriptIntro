const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]

const searchName = function(key, n, callback) {
    let hasilSearch;
    if (typeof(key) === 'string' && typeof(n) === "number" && n >= 0) {
        hasilSearch = name.filter(a => a.toLowerCase().includes(key.toLowerCase()))
        if (hasilSearch.length >= n) {
            while (hasilSearch.length > n) {
                hasilSearch.pop()
            }

        } else if (hasilSearch.length === 0) {
            console.log(`nama dengan key: '${key}' tidak ditemukan`)
        } else {
            console.log(`nama dengan key: '${key}' hanya ada ${hasilSearch.length}`);
        }
    } else {
        hasilSearch = 'Input Salah';
    }

    callback(hasilSearch);
}

searchName('andri', 4, (result) => {
    console.log(result);
});

searchName('an', 6, (result) => {
    console.log(result);
});