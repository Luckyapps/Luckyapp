var news_nav;

function newspage_home_load(){
    news_nav = document.getElementById("news_nav");
    var news_nav_content = "";
    for(i=0;i<newslist.content.length-1;i++){
        news_nav_content += "<li><a href='#newslist_elem_id_"+ i +"'>"+ newslist.content[i].title +"</a></li>";
    }
    news_nav.innerHTML = news_nav_content;
}

async function newspage_load(){
    if(newslist){
        var i = url_data.id;
        var list = newslist.content[i];
        var news_title = document.getElementsByClassName("news_title")[0];
        var news_summary = document.getElementsByClassName("news_summary")[0];
        var news_content = document.getElementsByClassName("news_content")[0];
        var news_dataline = document.getElementsByClassName("news_dataline")[0];

        if(list.title && list.title != ""){
            news_title.style.display = "block";
            news_title.innerHTML = list.title;
        }else{
            news_title.style.display = "none";
        }

        if(list.date || list.source){
            if(list.date){
                news_dataline.innerHTML += "<div>"+ list.date +"</div>";
            }
            if(list.source){
                news_dataline.innerHTML += "<div>"+ list.source +"</div>";
            }
            news_dataline.style.display = "flex";
        }else{
            news_dataline.style.display = "none";
        }
        
        if(list.summary && list.summary != ""){
            news_summary.style.display = "block";
            news_summary.innerHTML = "<h2>Zusammenfassung</h2>"+ list.summary;
        }else{
            news_summary.style.display = "none";
        }

        if(list.content && list.content != ""){
            news_content.style.display = "block";
            news_content.innerHTML = "<hr>"+ list.content;
        }else{
            news_content.style.display = "none";
        }

    }else{
        await sleep(10);
        newspage_load();
    }
}