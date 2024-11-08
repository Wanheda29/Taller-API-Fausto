document.getElementById('fetchButtonDog').addEventListener('click', fetchDogImage);
document.getElementById('fetchButtonCat').addEventListener('click', fetchCatImage);



function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const dogImgContainer = document.getElementById('dogImageContainer');
            dogImgContainer.innerHTML = ''; // Limpiar contenido anterior

            const catImgElement = document.createElement('img');
            catImgElement.src = data.message;
            catImgElement.alt = 'Imagen de un perro';
            catImgElement.style.width = '300px'; 

            dogImgContainer.appendChild(catImgElement);
        })
        .catch(error => {
            console.error('Error al obtener la imagen:', error);
        });
}
function fetchCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1')
        .then(response => response.json())
        .then(data => {
            const catImgContainer = document.getElementById('catImageContainer');
            catImgContainer.innerHTML = ''; // Limpiar contenido anterior

            if (data.length > 0) {
                const catImgElement = document.createElement('img');
                catImgElement.src = data[0].url;
                catImgElement.alt = 'Imagen de un gato';
                catImgElement.classList.add = 'rounded float-right'
                catImgElement.style.width = '300px'; 

                catImgContainer.appendChild(catImgElement);
            }
        })
        .catch(error => {
            console.error('Error al obtener la imagen:', error);
        });
}