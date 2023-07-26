//http://api.weatherapi.com/v1/current.json?key=2b3897824cbf4e7d805163856231501&q=mumbai&aqi=no

//element accessing methodco

const tempratureField=document.querySelector('.temp');
// console.log(tempratureField);

const locationFeild=document.querySelector(".time_location p");
//console.log(locationFeild); location ko access kar liye hain

 const dateandtimeFeild=document.querySelector('.time_location span');
// console.log(dateandtimeFeild);//span element  k o access kara hain


 const conditionFeild=document.querySelector('.condition p');
 //console.log(weatherFeild);//Empytu p tag reutnr hoga 

const searchFeild=document.querySelector('#t1');
 //console.log(searchfeild);//input ellemetn store hoga

 const searchbutton=document.querySelector("#b1");
 //console.log(searchbutton);

 const m1=document.querySelector('.m1');
 console.log(m1);

 const form=document.querySelector('form');//list return karega elemtent kii,pahle elemetn 0 index pa hoga
// console.log(form);




form.addEventListener('submit',searchForLocation);


let target='Lucknow';


const fetchResults=async (targetlocation)=>
{
    //api ko dynamic bana diya hain hamne 
    let url=`http://api.weatherapi.com/v1/current.json?key=2b3897824cbf4e7d805163856231501&q=${targetlocation}&aqi=no`

    const res=await fetch(url);
    

    const data=await res.json();
    //json is an object in which data is store in the form of object//json ma actual data store hain hamra ,json data chaiye hamko 

  
    //console.log(data);//data object hain hamra,isme data store hain hamra  

    let locationname=data.location.name;//data ka andar location ,data harma object hain usme properites hain, data ka andar location ka andar , location name ko access kara hain
    // console.log(localtionname);
    let time=data.location.localtime;

    // let time=data.location.localtime;
    // console.log(localtime);

    let temp=data.current.temp_c;
    // console.log(temp);//data ka andar current ka andar temprature ko get kara hain, data object hain hamra 

    let condition=data.current.condition.text//data ka andar cuurent aur current ka andar current aur current main condioton , condituion ka andar text
// console.log(condition);

updatedetails(temp,locationname,time,condition);

}


//ye funtion details ko update karne ka liye 
function updatedetails(temp,locationName,time,condition)
{
    let splitDate=time.split(' ')[0]//time ko psslit kar rahe hain 

    let splitTime=time.split(' ')[1];

    let currentDay=getDay(new Date(splitDate).getDay());//current day hamko milega hamra 




    tempratureField.innerHTML=temp;
    console.log(tempratureField);
   
    locationFeild.innerHTML=locationName;
    console.log(locationFeild);
    // dateandtimeFeild.innerHTML=time;
    dateandtimeFeild.innerHTML=`${splitDate} ${currentDay} ${splitTime}`;
    console.log(dateandtimeFeild);
    // conditionFeild.innerText=condition;
    // console.log(conditionFeild);

    m1.innerHTML=condition;


    

    // conditionf
}



// function searchForLocation

// fetchResults(target);



//ye funciton location dega target fetch result ka andar
function searchForLocation(e){
    e.preventDefault();

    target=searchFeild.value;//input ma jo bhi kuch idy ah  hain woh hamne store karwa liye targer element ka andar

    fetchResults(target);
}


fetchResults(target);


function getDay(number)
{
    switch(number)
    {
        case 0:
            return 'Sunday';
            case 1:
                return 'Monday';
                case 2:
                    return "Tuesday";
                    case 4:
                        return "Thursday";
                        case 5:
                            return "Friday";
                            case 6:
                                return "saturday";
    }
}