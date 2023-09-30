
function getsUingAxios(){
    if(  document.getElementById('city').value=="amman"){
    
        country=`Jordan`
       city=`Amman`    
       getresult() 
       

   }
    document.getElementById('city').addEventListener('change',function(){
        if(  document.getElementById('city').value=="amman"){
    
            country=`Jordan`
           city=`Amman`    
           getresult() 
           document.getElementById('cities').innerHTML='<h1>عمان</h1>'
    
       }
       
        if(  document.getElementById('city').value=="tunisia"){
    
             country=`Tunisia`
            city=`Tunisia`    
            getresult() 
            document.getElementById('cities').innerHTML='<h1>تونس</h1>'
    
        }
    
        if(  document.getElementById('city').value=="doha"){
    
             country=`Qatar`
            city=`Doha`    
            getresult()
            document.getElementById('cities').innerHTML='<h1>الدوحة</h1>'
        }
    
        if(  document.getElementById('city').value=="cairo"){
    
             country=`Egypt`
            city=`Cairo`    
            getresult()
            document.getElementById('cities').innerHTML='<h1>القاهرة</h1>'
        }
    })
}

getsUingAxios()

function getresult(){
    axios.get(`http://api.aladhan.com/v1/timingsByCity?country=${country}&city=${city}`)

    .then((response) => {
let times=response.data
      console.log(times)
     console.log( times.data.date.gregorian.date)
        document.getElementById('days').innerHTML=`<span> ${times.data.date.gregorian.date} ${times.data.date.hijri.weekday.ar}</span>`

    document.getElementById('card1').innerHTML=`<p>الفجر</p>
    <p>${times.data.timings.Fajr}</p>`

    document.getElementById('card2').innerHTML=`<p>الظهر</p>
    <p>${times.data.timings.Dhuhr}</p>`
    document.getElementById('card3').innerHTML=`<p>العصر</p>
    <p>${times.data.timings.Asr}</p>`
    document.getElementById('card4').innerHTML=`<p>المغرب</p>
    <p>${times.data.timings.Maghrib}</p>`
    document.getElementById('card5').innerHTML=`<p>العشاء</p>
    <p>${times.data.timings.Isha}</p>`
    })
}
