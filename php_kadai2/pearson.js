function init(){
var u = 0;
var n = 0;
var reviewArray = [];
var reviewArray_number = [];

//---------------csvファイルの読み込み-------------------------------

function getCSVFile() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        createArray(xhr.responseText);
    };

    xhr.open("get", "data/data.csv", true);
    xhr.send(null);
}
getCSVFile();

function createXMLHttpRequest() {
    var XMLhttpObject = null;
    XMLhttpObject = new XMLHttpRequest();
    return XMLhttpObject;
}

//-----------------------------------------------------------------

//読み込んだファイルを行で切り分ける
//カンマで切り分ける
function createArray(csvData) {
    var tempArray = csvData.split("\n");
    var csvArray = new Array();
    for(var i = 0; i<tempArray.length;i++){
        csvArray[i] = tempArray[i].split(",");
    }

//csvを読み込んで作成した配列の中からレビュー者の名前のみ新たな配列に格納
    var nameArray = new Array;
//index[0]にnameをpushしておく
    nameArray.push("name");
    for (n = 0; n < csvArray.length; n++){
        nameArray.push(csvArray[n][0]);
    }

//各人のレビューの点数を格納する配列作成
    for (u = 0; u < csvArray.length; u++){
        reviewArray.push(new Array);
        reviewArray_number.push(new Array);
    }

//csvを読み込んで作成した配列の中からレビューの点数のみ新たな配列に格納＆文字列から数値に変換
    for (n = 0; n < csvArray.length; n++){
        var c = 0;
        for (q = 1; q < csvArray[0].length; q++){
            c = Number(csvArray[n][q]);
            reviewArray[n].push(c);
        }
    }

//配列の中の文字列を強引に数字にする
//    var a = ["1","2","3","4","5"];
//    var c = [];
//    for(i = 0; i < a.length; i++){
//    var b = Number(a[i]);
//        c.push(b);
//    }
//    console.log(c);

//    console.log(csvArray);
//    console.log(nameArray);
//    console.log(reviewArray);



//---------------ピアソン関数で類似性スコアを算出-------------------------------

var dataArray = reviewArray;
//console.log(dataArray);

function sim_pearson() {
    var h = 0;
    var i = 0;
    var t = 0;
    var p = 0;

//類似性スコアを格納する配列作成
    for (p = 0; p < dataArray.length; p++){
        dataArray[p].distance = [];
    }

    for(h = 0; h < dataArray.length; h++){
        for(t = 0; t < dataArray.length; t++){
            var sum1 = 0, sum2 = 0,
                sum1Sq = 0, sum2Sq = 0,
                pSum = 0, n = dataArray[0].length, r = 0;
            for(i = 0; i < dataArray[0].length; i++) {
                // 評価点の合計。
                sum1 += dataArray[h][i];
                sum2 += dataArray[t][i];
                //console.log(dataArray[0][i]);

                // 平方を合計する。
                sum1Sq += Math.pow(dataArray[h][i], 2);
                sum2Sq += Math.pow(dataArray[t][i], 2);

                // 積を合計する
                pSum += dataArray[h][i] * dataArray[t][i];
                };
                //console.log(sum1);
                //console.log(sum2);
                //console.log(sum1Sq);
                //console.log(sum2Sq);
                //console.log(pSum);
                var num = pSum - (sum1 * sum2 / n),
                    den = Math.sqrt((sum1Sq - Math.pow(sum1, 2) / n) * (sum2Sq - Math.pow(sum2, 2) / n));

                if(den == 0) return;
                r = num / den;

                //グラフ表示用に数値をいじる。類似性スコアを絶対値にして100倍して小数点第二位以下を切り捨て
                r =Math.abs(r);
                r *= 100;
                r = Math.floor(r);

                dataArray[h].distance.push(r);
                //console.log(r);
        }
    }
}
sim_pearson();



//#dataに名前の配列と類似性スコアを出力
$("#data").text(nameArray);
for (i = 0; i < dataArray.length; i++){
    dataArray[i].distance.unshift(nameArray[i+1])
    $("#data").append("\n"+dataArray[i].distance);
}


//console.log(dataArray[0].distance);
//console.log(dataArray[1].distance);
//console.log(dataArray[2].distance);
//console.log(dataArray[3].distance);
//------------------------------------------------------------------------------------

}
}
init();


//-------------------------------グラフ描画---------------------------------------------
    function showRadar(){
    var data = [];
    var chart = RadarChart.chart();

    var c = document.getElementById("data").value,
        w = document.getElementById("w").value,
        h = document.getElementById("h").value,
        csv = c.split("\n").map(function(i){return i.split(",")})
    headers = []
    csv.forEach(function(item, i){
        if(i==0){
            headers = item;
        }else{
            newSeries = {};
            item.forEach( function(v, j){
                if(j==0){
                    newSeries.className = v;
                    newSeries.axes = [];
                }else{
                    newSeries.axes.push({"axis":[headers[j]], "value": parseFloat(v)});
                }
            });
            data.push(newSeries);
        }
    })
    RadarChart.defaultConfig.radius = 3;
    RadarChart.defaultConfig.w = w;
    RadarChart.defaultConfig.h = h;
    RadarChart.draw("#chart-container", data);
    function animate(elem,time) {
        if( !elem) return;
        var to = elem.offsetTop;
        var from = window.scrollY;
        var start = new Date().getTime(),
            timer = setInterval(function() {
                var step = Math.min(1,(new Date().getTime()-start)/time);
                window.scrollTo(0,(from+step*(to-from))+1);
                if( step == 1){ clearInterval(timer);};
            },25);
        window.scrollTo(0,(from+1));
    }

    var divVal = document.getElementById('chart-container');
    animate(divVal,600);
}

//------------------------------------------------------------------------------------
