# Comp2Dust - User Manual

To run locally 

npm install //in root directory

cd ./client  

npm install

cd ..

yarn dev

<hr>


This document explains commands in application and gives examples.

* User uploads a single image or up-to 100 image files through "Upload" button.
* To use Mozjpeg's  "-qtables" command user must upload his text file,
  that contain quantization matrix through the "Upload Your Configuration File Here Button"

For example our text file is named "chrominance.txt" its content should be like this

<hr>

17  18  24  47  99  99  99  99\
18  21  26  66  99  99  99  99\
24  26  56  99  99  99  99  99\
47  66  99  99  99  99  99  99\
99  99  99  99  99  99  99  99\
99  99  99  99  99  99  99  99\
99  99  99  99  99  99  99  99\
99  99  99  99  99  99  99  99

<hr>

  
# Mozjpeg

**Example input:**

 - [x] -quality  60
 - [x] -quality 20 -rgb -smooth 30
 - [x] -qtables luminance.txt -progressive -grayscale

~~["quality" , "60"]~~ Wrong!
~~-quality , 60~~    Wrong!
~~-quality60~~ Wrong!

 - There must be just a space between commands " "

<hr>

	-quality  N

 "N" is an integer between 0 - 100 

 - If output desired to be visually indistinguishable, value should be between 50-95
 - If the result is flawed, value should be incremented 5-10 unit each time
 - If the input is 100 as a value, every element of quantization table is taken as 1
 - ---

	-grayscale
Outputs monochrome Jpeg

	-rgb
Using this suppresses conversion from RGB colorspace to default YCbCr colorspace

	-optimize
Performs optimization of entropy encoding parameters

	-progressive
Creates progressive Jpeg file

<hr>

***Advanced commands***


    -dct int
 
Use accurate integer DCT method (default)

	-dct fast
Use less accurate integer DCT method

	-dct float
Use floating-point DCT method

	-smooth N
Smooth the input image to eliminate dithering noise

	-maxmemory N
Set limit for amount of memory to use in processing large images.

<hr>

	-baseline
Create baseline JPEG file

    -qtables file
Use the quantization tables given in the specified text file.

 - To use this command, first you should upload your text file that is including your custom quantization table via the "Upload Your Configuration File Here" button which placed under *info & custom Comfigurations* 
 - For example, if your input file is lumi.txt the command should be like the test below
 
> -qtables lumi.txt



# Jpegtran

Lossless compression algorithm

**Example input:**

 - [x] -rotate  90
 - [x] -flip vertical -trim
 - [x] -crop 100x200+50+20 -rotate 270

~~["rotate" , "90"]~~  Wrong!
~~-rotate , 90~~    Wrong!
~~-rotate      90~~ Wrong!

There must be just a space between commands " "
<hr>

    -optimize
Perform optimization of entropy encoding parameters

    -progressive
Create progressive JPEG file
   
    -flip horizontal
Mirror image horizontally (left-right)

    -flip vertical
Mirror image vertically (top-bottom)

    -rotate 90
Rotate image 90 degrees clockwise

    -rotate 180
Rotate image 180 degrees

    -rotate 270
Rotate image 270 degrees clockwise

    -transpose
Transpose image (across UL-to-LR axis)

    -transverse
Transverse transpose (across UR-to-LL axis)

    -trim
Drop non-transformable edge blocks

    -perfect
Fail with an error if the transformation is not perfect

    -crop WxH+X+Y
Crop to a rectangular region of width W and height H, starting at point X,Y.

    -wipe WxH+X+Y
Wipe (gray out) a rectangular region of width W and height H from the input image, starting at point X,Y


# Pngquant

*-o must be added at the end of every command!*

**Example Input:**

 - [x] --quality=60-80 -o
 - [x] --quality=10-20 --nofs -o
 - [x] --quality=10-20 --posterize 4 -o

~~["--quality" , "60-80"]~~  Wrong!
~~--quality  90~~    Wrong!
~~--quality=10-20 -o --nofs~~ Wrong!

 - There must be just a space between commands " "
<hr>

    --quality=min-max -o 
Min and max values are between 0-100

<hr>

>  -o

*To create the file successfully it should be added to the end of the commands*

<hr>

	--nofs 
Disable Floyd Steinberg dithering 

	--speed N 
speed/quality trade-off 1=slow, 4= default, 11=fast&rough

	--posterize N
Outputs low quality color. N is between 0-4 
	

# Gifsicle

**Example Input:**

 - [x] --colors=3 --lossy=100 --dither
 - [x] --resize 100x50 --crop 10,20+50x50

~~["--colors" , "50"]~~  Wrong!
~~--lossy , 5~~    Wrong!

 - There must be just a space between commands " "
<hr>

	 --crop X,Y+WxH --crop X,Y-X2,Y2
   Crop the image

	 --resize WxH
Resize the image

	--lossy=N	 
By changing color values reduce the size in exchange for noise and artifacts

	--rotate-90 --rotate-180 --rotate-270
Rotates the image	

	--colors=N
Reduce the color number to N. Effective interval 2-10
	
	--dither
Apply dithering after compression
	
***********
<strong>These are tested, general use commands, there are many more. To see more you can check 
compression engines' own manuals </strong>  
***********
