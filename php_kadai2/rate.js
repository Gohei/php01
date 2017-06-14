$('#submit').on('click',function(){
    var dataArray = [];
    var name = $("#namae").val();
    var hasegawa = parseInt($("[name=hasegawa]:checked").val());
    var Hermione = parseInt($("[name=Hermione]:checked").val());
    var aoi = parseInt($("[name=aoi]:checked").val());
    var kaera = parseInt($("[name=kaera]:checked").val());
    var kiko = parseInt($("[name=kiko]:checked").val());
    var kuroki = parseInt($("[name=kuroki]:checked").val());
    var matsuoka = parseInt($("[name=matsuoka]:checked").val());
    var matsushima = parseInt($("[name=matsushima]:checked").val());
    var miwa = parseInt($("[name=miwa]:checked").val());
    var onono = parseInt($("[name=onono]:checked").val());

    dataArray.push(name);
    dataArray.push(hasegawa);
    dataArray.push(Hermione);
    dataArray.push(aoi);
    dataArray.push(kaera);
    dataArray.push(kiko);
    dataArray.push(kuroki);
    dataArray.push(matsuoka);
    dataArray.push(matsushima);
    dataArray.push(miwa);
    dataArray.push(onono);

    document.getElementById("data").value = dataArray;

    console.log(document.getElementById("data").value);
    console.log(dataArray);
});


