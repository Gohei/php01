<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>類似性スコア</title>
    <script src="src/jquery-2.1.3.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
   <body>
<p class="na">NAME(ローマ字)</p>
<input type="text" id="namae" name="name">
<p class="instruction">全員を評価した後、確定してから結果を見るボタン。<br>名前は日本語不可。</p>

       <div class="hasegawa"></div>
       <span class="star-rating">
           <input type="radio" name="hasegawa" value="1"><i></i>
           <input type="radio" name="hasegawa" value="2"><i></i>
           <input type="radio" name="hasegawa" value="3"><i></i>
           <input type="radio" name="hasegawa" value="4"><i></i>
           <input type="radio" name="hasegawa" value="5"><i></i>
       </span>

       <div class="Hermione"></div>
       <span class="star-rating">
           <input type="radio" name="Hermione" value="1"><i></i>
           <input type="radio" name="Hermione" value="2"><i></i>
           <input type="radio" name="Hermione" value="3"><i></i>
           <input type="radio" name="Hermione" value="4"><i></i>
           <input type="radio" name="Hermione" value="5"><i></i>
       </span>

       <div class="aoi"></div>
       <span class="star-rating">
           <input type="radio" name="aoi" value="1"><i></i>
           <input type="radio" name="aoi" value="2"><i></i>
           <input type="radio" name="aoi" value="3"><i></i>
           <input type="radio" name="aoi" value="4"><i></i>
           <input type="radio" name="aoi" value="5"><i></i>
       </span>

       <div class="kaera"></div>
       <span class="star-rating">
           <input type="radio" name="kaera" value="1"><i></i>
           <input type="radio" name="kaera" value="2"><i></i>
           <input type="radio" name="kaera" value="3"><i></i>
           <input type="radio" name="kaera" value="4"><i></i>
           <input type="radio" name="kaera" value="5"><i></i>
       </span>

       <div class="kiko"></div>
       <span class="star-rating">
           <input type="radio" name="kiko" value="1"><i></i>
           <input type="radio" name="kiko" value="2"><i></i>
           <input type="radio" name="kiko" value="3"><i></i>
           <input type="radio" name="kiko" value="4"><i></i>
           <input type="radio" name="kiko" value="5"><i></i>
       </span>

       <div class="kuroki"></div>
       <span class="star-rating">
           <input type="radio" name="kuroki" value="1"><i></i>
           <input type="radio" name="kuroki" value="2"><i></i>
           <input type="radio" name="kuroki" value="3"><i></i>
           <input type="radio" name="kuroki" value="4"><i></i>
           <input type="radio" name="kuroki" value="5"><i></i>
       </span>

       <div class="matsuoka"></div>
       <span class="star-rating">
           <input type="radio" name="matsuoka" value="1"><i></i>
           <input type="radio" name="matsuoka" value="2"><i></i>
           <input type="radio" name="matsuoka" value="3"><i></i>
           <input type="radio" name="matsuoka" value="4"><i></i>
           <input type="radio" name="matsuoka" value="5"><i></i>
       </span>

       <div class="matsushima"></div>
       <span class="star-rating">
           <input type="radio" name="matsushima" value="1"><i></i>
           <input type="radio" name="matsushima" value="2"><i></i>
           <input type="radio" name="matsushima" value="3"><i></i>
           <input type="radio" name="matsushima" value="4"><i></i>
           <input type="radio" name="matsushima" value="5"><i></i>
       </span>

       <div class="miwa"></div>
       <span class="star-rating">
           <input type="radio" name="miwa" value="1"><i></i>
           <input type="radio" name="miwa" value="2"><i></i>
           <input type="radio" name="miwa" value="3"><i></i>
           <input type="radio" name="miwa" value="4"><i></i>
           <input type="radio" name="miwa" value="5"><i></i>
       </span>

       <div class="onono"></div>
       <span class="star-rating">
           <input type="radio" name="onono" value="1"><i></i>
           <input type="radio" name="onono" value="2"><i></i>
           <input type="radio" name="onono" value="3"><i></i>
           <input type="radio" name="onono" value="4"><i></i>
           <input type="radio" name="onono" value="5"><i></i>
       </span>


       <div class="sample" id="submit">確定</div>

       <form action="post_confirm.php" method="post">
           <input type="text" id="data" name="data" class="data1">
           <input type="submit" value="結果を見る" class="bt">
       </form>

       <script src = "rate.js"></script>
</body>
</html>
