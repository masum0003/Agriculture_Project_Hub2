let table = new DataTable('#myTable');


document.getElementById("form").addEventListener('submit',function(e){
    e.preventDefault();

    let name = document.getElementById('exampleInputName').value.trim();
    let email = document.getElementById('exampleInputEmail').value.trim();
   
    if(name !== ''){
        
        if(email !==''){
            window.alert("Submission Succesful")
        }
        else{
             document.getElementById("email-error").innerHTML = "<P class='text-danger'> Please enter your email </p>"
    }
        
    }
    else{
        document.getElementById("name-error").innerHTML = "<P class='text-danger'> Please enter your name </p>"
    }
})