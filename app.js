

const fullName = document.getElementById("fname");
const age = document.getElementById("age");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const text = document.getElementById("text");

const fillInName = document.getElementById("fillInName") 
const fillInAge = document.getElementById("fillInAge") 
const fillInEmail = document.getElementById("fillInEmail") 
const fillInPhone = document.getElementById("fillInPhone") 

const aleert2 = document.getElementById("aleert2") 
const aleert = document.getElementById("aleert") 
const arr =[]
//  text.innerHTML = `<li>${arr.value}</li>`



    

function blood() {
    
    if (   !fullName.value){
            fillInName.innerHTML =("Please fill your full name.");
            fullName.focus;
            return;
        }
    if (age.value < 18) {
            aleert2.innerHTML =("You must be 18 years or older.");
            age.focus();
        return;
    }
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (  !pattern.test(email.value)) {
            aleert.innerHTML =("Please enter a valid email address.");
            email.focus();
            return;
    }
    if (   !phone.value){
            fillInPhone.innerHTML =("Please enter your phone number.");
            phone.focus();
            return;
        }
    
    //     if (   !bloodGroup.value){
    //             fillInblood.innerHTML =("Please fill out this Select.");
    //     bloodGroup.focus();
    //     return;
    // }    
    let blood_div_1 =document.getElementById('blood-div-1')

    function bloodGroup() {

                const bloodGroup = document.getElementById("recipient-blood-group").value;
                const fillInblood = document.getElementById("fillInblood") 
                const bloodCompatibility = {
                    "A+": ["A+", "A-", "O+", "O-"],
                    "A-": ["A-", "O-"],
                    "B+": ["B+", "B-", "O+", "O-"],
                    "B-": ["B-", "O-"],
                    "AB+": ["AB+", "AB-", "A+", "A-", "B+", "B-", "O+", "O-"],
                    "AB-": ["AB-", "A-", "B-", "O-"],
                    "O+": ["O+", "O-"],
                    "O-": ["O-"]
                };

                if (bloodGroup ==="") {
                    fillInblood.innerHTML = " ❌ Please select a blood group.";
                    return fillInblood;
                } 
                fillInblood.innerHTML = `✅ Compatible donors: ${bloodCompatibility[bloodGroup].join(", ")}`;
                
                blood_div_1.style.display = 'Block'; 
            }
            console.log(fillInblood);
        
        
console.log(bloodGroup());
     let obj = {
             Name: fullName.value,
         age: age.value,
         email: email.value,
         Number: phone.value,
         blood_group: bloodGroup.value,
         donor_text: text.value,
         
        }
        text.innerHTML = obj.Name + '<br>' + obj.age + '<br>' + obj.email + '<br>' + obj.Number 
        arr.push(obj)
    }