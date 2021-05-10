let currentDiv;
const elements = [];
const colours = ["pink","lightseagreen","lightblue","plum"];

function mouseover(e){
    e.target.style.backgroundColor = colours[Math.floor(Math.random()*(colours.length))];
}

function reset(wide,tall,total,offset){
    if (offset == undefined){
        for (let x = 0; x<total*wide; x=x+wide){
            for (let y = 0; y<total*tall; y=y+tall){
                currentDiv = document.createElement("div");
                s = currentDiv.style;
                currentDiv.addEventListener("mouseover",(e)=>{mouseover(e)}); 
                
                //event listeners
                    // ^^ just calls another function
                s.backgroundColor = "pink";
                s.position = "absolute";
                s.height = tall+"em";
                s.width = wide+"em"; //basic styling
                s.top = y+"em";
                s.left = x+"em";
        
                elements.push(currentDiv); //add this div to the array
            }
        }
    }
    else if (offset!= undefined){
        for (let x = 0; x<total*wide; x=x+wide){
            for (let y = offset; y<total*tall; y=y+tall){
                currentDiv = document.createElement("div");
                s = currentDiv.style;
                currentDiv.addEventListener("mouseover",(e)=>{mouseover(e)}); 
                
                //event listeners
                    // ^^ just calls another function
                s.backgroundColor = colours[Math.floor(Math.random()*(colours.length))];;
                s.position = "absolute";
                s.height = tall+"em";
                s.width = wide+"em"; //basic styling
                s.top = y+"em";
                s.left = x+"em";
        
                elements.push(currentDiv); //add this div to the array
            }
        }
    }
    for (let i = 0; i<elements.length;i++){
        document.body.appendChild(elements[i]); //add everything to the html
    }
}

const resetbutton = document.createElement("button");
resetbutton.textContent = "reset";
resetbutton.addEventListener("mousedown",(e)=>{reset(0.1,0.1,100,2)})
document.body.appendChild(resetbutton);



for (let i = 0; i<elements.length;i++){
    document.body.appendChild(elements[i]); //add everything to the html
}