var update_selected, update_notification, update_notification_container, update_notification_toolbar, update_notification_title, update_notification_close, update_notification_content;

function load_update_notification_stylesheet(){
    update_notification = document.getElementById("update_notification");
    update_notification_container = document.getElementById("update_notification_container");
    update_notification_toolbar = document.getElementById("update_notification_toolbar");
    update_notification_title = document.getElementById("update_notification_title");
    update_notification_close = document.getElementById("update_notification_close");
    update_notification_content = document.getElementById("update_notification_content");

    update_notification_close.addEventListener("click", u_n_close);

    update_notification_container.addEventListener("click", u_n_link);

    u_n_start();
}

function u_n_close(){
    localStorage.setItem("updatelist_stand", Object.keys(updatelist[0]).length);
    update_notification.classList = "u_n_closed";
}

function u_n_show(){
    update_selected = updatelist[0][Object.keys(updatelist[0])[0]][0];
    update_notification_title.innerHTML = update_selected.name;
    update_notification_content.innerHTML = update_selected.description;
    update_notification.classList = "u_n_opened";
}

function u_n_start(){
    if(localStorage.getItem("updatelist_stand")){
        if(JSON.stringify(Object.keys(updatelist[0]).length) == localStorage.getItem("updatelist_stand")){
            return;
        }else{
            u_n_show();
        }
    }else{
        u_n_show();
    }
}

function u_n_link(evt){
    if(evt.target.contains(update_notification_close)){
    }else{
        u_n_close();
        flyin = true;
        version_history_open();
    }
}