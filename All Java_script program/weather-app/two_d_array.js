for (let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(i==1 && j==2){
                document.write(0);
            }
        else if (i==2 && j==1){
            document.write(0+ " ");
        }
        else if (i==2 && j==2){
            document.write(0+" ");
        }
        else 
        {
            document.write(1+" ");
        }
        }
        document.write("<br>");
    }