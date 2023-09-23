function age_calculate(){
    var now = new Date();
    var date_of_birth_before = document.getElementById("date_of_birth");
    var date_of_birth = date_of_birth_before.value;
    var age_calculatee = document.getElementById("currenct_age");
    age_calculatee.textContent = "You are " + ((now - new Date(date_of_birth)) / 31556952000).toPrecision(2) + " years old!";
};






