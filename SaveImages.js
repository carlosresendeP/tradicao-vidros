// //salvar imagens para o portifólio
// const saveImages = (images) => {
//     const savedImages = JSON.parse(localStorage.getItem('ImagesPortfolio')) || [];
//     images.forEach(image => {
//         if (!savedImages.includes(image)) {
//             savedImages.push(image);
//         }
//     });
//     localStorage.setItem('savedImages', JSON.stringify(savedImages));
// }

// //carregar imagens salvas
// const loadSavedImages = () => {
//     const savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];
//     const imageContainer = document.querySelector('.portfolio-item');
//     imageContainer.innerHTML = ''; // Clear existing images
//     savedImages.forEach(image => {
//         const imgElement = document.createElement('img');
//         imgElement.src = image;
//         imgElement.alt = 'Saved Image';
//         imageContainer.appendChild(imgElement);
//     });
// }