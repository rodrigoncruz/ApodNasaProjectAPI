function searchSpace() {

    const searchDay = $('#date').val();
    const api_key = 'huSx4bqrhiOZ9KSFPt8K0dOF1kjViKNgaVsmBSGI';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${searchDay}`;
    
    $.ajax({
        type: 'GET',
        url: url,
        success: function(response){
            $('#titulo').text(response.title);
            $('#img').attr('src', response.url)
            $('#text').text(response.explanation)
        }
    })
}