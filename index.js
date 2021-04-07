
    let comp = Compress({
    inputSelector: '#input_cmprss',
    downloadSelector: '#comp_download',
    imageSelector: '#comp_img',
    dropSelector: ".img-con",
    rate: 100,
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
});

    comp.on('compressing', () => console.log('compressing'))

