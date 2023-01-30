document.getElementById('containerProject').innerHTML = ""

let projectLists = [];
function getFileName()
{
    let selectedFile = document.getElementById("projectImage").value;
    selectedFile = selectedFile.replace( "C:\\fakepath\\","")
    document.getElementById("textProjectImage").value = selectedFile;
}

function insertProject(){
    event.preventDefault();
   
    let projectName = document.getElementById("projectName").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let description = document.getElementById("description").value;
    let nodeJs = document.getElementById("nodeJs").checked;
    let reactJs = document.getElementById("reactJs").checked;
    let vueJs = document.getElementById("vueJs").checked;
    let javaScript = document.getElementById("javaScript").checked;
    let projectImage = document.getElementById("projectImage").files;
    let image = URL.createObjectURL(projectImage[0]);
    let tagListIcon = "";

    let listIcon = [
        '<i class="fa-brands fa-node-js fa-2xl"></i>',
        '<i class="fa-brands fa-react fa-2xl"></i>',
        '<i class="fa-brands fa-vuejs fa-2xl"></i>',
        '<i class="fa-brands fa-js fa-2xl"></i>'
    ]

    let listIconChecked = [
        nodeJs,reactJs,vueJs,javaScript
    ]

    for(i = 0;i <= listIcon.length; i++){
        if(listIconChecked[i] == true){
            tagListIcon += listIcon[i]
        }else{
            tagListIcon += "";
        }
    }

  
    let objData = {
        projectName,
        startDate,
        endDate,
        description,
        tagListIcon,
        image
    }

    projectLists.push(objData);
    showData();
   
}

function showData(){
    document.getElementById('containerProject').innerHTML = "";
    console.log(projectLists.length)
    let lengthDescription;
    let styleOverflow;

   

    console.log(styleOverflow)
    for(var i = 0; i <= projectLists.length - 1; i++){
        lengthDescription = projectLists[i].description.length
        console.log(lengthDescription)
        
        if(lengthDescription >= 84){
            styleOverflow = 'project-card-description-overflow'
        }
        else{
            styleOverflow = 'project-card-description'
        }

        console.log(styleOverflow)
        document.getElementById('containerProject').innerHTML +=  
        `<div class="project-card default-border">
            <img src="${projectLists[i].image}" alt="">
                <a style="text-decoration:none" href="detail-project.html"><h2>${projectLists[i].projectName}</h2></a>
                <p>durasi: 3 bulan</p>
            <div class="${styleOverflow}">
                <p>
                    ${projectLists[i].description}
                </p>
            </div>
            <div class="list-icon-tech">
                ${projectLists[i].tagListIcon}
            </div>
            <div class="button-group">
                <button class="button-edit">edit</button>
                <button class="button-delete">delete</button>
            </div>
        </div>`
    }
}