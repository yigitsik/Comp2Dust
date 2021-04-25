
var imageWidth;
var imageHeight;
var imageInitialWidth;
var imageInitialHeight;
var imageInitialSize;
var outputSize;
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
                outputSize = (blob.size/1024).toFixed(1)
                $('#Ofile_size').text((blob.size/1024).toFixed(1)+ " % Saved");
                $('#status').text(((imageInitialSize-outputSize)/imageInitialSize*100).toFixed(1)+ "% saved")
                $('#Ofile_type').text(blob.type);
            });

    });

    comp.on('saveFileUrl', (e) =>
    {
        console.log("compressing");
        theImage.src = e;
    });

// Drag Over
$('#comp_img')[0].addEventListener('drop', function ()
{

    setTimeout(Load,10);

    function Load() {

        var reader = new FileReader();
        // theImage.src = e.target.currentSrc;
        $('#input_Image').attr('src', theImage.src); // Sends Input to To Input Image Container
        $('#iDimen').text(theImage.width+" X "+theImage.height);//Sets Input dimensions
        imageInitialHeight = theImage.height;
        imageInitialWidth = theImage.width;

        fetch(theImage.src)
            .then(res => res.blob()) // Gets the response and returns it as a blob
            .then(blob => {
                reader.readAsDataURL(blob)
                $('#file_size').text((blob.size/1024).toFixed(1)+ "  kb");
                $('#file_type').text(blob.type);
            });

        $('#Ifile_name').text("Input Image")
        $('#file_name').text("Output Image")

    }

})

    //Set Option Value:Width
    $( "#width" ).keyup(function() {

        var width = $("#width").val();
        var currentHeight=  $( "#height" ).val();
        console.log("assiging width "+width);
        if (currentHeight==0&&width<10000)
        {
            comp.options.dimen = {width:width,height:imageHeight};
        }
        else if (width==0||width>10000||width<0)
        {
            alert("Enter a value between 1-10000");
        }
        else
        {
            comp.options.dimen = {width:width,height:currentHeight};
        }
    });
    //Set Option Value:Width

    //Set Option Value:Height
    $( "#height" ).keyup(function() {

        var height = $("#height").val();
        var currentWidth=  $( "#width" ).val();
        console.log("assiging height "+height);
        if (currentWidth==0&&height<10000)
        {
            comp.options.dimen = {width:imageWidth,height:height};
        }
        else if (height==0||height>10000||height<0)
        {
            alert("Enter a value between 1-10000");
        }
        else
        {
            comp.options.dimen = {width:currentWidth,height:height};
        }

    });
    //Set Option Value:Height

    //Read Image From Input Button
    function readURLIn(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            var img = new Image();

            reader.onload = function (e) {
                imageInitialSize = (input.files.item(0).size/1024).toFixed(1);
                $('#input_Image').attr('src', e.target.result); // Sends Input to To Input Image Container
                $('#file_size').text( imageInitialSize+ "  kb"); // Sets Input file size
                $('#file_type').text(input.files.item(0).type); // Sets Input file type
                $('#Ifile_name').text( input.files.item(0).name); // Sets Input file name
                $('#file_name').text( input.files.item(0).name);

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

    function resetOptions() // Reset Options
    {
        $('#width').val("");
        $('#height').val("");
        comp.options.dimen = {width:imageInitialWidth,height:imageInitialHeight};
        $('#comp_img').attr('src',theImage.src);
        $('#output_image').attr('src',theImage.src);
        $('#oDimen').text("");
        $('#Ofile_size').text("");
        $('#Ofile_type').text("");
        $('#status').text("");
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