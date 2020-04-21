
export default function GetSidebar(document){
    const sidebarContainer = document.getElementById("entity_sidebar");
    //Make sure sidebar exists, otherwise return empty array
    if(sidebarContainer){
        const sidebarList = sidebarContainer.children[2].children;
        let data = [];
        for(const item of sidebarList){
            let optionText = item.children[0].children[0].innerHTML;
            let optionLink = item.children[0].attributes[2].value;
            //Symbol correction
            if(optionText.includes("&amp;")){
                optionText = optionText.replace("&amp;","&")
            }
            //push to object array that gets passed as props to server
            data.push({text: optionText, link: optionLink});
        }
        return data
    }
    else{
        return []
    }
}