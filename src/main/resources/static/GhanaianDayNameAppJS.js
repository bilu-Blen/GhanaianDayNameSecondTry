//prompt("Would you like to see the demale or male name of the day? ");

var days =[
    {name: "Monday", femaleName: "Adwoa", maleName: "Kwadwo"},
    {name: "Tuesday", femaleName: "Abena", maleName: "Kwabena"},
    {name: "Wednesday", femaleName: "Akua", maleName: "Kweku"},
    {name: "Thursday" , femaleName: "Yaa", maleName: "Yaw"},
    {name: "Friday", femaleName: "Afua", maleName:"Kofi"},
    {name: "Saturday", femaleName: "Ama", maleName: "Kwame"},
    {name: "Sunday", femaleName:"Akosua", maleName: "Kwesi"}
];

function findTheDate(){
    var dateentered = document.getElementById("dateentered").value;

    for(var i = 0; i<days.length; i++){

        var newName = days[i].name;
        if(dateentered.toLowerCase()==newName.toLowerCase()) {
            var newPar = document.getElementById("par2").innerHTML = days[i].name;
            var dayChosen = days[i].name;
            console.log(dayChosen);
            var spanForQues = document.getElementById("spanForQues");
            var text = document.createTextNode("Do you want to female or male name for this date?");
            spanForQues.appendChild(text);
        }

    }
}
function findName(){
    var userNameChoice = document.getElementById("femaleOrMale").value;
    var dateentered = document.getElementById("dateentered").value;
    for(var i = 0; i<days.length; i++) {
        if(userNameChoice.toLowerCase()=="female" && dateentered.toLowerCase()== days[i].name.toLowerCase()){
            document.getElementById("name").innerHTML = days[i].femaleName;

        }else if(userNameChoice.toLowerCase()=="male" && dateentered.toLowerCase()== days[i].name.toLowerCase()){
            document.getElementById("name").innerHTML = days[i].maleName;
        }
    }

}

function postMethod(){
    var dateentered = document.getElementById("dateentered").value;
    var obj = new XMLHttpRequest();
    obj.open("POST", "http://localhost:8080/addday");
    obj.setRequestHeader("Content-Type", "application/json");
    var day = JSON.stringify({"name":dateentered});
    console.log(dateentered);

    //send data
    obj.send(day);
    document.write("The date is added, check now");
}

function postWithResponse(){
    var dateentered = document.getElementById("dateentered").value;

    var obj = new XMLHttpRequest();
    obj.open("POST", "http://localhost:8080/addday");
    obj.setRequestHeader("Content-Type", "application/json");
    var day = JSON.stringify({"name":dateentered});
    obj.send(day);
    obj.onreadystatechange = function checkAPIState(){
        console.log("Checking status");
        if(this.status==200 && this.readyState==4){
            document.write(obj.response);
        }else{
            console.log(this.status);
        }
    }
}

