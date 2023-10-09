const progress = document.getElementById('progress');
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded / event.total;
    };
    xhr.send(formData);
    e.preventDefault();
})