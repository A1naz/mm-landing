document.getElementById('download-link').addEventListener('click', function(event) {
    event.preventDefault();  // предотвращаем переход по ссылке
    
    const link = event.currentTarget;
    const url = 'https://app.marketmonstr.pro/Prezentation.pdf';

    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = 'Prezentation.pdf';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        })
        .catch(console.error);
});
