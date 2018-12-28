
    var i=0;
    var images=[];
    var time = 3000;
    var playing = true;
    images[0]='greenway.jpg';
    images[1]='food.jpg';
    images[2]='bike.jpg';
    

    function changeImg(){

        document.slide.src=images[i];

        if(i<images.length-1)
        {
        i++;
        }
        else
        {
        i=0;
        }
        setTimeout("changeImg()",time);
        
        }
        window.onload=changeImg;
    
