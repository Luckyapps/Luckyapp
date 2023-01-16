async function start_news_stylesheet(){
    if(luckyapp_core.modules.content.loaded){
        load_news_stylesheet();
    }else{
        await sleep(1);
        start_news_stylesheet();
    }
    luckyapp_core.modules.news.loaded = true;
}

async function load_news_stylesheet(){
    if(newslist!=undefined){
        console.log(newslist);
        if(luckyapp_core.page_config.modules.news.list){
            var news_output = document.getElementById(luckyapp_core.page_config.modules.news.list);
            news_output.innerHTML = "";
            news_output.classList.add("news_container");
            for(i=0; i<newslist.content.length;i++){
                if(!newslist.content[i].hide){
                    var container_parameter = "";
                    var dataline = "";
                    container_parameter += "id='newslist_elem_id_"+ i +"'";
                    /*if(newslist.content[i].link){
                        console.log("link");
                        container_parameter += "onclick='window.location.assign(`"+ newslist.content[i].link +"`)'";
                    }*/
                    if(window.location.href.search("Luckyapp/index.html") > 0){
                        container_parameter += "onclick='window.location.assign(`pages/news/newspage.html?id="+ i +"`)'";
                    }else{
                        container_parameter += "onclick='window.location.assign(`newspage.html?id="+ i +"`)'";
                    }

                    if(newslist.content[i].date){
                        dataline += "<div>"+ newslist.content[i].date +"</div>";
                    }
                    if(newslist.content[i].source){
                        dataline += "<div>"+ newslist.content[i].source +"</div>";
                    }
                    news_output.innerHTML += "<div "+ container_parameter +" class='news_card'>"
                    +"<h4>"+ newslist.content[i].title +"</h4>"
                    +"<p>"+ newslist.content[i].summary +"</p>"
                    +"<div class='news_dataline'>"+ dataline +"</div>"
                    +"</div>"
                }
            }
        }
    }else{
        console.warn("newslist forceload");
        await sleep(3);
        await scriptLoader_("newslist.js");
        load_news_stylesheet();
    }
}