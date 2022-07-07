var fastlist, data, ident, count, seite, letzte;

function fastlink_start(){

  fastlist = document.getElementById("fastlink_list");

  var requestURL = "fastlink.json";
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    data = request.response;
    console.warn(data);
    for(i=0; i < data.fastlink.length; i++){
      fastlist.innerHTML = fastlist.innerHTML +"<li id='"+ i +";' onclick='fast(this)'>"+ data.fastlink[i].name +"</li>";
    }
  }
}

function fast(li){
  for(i=0; i<count;i++){
    sessionStorage.removeItem(i);
    console.log("REMOVE");
  }
  count = 0;
  seite = "";
  ident = li.id;
  console.log(ident);
  ident = String(ident);
  var re = /;/g;
  while (match = re.exec(ident)) {
    console.log(match);
    count++;
    console.log("count:"+ count);
    sessionStorage.setItem("nummer:"+ count, match.index);
  }

  //count = count - 1;

  for(i=0; i < count; i++){
    if(i == 0){
      //sessionStorage.setItem(1, ident.substr(i, sessionStorage.getItem(i+1)));
      letzte = sessionStorage.getItem("nummer:"+ (i + 1));
      console.log("letzte: "+ letzte);
      seite = data.fastlink[ident.substr(0, sessionStorage.getItem("nummer:1"))].seiten;
      console.warn("count = 0: ");
      console.warn(seite);
    }else{
      console.log(seite);
      seite = seite[ident.substr(parseInt(letzte) + 1, 1)].seiten;
      letzte = sessionStorage.getItem("nummer:"+ (i + 1));
      console.log("letzte: "+ letzte);
      console.warn("count > 0: ");
      console.warn(seite);
      //letzte = sessionStorage.getItem("nummer:"+ );
    }
  }

  //seite = data.fastlink[sessionStorage.getItem("1")].seiten;
  //console.log(seite);
  fastlist.innerHTML = "";
  for(i=0; i < seite.length; i++){
    fastlist.innerHTML = fastlist.innerHTML +"<li id='"+ ident +""+ i +";' onclick='fast(this)'>"+ seite[i].name +"</li>";
  }
}