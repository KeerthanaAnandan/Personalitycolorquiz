let questions = [
  {
    id: 1,
    question: "How do you handle any uncomfortable situation?",
  
    options: [	
      "Wonder what you’re getting in return.",
      "Say yes, but then have second thoughts",
      "Tell them you’ll think about it",
      "Just agree",
      ],
  },
  {
    id: 2,
    question:
    "When given a big project, what you think first?",
   

    options: [
      "When is the deadline?",
      "Who am I gonna work with?",
      "Tell me what is the work, I need to do my research",
      "Have we done any projects similar to this before?",
      ],
  },
  {
    id: 3,
    question: "When someone is crying, how do you react?",

    options: [
      "Turn my head as if I didn’t notice",
      "Try to talk to them",
      "Wonder what could have happened",
      "Hold their hand / tell them don’t cry",
      ]
  },
  {
    id: 4,
    question: "When asked to move to new city for work, what you most likely to reply?",
   
    options: ["Tell me when",
    "Omg, I am so excited",
    "I will think about it",
    "Hmmm, Can I say no?",
    ],
  },
  {
    id: 5,
    question: "What motivates you the most?",
  
    options: [
    "Money/Leadership/Success",
    "Public recognition / Awards / Acceptance",
    "Opportunities to be independent and analytical / Problem solving",
    "Team/group opportunities/Security / Calm work atmosphere"],
  },
  {
    id: 6,
    question:
      "How you most likely to spend your alone time?",
   
    options: ["Working / self-care",
    "Clubbing / socializing",
    "Relax in a Quiet, Solitude place",
    "Help or spend time with friends/ family",
    ],
  },
  {
    id: 7,
    question: "What job attracts you the most? ",
    
    options: ["President / CEO / Politician",
    "Salesperson / Host/ Entertainment",
    "Engineer/Musician/ Scientist/Artist",
    "Teacher / Manager / Social worker / Doctor",
    ],
  },
  {
    id: 8,
    question: "What phrase makes you excited?  ",
  
    options: ["“Let’s, get it done”",
    "“You look great”",
    "“How does that work?”",
    "“Can you help me with this?“",
    ],
  },
  {
    id: 9,
    question: "What turns you off? ",
  
    options: ["Being taken advantage of / Losing",
    "Humiliation / Unappreciation",
    "Distractions/ Uncontrolled emotions",
    "Aggressive behaviour",
    ],
  },
  {
    id: 10,
    question: "Do you  try to please everyone ?",
   
    options: [
    "Never",
    "Maybe sometimes",
    "I don't know'",
    "Yes always",
    ],
  },
  
 
];

let question_count = 0;
//let points = 0;
Max_Questions = 10;

let firstPoints = 0;
let secondPoints = 0;
let thirdPoints = 0;
let fourthPoints = 0;


window.onload = function () {
  show(question_count);
};

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "mailchimpform.html";
  }

  let user_answer = document.querySelector(".option.active").innerHTML;

  //check answer
  for (let i = 0; i < questions.length ; i++) {
    if (user_answer == questions[i].options[0]){
      //console.log("hana")
      firstPoints += 1;
    }
  }
    for (let i = 0; i < questions.length ; i++) {
      if (user_answer == questions[i].options[1]){
        //console.log("hana")
        secondPoints += 1;
      }
    }
      for (let i = 0; i < questions.length ; i++) {
        if (user_answer == questions[i].options[2]){
          //console.log("hana")
          thirdPoints += 1;
        }
      }
      for (let i = 0; i < questions.length ; i++) {
        if (user_answer == questions[i].options[3]){
          //console.log("hana")
          fourthPoints += 1;
        }
      }

  // if (question_count == 11) {
  
  //  sessionStorage.setItem("Mwoyeyo" , user_answer)
  //  console.log(user_answer);
   
  // }
  
  // //trust(0)
  // if (user_answer === "I have a hard time gaining weight." || user_answer === "Mostly straight" || user_answer === "The same as your hips" || user_answer === "Bones" || user_answer === "Overlap" || user_answer === "Normal, Light" || user_answer === "Leg workouts are not my favorites." || user_answer === "No fat") {
  //   firstPoints += 1;
  // }
  // //neglect(1)
  // else if (user_answer === "I both gain and lose weight without too much effort." || user_answer === "Hourglass" || user_answer === "Wider than your hips" || user_answer === "Muscles" || user_answer === "Touch" || user_answer==="Feel full and satisfied" || user_answer==="I am good with all type of workouts." || user_answer === "Upper body/equally stored in all body parts") {
  //   secondPoints += 1;
  // }
  // //guilt(2)
  // else if (user_answer === "I gain weight easily." || user_answer === "Pear (narrow shoulders, wide hips)" || user_answer === "Narrower than your hips" || user_answer=== "Body fat" || user_answer === "Don't Touch" || user_answer === "Tired, bloated, lethargic" || user_answer === "I am really good with leg exercises comparing to other workouts." || user_answer === "Belly, hips, and thighs") {
  //   thirdPoints += 1;
  // }
 

  sessionStorage.setItem("first", firstPoints);
  sessionStorage.setItem("second", secondPoints);
  sessionStorage.setItem("third", thirdPoints);
  sessionStorage.setItem("fourth" , fourthPoints)
 
  //let coloranswer = document.querySelector("li.option.active");
  //e.target.coloranswer.classList.add("correct");

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");
 

  progressBarFull.style.width = ` ${((question_count / Max_Questions) * 100 + 50 )}%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = ` ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  let [first, second , third , fourth] = questions[count].options;
  ///////no of questions

 question.innerHTML = `
  <p class="iamquestion"> ${questions[count].question}</p>
   <ul class="option_group">
  <li><span class="option">${first}</span></li>
  <li ><span class="option">${second}</span></li>
  <li ><span class="option">${third}</span></li>
  <li ><span class="option">${fourth}</span></li>
 
</ul> 
  `; 

 /* question.innerHTML = questions[question_count].options.map((single) => {
    (
    `<li><span class="option">${single}</span></li>`
    )
  }) */

//   if(question_count == 11 ){
//     let [first, second , third , fourth , fifth] = questions[count].options;
//     question.innerHTML = `
//   <p class="iamquestion"> ${questions[count].question}</p>
//    <ul class="option_group">
//   <li><span class="option">${first}</span></li>
//   <li ><span class="option">${second}</span></li>
//   <li ><span class="option">${third}</span></li>
//   <li ><span class="option">${fourth}</span></li>
//   <li ><span class="option">${fifth}</span></li>
 
// </ul> 
//   `; 
//   }

  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
