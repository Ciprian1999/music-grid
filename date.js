/*2.Folosind API-ul https://randomuser.me/api/, afisati la apasarea unui buton("Genereaza utilizator")
următoarele detalii ale unui utilizator random: picture, name, gender, e-mail și age*/
const URL = 'https://randomuser.me/api/';
async function getRandomUsers() {
    const result = await fetch(URL);
    const data = await result.json();
    console.log(data);
}
document.getElementById('fetch').addEventListener('click', getRandomUsers);
