
export default function GetFeed(document){
    const container = document.getElementById("PagesProfileHomePrimaryColumnPagelet");
    const pagePhotos = document.getElementById("page_photos");
    if(container){
        //list of posts on main page
        const feed = container.firstChild.childNodes[1].firstChild.childNodes[1];
        const postArray = document.querySelectorAll("div[data-testid='post_message]");
        console.log(postArray.length)
        for (const post in postArray) {
            //console.log(post)
            return []
        }
    }
    else{
        return []
    }
}