
let body = document.querySelector("body")
let input1 = document.getElementsByClassName("form-control")[0]
// LE  BOUTTON AJOUTER
// d'abord je target 
// 
let buttonAjouter = document.getElementsByClassName("btn")[0]

// les 4 BUTTONS 

let buttonTodo = document.getElementsByClassName("btn")[1]

let buttonDone = document.getElementsByClassName("btn")[2]

let buttonDeleted = document.getElementsByClassName("btn")[3]

let buttonAll = document.getElementsByClassName("btn")[4]

let boxBody = document.getElementsByClassName("box-body")[0]

let ul = document.getElementById("listall")
boxBody.appendChild(ul)





buttonTodo.addEventListener("click", () => {
  
})

//  buttonDeleted.addEventListener("click", () => {
//    boxBody.
    
// })



buttonAjouter.setAttribute("type", "button")
buttonAll.addEventListener("click", () => {
  li.remove()


 
})

buttonAjouter.addEventListener("click", () =>{
  if (input1.value != "") {
    let li =  document.createElement("li")
    li.innerText = input1.value
    ul.appendChild(li)
    li.style.width = "1040px"
    li.style.height = "47px"
    li.style.backgroundColor = "darkgray"
    li.style.borderRadius =  "1%"
    li.style.fontStyle = "italic"
    li.style.fontWeight  = "bold"
    li.style.fontSize = "12px"
    
    
    // les icon button
    
    // 
    let iconButton = document.createElement("button")
    iconButton.setAttribute("class", "fas fa-check-circle")
    iconButton.style.backgroundColor = "darkgray"
    iconButton.style.border = "none"
    iconButton.style.color = "blue"
    iconButton.style.marginLeft = "870px"
    
    // 
    let iconButton2 = document.createElement("button")
    iconButton2.setAttribute("class", "fas fa-trash-alt")
    iconButton2.style.backgroundColor = "darkgray"
    iconButton2.style.border = "none"
    iconButton2.style.color = "yellow"

    iconButton2.addEventListener("click", () => {
      li.remove()
    }) 
    
    // 
    let iconButton3 = document.createElement("button")
    iconButton3.setAttribute("class", "fas fa-edit")
    iconButton3.style.backgroundColor = "darkgray"
    iconButton3.style.border = "none"
    iconButton3.style.color = "red"
    
    li.style.display = "flex"
    li.style.alignItems = "center"

    iconButton.addEventListener ("click", ()=> {
      switch (li.style.backgroundColor) {
        case "darkgray":
      li.style.backgroundColor = "green"
      iconButton3.style.backgroundColor = "green"
      iconButton.style.backgroundColor = "green"
      iconButton2.style.backgroundColor = "green"
          
          break;

        default:
          li.style.backgroundColor = "darkgray"
      iconButton3.style.backgroundColor = "darkgray"
      iconButton.style.backgroundColor = "darkgray"
      iconButton2.style.backgroundColor = "darkdray"
          break;
      }
    })
    let li22 = document.createElement("li")
    let setValue = document.createElement("li")
    
    let input2 = document.createElement("input")
    iconButton3.addEventListener ("click", ()=> {
      
      li.removeChild(iconButton2)
      li.removeChild(iconButton3)
      li.removeChild(iconButton)
      // l icon button pour sauvegarde
      let iconButton4 = document.createElement("button")
      iconButton4.setAttribute("class", "fas fa-save")
      iconButton4.style.backgroundColor = "lightgray"
      iconButton4.style.border = "none"
      iconButton4.style.color = "red"
      iconButton4.style.marginLeft = "770px"
      
      li.appendChild(iconButton4)
      li.appendChild(input2)
      //  event sur le buton save
      iconButton4.addEventListener("click", () => {
        li.innerText = input2.value
        li.append(iconButton, iconButton2, iconButton3)
      })
      
    })
    
    li.append(iconButton, iconButton2, iconButton3)

    
    
    buttonTodo.addEventListener("click", () => {

      switch (li.style.backgroundColor) {
        case "green":
          ul.removeChild(li)
          
          break;

        default:
          ul.appendChild(li)
          break;
      }
      
      
      
    })
    
      buttonDone.addEventListener("click", () => {
            switch (li.style.backgroundColor) {
              case "darkgray":
                ul.removeChild(li)
                
                break;
            
              default:
                // ul.removeChild(li)
                break;
            }
          })

        buttonAll.addEventListener("click", () => {
          switch (li.style.backgroundColor) {
            case "darkgray":
              ul.appendChild(li)  
              break;
              case "green":
                ul.appendChild(li)
                
                break;
          
            default:
              
              break;
          }
        })
  } else {
    
    
    
    
  }
  
  
  
  
  })
 
  
  
  
  
    
 

  
  
  
  









