function hitungFibonacci() {
    const input = document.getElementById('fibonacci-input').value;
    let a = 0, b = 1, result = '';
    
    for (let i = 0; i <= input; i++) {
        result += a + ', ';
        const next = a + b;
        a = b;
        b = next;
    }
    
    document.getElementById('fibonacci-result').textContent = 'Deret Fibonacci = ' + result;
}

function tampilkanInput() {
    const jenisBangun = document.getElementById('jenis-bangun').value;
    const semuaInput = document.querySelectorAll('#volume-input > div');

    semuaInput.forEach((input) => {
        input.style.display = 'none';
    });

    document.getElementById(jenisBangun + '-input').style.display = 'block';
}

document.getElementById('jenis-bangun').addEventListener('change', tampilkanInput);

function tampilkanInput() {
    const jenisBangun = document.getElementById('jenis-bangun').value;
    const semuaInput = document.querySelectorAll('#volume-input > div');

    semuaInput.forEach((input) => {
        input.style.display = 'none';
    });

    document.getElementById(jenisBangun + '-input').style.display = 'block';
}

document.getElementById('jenis-bangun').addEventListener('change', tampilkanInput);

function hitungVolumeKubus() {
    const sisiKubus = parseFloat(document.getElementById('sisi-kubus').value);

    const volumeKubus = Math.pow(sisiKubus, 3);

    document.getElementById('volume-kubus-result').textContent = 'Volume Kubus = ' + volumeKubus.toFixed(2);
}

function hitungVolumeBalok() {
    const panjangBalok = parseFloat(document.getElementById('panjang-balok').value);
    const lebarBalok = parseFloat(document.getElementById('lebar-balok').value);
    const tinggiBalok = parseFloat(document.getElementById('tinggi-balok').value);

    const volumeBalok = panjangBalok * lebarBalok * tinggiBalok;

    document.getElementById('volume-balok-result').textContent = 'Volume Balok = ' + volumeBalok.toFixed(2);
}

function hitungVolumeTabung() {
    const jariJariTabung = parseFloat(document.getElementById('jari-jari-tabung').value);
    const tinggiTabung = parseFloat(document.getElementById('tinggi-tabung').value);

    const volumeTabung = Math.PI * Math.pow(jariJariTabung, 2) * tinggiTabung;

    document.getElementById('volume-tabung-result').textContent = 'Volume Tabung = ' + volumeTabung.toFixed(2);
}