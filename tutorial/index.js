const firstCard = document.getElementById('firstCard')
const secondCard = document.getElementById('information')

document.addEventListener("DOMContentLoaded", function () {
    firstCard.style.display = 'block'
    secondCard.style.display = 'none'

    const sentFormButton = document.getElementById("sentForm");
    const infoContainer = document.getElementById('information');

    sentFormButton.addEventListener("click", function () {

        firstCard.style.display = 'none'
        secondCard.style.display='flex';

        const nombreInput = document.getElementById('nameInput').value;
        const apellidoInput = document.getElementById('lastnameInput').value;
        const generoInput = document.querySelector('input[name="genero"]:checked');
        const bdayDateInput = document.getElementById('bday').value;

        // Verifica si se seleccionó un género
        let genero = "No especificado";
        if (generoInput) {
            genero = generoInput.nextElementSibling.textContent;
        }

        // Muestra la información en el contenedor
        infoContainer.innerHTML = `
            <h1>Gracias por usar mi formulario, ${nombreInput}</h1>
            <div class = "viewInfo"<h2>Información del usuario:</h2>
            <p><strong>Nombre:</strong> ${nombreInput}</p>
            <p><strong>Apellido:</strong> ${apellidoInput}</p>
            <p><strong>Sexo:</strong> ${genero}</p>
            <p><strong>Fecha de Nacimiento:</strong> ${bdayDateInput}</p>
            </div>`;

        // Muestra la imagen seleccionada
        const pictureInput = document.getElementById('picture');
        const selectedFile = pictureInput.files[0];
        if (selectedFile) {
            const imgUrl = URL.createObjectURL(selectedFile);
            const imageElement = document.createElement('img');
            imageElement.src = imgUrl;
            infoContainer.appendChild(imageElement)
            ;
        }
    });
});
