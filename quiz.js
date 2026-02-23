let quizes = [
  {
    id: 'quizlegi1',
    startButtonId: 'startButton1',
    questionElementId: 'question1',
    optionsElementId: 'options1',
    questions: [
      {
        question: "Fie *:R->R, x*y=y*x pentru orice x,y\u2208R. Ce putem spune despre *?",
        options: ["Este comutativă","Este asociativă","Admite element neutru","Nimic"],
        answer: "Este comutativă"
      },
      {
        question: "O lege de compoziție poate să aibă mai mult de un element neutru?",
        options: ["Da", "Nu"],
        answer: "Nu"
      },
      {
        question: "O lege de compoziție poate avea TOATE elementele simetrizabile?",
        options: ["Da", "Nu"],
        answer: "Da"
      },
      {
        question: "O lege de compoziție poate avea elemente simetrizabile dacă nu admite element neutru?",
        options: ["Da", "Nu"],
        answer: "Nu"
      }
    ]
  },
  {
    id: 'quizlegi2',
    startButtonId: 'startButton2',
    questionElementId: 'question2',
    optionsElementId: 'options2',
    questions: [
      {
        question: "Fie *:R->R lege de compoziție, cu x*y=x²+2y+3. Care este rezultatul operației 3*5?",
        options: ["34", "22", "26", "19"],
        answer: "22"
      },
      {
        question: "Fie * lege de compoziție, unde x*y=x+y-3. Care e rezultatul lui (-2)*4?",
        options: ["3", "-1", "1", "-3"],
        answer: "-1"
      },
      {
        question: "Fie * lege de compoziție cu x*y=x+y-6. * este asociativă?",
        options: ["Da", "Nu"],
        answer: "Da"
      },
      {
        question: "Fie *:R->R lege de compoziție cu x*y=x+y-3. Care este valoarea elementului neutru?",
        options: ["-4", "0", "3", "Nu admite element neutru"],
        answer: "3"
      }
    ]
  },
  {
    id: 'quizlegi3',
    startButtonId: 'startButton3',
    questionElementId: 'question3',
    optionsElementId: 'options3',
    questions: [
      {
        question: "Fie * o lege de compoziție definită pe mulțimea numerelor raționale, unde x*y = x^2 + 2xy + y^2. Ce valori ale lui x și y fac ca x*y să fie 0?",
        options: ["x = 0, y = 0", "x = 1, y = -1", "x = -2, y = 2", "Nu există valori care să satisfacă condiția"],
        answer: "x = 0, y = 0"
      },
      {
        question: "Fie * o lege de compoziție definită pe mulțimea numerelor reale, unde x*y = √(x^2 + y^2) - 2x + y. Ce valori ale lui x și y fac ca x*y să fie minimă?",
        options: ["x = 0, y = 0", "x = 1, y = -1", "x = 2, y = 2", "Nu există valori care să satisfacă condiția"],
        answer: "x = 1, y = -1"
      },
      {
        question: "Fie * o lege de compoziție definită pe mulțimea numerelor complexe, unde x*y = (x + y) / (x - y). Care este inversul elementului neutru al lui *?",
        options: ["-1", "1", "i", "Nu admite element neutru"],
        answer: "1"
      },
      {
        question: "Fie * o lege de compoziție definită pe mulțimea numerelor naturale, unde x*y = 2^x + 3^y. Care este rezultatul operației 2*3?",
        options: ["17", "13", "15", "12"],
        answer: "15"
      },
    ]
  },
  {
    id: 'quizgeom1',
    startButtonId: 'startButton4',
    questionElementId: 'question4',
    optionsElementId: 'options4',
    questions: [
      {
        question: "Un triunghi echilateral are...",
        options: ["Un unghi drept", "Toate laturile de lungimi egale", "Două laturi de lungimi egale", "Un unghi obtuz"],
        answer: "Toate laturile de lungimi egale"
      },
      {
        question: "Câte unghiuri are un pătrat?",
        options: ["2", "3", "4", "5"],
        answer: "4"
      },
      {
        question: "Cât este perimetrul unui cerc cu diametrul=8?",
        options: ["8π", "16π", "4π", "32π"],
        answer: "8π"
      },
      {
        question: "Câte grade are un unghi drept?",
        options: ["45°", "90°", "180°", "360°"],
        answer: "90°"
      }
    ]
  },
  {
    id: 'quizgeom2',
    startButtonId: 'startButton5',
    questionElementId: 'question5',
    optionsElementId: 'options5',
    questions: [
        {
          question: "Ce este aria unui triunghi echilateral cu latura de lungime 6?",
          options: ["6√3", "9√3", "12√3", "18√3"],
          answer: "9√3"
        },
        {
          question: "Cât este perimetrul unui pătrat cu latura = 5",
          options: ["10", "15", "20", "25"],
          answer: "20"
        },
        {
          question: "În △ABC avem AB=3, BC=4 si AC=5. Ce fel de triunghi este?",
          options: ["Oarecare", "Isoscel", "Dreptunghic", "Echilateral"],
          answer: "Dreptunghic"
        },
        {
          question: "Câte grade are suma măsurilor unghiurilor unui triunghi dreptunghic?",
          options: ["90", "180", "270", "360"],
          answer: "180"
        }
      ]
  },
  {
    id: 'quizgeom3',
    startButtonId: 'startButton6',
    questionElementId: 'question6',
    optionsElementId: 'options6',
    questions: [
        {
          question: "Care este aria unui trapez cu bazele de lungimi 5 și 10 și înălțimea de lungime 8?",
          options: ["30", "40", "50", "60"],
          answer: "60"
        },
        {
          question: "Într-un cerc de rază 6, care este lungimea unui segment de cerc corespunzător unui unghi de 120 de grade?",
          options: ["2π", "3π", "4π", "6π"],
          answer: "2π"
        },
        {
          question: "Ce este suma măsurilor unghiurilor interioare ale unui poligon cu n laturi?",
          options: ["(n - 2) * 90°", "(n - 2) * 180°", "(n - 2) * 270°", "(n - 2) * 360°"],
          answer: "(n - 2) * 180°"
        },
        {
          question: "Care este raportul dintre aria unui cerc și pătratul lungimii razei sale?",
          options: ["π", "2π", "π/2", "2/π"],
          answer: "π"
        }
      ]
  },
  {
    id: 'quiztrig1',
    startButtonId: 'startButton7',
    questionElementId: 'question7',
    optionsElementId: 'options7',
    questions: [
        {
          question: "sin(30°)?",
          options: ["1/3", "1/2", "0", "1"],
          answer: "1/2"
        },
        {
          question: "cos(60°)?",
          options: ["1", "1/3", "1/2", "0"],
          answer: "1/2"
        },
        {
          question: "Raportul dintre sin(x) si cos(x) este:",
          options: ["ctg(x)", "1", "tg(x)", "(n - 2) * 360°"],
          answer: "(n - 2) * 180°"
        },
        {
          question: "tg(45°)?",
          options: ["1", "0", "1/2", "1/4"],
          answer: "1"
        }
      ]
  },
  {
    id: 'quiztrig2',
    startButtonId: 'startButton8',
    questionElementId: 'question8',
    optionsElementId: 'options8',
    questions: [
        {
          question: "sin²(x)+cos²(x)=?",
          options: ["1", "1/2", "0", "2sin(x)"],
          answer: "1"
        },
        {
          question: "sin(x)+sin(y)=?",
          options: ["1", "2sin(x+y)/ 2 ⋅ cos(x-y)/ 2", "2sin(x-y)/ 2 ⋅ cos(x+y)/ 2", "0"],
          answer: "2sin(x+y)/ 2 ⋅ cos(x-y)/ 2"
        },
        {
          question: "ctg(0°)?",
          options: ["0", "1", "Nu există", "1/2"],
          answer: "Nu există"
        },
        {
          question: "Care este valoarea lui x, unde 1 + 3cosx = cos2x, cu x\u2208(π/2,π)?",
          options: ["π/6", "π/3", "2π/3", "π/2"],
          answer: "2π/3"
        }
      ]
  },
  {
    id: 'quiztrig3',
    startButtonId: 'startButton9',
    questionElementId: 'question9',
    optionsElementId: 'options9',
    questions: [
        {
          question: "sin(a-b) ⋅ sin(a+b) = (sin(a)-sin(b)) ⋅ (sin(a)+sin(b)) pentru orice a,b\u2208R?",
          options: ["Da", "Nu", "Poate", "Nedecidabil"],
          answer: "Da"
        },
        {
          question: "sin(x)+sin(π-x)+sin(π+x)+sin(2π-x)=0?",
          options: ["Da, mereu", "Uneori", "Niciodată", "Nedecidabil"],
          answer: "Da, mereu"
        },
        {
          question: "tg(x)+ctg(x)+2 = 0. x=?, știind că x\u2208(π/2,π)?",
          options: ["0", "π/3", "3π/4", "π/2"],
          answer: "3π/4"
        },
        {
          question: "Dacă x\u2208(0,π/2) și sin(x) = 4/5, sin2x=?",
          options: ["16/25", "1", "1/25", "24/25"],
          answer: "24/25"
        }
      ]
  },
  {
    id: 'quizint1',
    startButtonId: 'startButton10',
    questionElementId: 'question10',
    optionsElementId: 'options10',
    questions: [
        {
          question: "Ca o funcție să fie derivabilă, ce trebuie să fie?",
          options: ["Inversabilă", "Injectivă", "Continuă", "Toate funcțiile sunt derivabile"],
          answer: "Continuă"
        },
        {
          question: "O integrală fără coeficienți se numește:",
          options: ["Invalidă", "Definită", "Nedefinită", "Nulă"],
          answer: "Nedefinită"
        },
        {
          question: "O constantă derivată este",
          options: ["0", "1", "x", "Nu se pot deriva constantele"],
          answer: "0"
        },
        {
          question: "∫1dx = ?",
          options: ["x + C", "C", "x", "0"],
          answer: "x + C"
        }
      ]
  },
  {
    id: 'quizint2',
    startButtonId: 'startButton11',
    questionElementId: 'question11',
    optionsElementId: 'options11',
    questions: [
        {
          question: "∫xdx = ?",
          options: ["x²/2 + C", "1 + C", "x²/3 + C", "x/2 + C"],
          answer: "x²/2 + C"
        },
        {
          question: "Dacă F este primitivă a lui f, atunci F'(x)=",
          options: ["0", "f(x)", "F(x)", "1"],
          answer: "f(x)"
        },
        {
          question: "f''(x) este:",
          options: ["f(x)", "[f'(x)]'", "x", "x'"],
          answer: "[f'(x)]'"
        },
        {
          question: "(fg)'=?",
          options: ["fg-f'g'", "fg'-f'g", "f'g'-fg", "f'g+fg'"],
          answer: "f'g+fg'"
        }
      ]
  },
  {
    id: 'quizint3',
    startButtonId: 'startButton12',
    questionElementId: 'question12',
    optionsElementId: 'options12',
    questions: [
        {
          question: "Dacă f(x) = ln(sin(x)), atunci f'(x)=?",
          options: ["cos(x)/sin(x)", "cos(x)/sin^2(x)", "-ctg(x)", "-tg(x)"],
          answer: "cos(x)/sin(x)"
        },
        {
          question: "Dacă f(x) = 1 / (x * ln(x)), atunci ∫f(x)dx=?",
          options: ["ln(ln(x)) + C", "ln(x) + C", "ln(ln(x)) / x + C", "ln(x) / x + C"],
          answer: "ln(ln(x)) + C"
        },
        {
          question: "Dacă f(x) = √(x³ + 2x).",
          options: ["(3x² + 2)/(2sqrt(x³ + 2x))", "(3x² + 2)/√(x³ + 2x)", "(3x² + 2)/(2x*√(x³ + 2x))", "(3x² + 2)/(2sqrt(x³ + 2))"],
          answer: "(3x² + 2)/(2x*√(x³ + 2x))"
        },
        {
          question: "∫[(e^x) / √(1 + e^(2x))]dx=?",
          options: ["√(1 + e^(2x)) + C", "ln(√(1 + e^(2x))) + C", "ln(1 + e^x) + C", "√(1 + e^(2x)) + ln|e^x - √(1 + e^(2x))| + C"],
          answer: "√(1 + e^(2x)) + ln|e^x - √(1 + e^(2x))| + C"
        }
      ]
  }
];
quizes.forEach(quiz => {
  let startButton = document.getElementById(quiz.startButtonId);
  let questionElement = document.getElementById(quiz.questionElementId);
  let optionsElement = document.getElementById(quiz.optionsElementId);
  let currentQuestion = 0;
  let score = 0;
  let maxScore = localStorage.getItem(`${quiz.id}_maxScore`) || 0;
  let maxScoreElement = document.createElement("p");
  maxScoreElement.innerText = `Max Score: ${maxScore}`;
  maxScoreElement.style.marginTop = "10px";
  maxScoreElement.style.fontWeight = "bold";
  maxScoreElement.style.fontSize = "14px";
  startButton.parentElement.appendChild(maxScoreElement);
  function startQuiz() 
  {
    startButton.style.display = "none";
    maxScoreElement.style.display = "none";
    shuffleQuestions();
    showQuestion();
  }
  function shuffleQuestions()
  {
    for (let i = quiz.questions.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [quiz.questions[i], quiz.questions[j]] = [quiz.questions[j], quiz.questions[i]];
    }
  }
  function showQuestion() {
    let question = quiz.questions[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      let button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  function selectAnswer(e)
  {
    let selectedButton = e.target;
    let answer = quiz.questions[currentQuestion].answer;
    if (selectedButton.innerText === answer)
    {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quiz.questions.length)
    {
      showQuestion();
    }
    else
    {
      showResult();
    }
  }
  function showResult()
  {
    let resultHtml = `<div style="
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                      height: 100%;
                      width: 100%;
                      text-align: center;">
                      <h1>Quiz Completed!</h1>
                      <p>Your score: ${score}/${quiz.questions.length}</p>`;
    if (score === quiz.questions.length) {
      resultHtml += `<p>You got all of them correct! Congratulations!!</p>`;
    }
    resultHtml += `</div>`;
    document.getElementById(quiz.id).innerHTML = resultHtml;
    if (score === quiz.questions.length) {
      setTimeout(() => { document.getElementById(quiz.id).classList.add('rotate'); }, 2000);
    }
  }
  startButton.addEventListener("click", startQuiz);
});
window.onkeydown = function(event)
{
  var quizes = document.querySelectorAll('.quiz');
  quizes.forEach(function(quiz, index) {
    quiz.style.opacity = 1;
    quiz.style.animation = 'none'; 
  });
};