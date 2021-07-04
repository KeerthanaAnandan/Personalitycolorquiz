let  first = sessionStorage.getItem("first");
let  second = sessionStorage.getItem("second");
let third = sessionStorage.getItem("third");
let fourth = sessionStorage.getItem("fourth");




// let optiono = ["Rings" ,  "Earrings" , "Necklace" , "Bracelets",    "Anklets"]


// if (thing == optiono[0]) {
//   document.querySelector(".firsthide").style.display = "block";
//   console.log("hana")
// }

// if (thing == optiono[1]) {
//   document.querySelector(".secondhide").style.display = "block";
//   console.log("tul")
// }

// if (thing == optiono[2]) {
//   document.querySelector(".thirdhide").style.display = "block";
//   console.log("set")
// }

// if (thing == optiono[3]) {
//   document.querySelector(".fourthhide").style.display = "block";
//   console.log("net")
// }

// if (thing == optiono[4]) {
//   document.querySelector(".fifthhide").style.display = "block";
//   console.log("yesot")
// }


document.querySelector(".firsthide").style.display = "none";
document.querySelector(".secondhide").style.display = "none";
document.querySelector(".thirdhide").style.display = "none";
document.querySelector(".fourthhide").style.display = "none";
// document.querySelector(".fifthhide").style.display = "none";

let mess;
let typo;
//first
if (
   first >  second &&
   first > third &&
   first > fourth
  
) {
 // typo = "first";
  mess = [
   "GREEN is your true color … ",   
   "You are usually very goal-oriented and practical in your solutions. You are an Ambitious and passionate person by nature. You embrace changes and take charge of your responsibilities. You are good at multitasking and you tend to have good administrative skills, good delegation skills. Your weaknesses may be being stubborn, Workaholic, domineering and easily angered.",
  ];
 document.querySelector(".firsthide").style.display = "block";
}

// second
else if (
   second >  first &&
   second > third  &&
   second > fourth
  
) {
  //typo = "second ";
  mess = [
"ORANGE is your true color …",
"You are very outgoing, energetic, and fast-paced individual who likes to be around people and enjoys being the centre of attention. You are good relationship builders, and most people like you right away. Compliments, acknowledgement of your achievements, words of admiration, and even applause from groups will be the most important thing for you. Procrastination, doesn’t finish the work what was started, too self-involved and trouble being alone may be your weaknesses ",
  
  ]; 
  document.querySelector(".secondhide").style.display = "block";
}
//third
else if (
  third >  second &&
  third >  first && 
  third > fourth
 
) {
  //typo = "Third";
  mess = [
    "GOLD is your true color … ",
    "You are a very detail-oriented individual who likes to be involved in things that are controlled and stable. You are interested in accuracy, rationality, and logic. People who can't seem to control their emotions will bother you because you believe being emotional makes objectivity difficult or perhaps impossible.", 
    "You also dislike being around people who are full of hype, since they desire facts, accuracy, and logic. Other people's emotions may not be a priority for you, as you tend to strive for the facts and let the chips fall where they may. Critical thinking, analytical, Imaginative and creative are your strengths and your weaknesses include detached behaviour, can appear unsocial and you like to do things your own way. "

    
  ];
 document.querySelector(".thirdhide").style.display = "block"; 
}
//fourth
else 
if (
   fourth >  second &&
   fourth > third &&
   fourth > first 
  
) {
 // typo = "fourth";
  mess = [
    "BLUE is your true color …",
            "You are usually very organized and also good at playing a very supportive role with others and are normally very caring, thoughtful, and compassionate. You are patient, tend to be good listeners, and will persevere when all others have given up. You especially like working in a group or on a team and will be a stabilizing force in these scenarios.",
"Although you may not be as fast as others, you are accurate and thorough. You usually keep your feelings to yourself and are reluctant to express yourself. You tend to go along to get along.",

  ];
 document.querySelector(".firsthide").style.display = "block";
}


