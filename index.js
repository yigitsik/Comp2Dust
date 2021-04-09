
    let comp = Compress({
    inputSelector: '#input_cmprss',
    downloadSelector: '#comp_download',
    imageSelector: '#comp_img',
    dropSelector: ".img-con",
    rate: 75,
    imagePrefix: 'compressed-',
    dimen: null,
    rateSelector: '#comp_rate',
});
    comp.on('compressed', (files) => {
    console.group('compressed images data url');
    console.log('this array contains the url for the compressed images');
    console.log(files);
    console.log('listen to the compressed event to get the array');
    console.groupEnd();


    $('#output_image').attr('src',files[0]);



        // var img = new Image();
        //
        // img.onload = function(){
        //     var height = img.height;
        //     var width = img.width;
        //
        //      alert(img.height*img.width*24/1024);
        // }
        //
        // img.src = files;

        fetch(files[0])
            .then(res => res.blob()) // Gets the response and returns it as a blob
            .then(blob => {
                $('#Ofile_size').text((blob.size/1024).toFixed(1)+ "  kb");
                $('#Ofile_type').text(blob.type);
            });

    });


    comp.on('compressing', () =>
    {
        console.log("compressing");
    });



    //This Function Gets the Original Image and Puts it To Input Image Card
    function readURLIn(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#input_Image').attr('src', e.target.result);
                $('#file_size').text((input.files.item(0).size/1024).toFixed(1) + "  kb");
                $('#file_type').text(input.files.item(0).type);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".read").change(function(){
        readURLIn(this);
    });





