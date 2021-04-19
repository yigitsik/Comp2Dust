
var imageWidth;
var imageHeight;
var imageInitialWidth;
var imageInitialHeight;
var theImage= new Image();


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


        var img = new Image();
        //Get Uploaded Image Dimensions
            img.onload = function(){

                imageWidth = img.width;
                imageHeight = img.height;
                $('#oDimen').text(imageWidth+" X "+imageHeight);
            }
            img.src = files;


        fetch(files)
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

    //Set Option Value:Width
    $( "#width" ).change(function() {

        var width = $("#width").val();
        var currentHeight=  $( "#height" ).val();
        console.log("assiging width "+width);
        if (currentHeight==0&&width!=0)
        {
            comp.options.dimen = {width:width,height:imageHeight};
        }
        else if (width==0)
        {
            alert("Enter a valid width");
        }
        else
        {
            comp.options.dimen = {width:width,height:currentHeight};
        }
    });
    //Set Option Value:Width

    //Set Option Value:Height
    $( "#height" ).change(function() {

        var height = $("#height").val();
        var currentWidth=  $( "#width" ).val();
        console.log("assiging height "+height);
        if (currentWidth==0&&height!=0)
        {
            comp.options.dimen = {width:imageWidth,height:height};
        }
        else if (height==0)
        {
            alert("Enter a valid height");
        }
        else
        {
            comp.options.dimen = {width:currentWidth,height:height};
        }

    });
    //Set Option Value:Height



    //This Function Gets from input the Original Image and Puts it To Input Image Card
    function readURLIn(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            var img = new Image();


            reader.onload = function (e) {
                $('#input_Image').attr('src', e.target.result);
                $('#file_size').text((input.files.item(0).size/1024).toFixed(1) + "  kb");
                $('#file_type').text(input.files.item(0).type);
                $('#file_name').text( input.files.item(0).name);
                $('#Ifile_name').text( input.files.item(0).name);

                img.onload = (function (){
                    $('#iDimen').text(img.width+" X "+img.height);
                    imageInitialWidth=img.width;
                    imageInitialHeight=img.height;
                })
                img.src = e.target.result;
                theImage.src=e.target.result;
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".read").change(function(){
        readURLIn(this);
    });
    //This Function Gets from input the Original Image and Puts it To Input Image Card


    function resetOptions() // Reset Options
    {
        $('#width').val("");
        $('#height').val("");
        comp.options.dimen = {width:imageInitialWidth,height:imageInitialHeight};
        $('#comp_img').attr('src',theImage.src);
    }

    //Ajax
    $("#theForm").submit(function(event){
    event.preventDefault(); //prevent default action
    var post_url = $('#theForm').attr("action"); //get form action url
    var request_method = $('#theForm').attr("method"); //get form GET/POST method
    var form_data = $('#theForm').serialize(); //Encode form elements for submission

    $.ajax({
        url : post_url,
        type: request_method,
        data : form_data
    }).done(function(response){ //
        $("#server-results").html(response);
    });
});