//first === second
else if (
  first ==  second &&
  first >  third &&
  first > fourth
  
) {
 //typo = "second ";
 mess = [
  "ORANGE is your true color …",
  "You are very outgoing, energetic, and fast-paced individual who likes to be around people and enjoys being the centre of attention. You are good relationship builders, and most people like you right away. Compliments, acknowledgement of your achievements, words of admiration, and even applause from groups will be the most important thing for you. Procrastination, doesn’t finish the work what was started, too self-involved and trouble being alone may be your weaknesses ",
    
    ]; 
    document.querySelector(".secondhide").style.display = "block";
 
  
}

//SECOND == THIRD
else if (
  second ==  third &&
  second >  first &&
  second > fourth
 
) {
  mess = [
    "GOLD is your true color … ",
    "You are a very detail-oriented individual who likes to be involved in things that are controlled and stable. You are interested in accuracy, rationality, and logic. People who can't seem to control their emotions will bother you because you believe being emotional makes objectivity difficult or perhaps impossible.", 
    "You also dislike being around people who are full of hype, since they desire facts, accuracy, and logic. Other people's emotions may not be a priority for you, as you tend to strive for the facts and let the chips fall where they may. Critical thinking, analytical, Imaginative and creative are your strengths and your weaknesses include detached behaviour, can appear unsocial and you like to do things your own way. "

    
  ];
 document.querySelector(".thirdhide").style.display = "block"; 
    

 // document.querySelector(".thirdhide").style.display = "block";
  
 
  
}
//third ==  fourth
else if (
  fourth == third &&
  fourth > second &&
  fourth > first
 
 ) {
   // typo = "fourth";
  mess = [
    "BLUE is your true color …",
            "You are usually very organized and also good at playing a very supportive role with others and are normally very caring, thoughtful, and compassionate. You are patient, tend to be good listeners, and will persevere when all others have given up. You especially like working in a group or on a team and will be a stabilizing force in these scenarios.",
"Although you may not be as fast as others, you are accurate and thorough. You usually keep your feelings to yourself and are reluctant to express yourself. You tend to go along to get along.",

  ];
 document.querySelector(".firsthide").style.display = "block";
   
 }
//fourth == first
else if (
 fourth == first &&
 fourth > second &&
 fourth > third 

) {
  // typo = "first";
  mess = [
    "GREEN is your true color … ",   
    "You are usually very goal-oriented and practical in your solutions. You are an Ambitious and passionate person by nature. You embrace changes and take charge of your responsibilities. You are good at multitasking and you tend to have good administrative skills, good delegation skills. Your weaknesses may be being stubborn, Workaholic, domineering and easily angered.",
   ];
  document.querySelector(".firsthide").style.display = "block";
  
}

 

  

   


else{
  {
// typo = "first";
mess = [
  "GREEN is your true color … ",   
  "You are usually very goal-oriented and practical in your solutions. You are an Ambitious and passionate person by nature. You embrace changes and take charge of your responsibilities. You are good at multitasking and you tend to have good administrative skills, good delegation skills. Your weaknesses may be being stubborn, Workaholic, domineering and easily angered.",
 ];
document.querySelector(".firsthide").style.display = "block";
  }
}




const mao = mess.map((ms) => `<li>` + ms + `</li>`).join("");


//document.querySelector(".msghere").innerHTML = mao;


window.onload = function() {
  what();
  function what(){
    // const headmsg = document.querySelector(".headmsg");
   
    // headmsg.innerHTML = typo;
   
   const msgme = document.querySelector(".msghere");
  
   msgme.className = "center-item";
  
   msgme.innerHTML = mao;
  
  };
}
//document.querySelector(".usertype").value = typo;

//document.querySelector(".usertype").style.display = "none";
//console.log(document.querySelector(".usertype").value)

//share buttons
/* 

Social Share Links:

WhatsApp:
https://wa.me/?text=[post-title] [post-url]

Facebook:
https://www.facebook.com/sharer.php?u=[post-url]

Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]

Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

*/

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");

const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Checkout what type of communicator I am");
  // let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",

    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  // linkedinBtn.setAttribute(
  // "href",
  //"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com"
  //`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  //);
  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();
