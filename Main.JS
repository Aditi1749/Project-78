var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Mom", "Dad", "Me", "Us"];
var i = 0;

function update()

   var array_length = images.length - 1;
   var updated_image = images[i];
   var updated_text = names[i];
   
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
         
    i++;
    
    
    if(i>array_length){
    i = 0;
      
    }
