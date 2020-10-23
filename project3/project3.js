const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerBtn = document.getElementById('answer-buttons')

let questionShuffle, currentQuestion

startBtn.addEventListener('click', startQuiz)
nextBtn.addEventListener('click', () => {
  currentQuestion++
  newQuestion()
})

function startQuiz() {
  startBtn.classList.add('hide')
  questionShuffle = questions.sort(() => Math.random() - .5)
  currentQuestion = 0
  questionContainer.classList.remove('hide')
  newQuestion()
}

function newQuestion() {
  resetState()
  showQuestion(questionShuffle[currentQuestion])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerBtn.appendChild(button)
  })
}

function resetState() {
  statusClear(document.body)
  nextBtn.classList.add('hide')
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild)
  }
}

function selectAnswer(x) {
  const selectedButton = x.target
  const correct = selectedButton.dataset.correct
  statusSet(document.body, correct)
  Array.from(answerBtn.children).forEach(button => {
    statusSet(button, button.dataset.correct)
  })
  if (questionShuffle.length > currentQuestion + 1) {
    nextBtn.classList.remove('hide')
  } else {
    startBtn.innerText = 'Restart'
    startBtn.classList.remove('hide')
  }
}

function statusSet(element, correct) {
  statusClear(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function statusClear(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  //HTML, CSS, AND JS QUESTIONS
  //8 HTML QUESTIONS
  {
    question: 'HTML stands for:',
    answers: [
      {text: 'Hyper Text Markup Language', correct: true},
      {text: 'High Text Markup Language', correct: false},
      {text: 'Hyper Tubular Markup Language', correct: false}
    ]
  },
  {
    question: 'Which tag marks the start of a paragraph?',
    answers: [
      {text: '<td>', correct: false},
      {text: '<br>', correct: false},
      {text: '<p>', correct: true},
      {text: '<tr>', correct: false}
    ]
  },
  {
    question: 'Which tag is used for the largest heading?',
    answers: [
      {text: '<h2>', correct: false},
      {text: '<h1>', correct: true},
      {text: '<heading>', correct: false},
      {text: '<head>', correct: false}
    ]
  },
  {
    question: 'Which tag starts a web page?',
    answers: [
      {text: '<HTML>', correct: true},
      {text: '<Body>', correct: false},
      {text: '<Title>', correct: false}
    ]
  },
  {
    question: 'HTML stands for Hyper Text Markup Language',
    answers: [
      {text: 'True', correct: true},
      {text: 'False', correct: false}
    ]
  },
  {
    question: 'The body tag is used after which tag?',
    answers: [
      {text: '<title>', correct: false},
      {text: '<head>', correct: false},
      {text: '<body>', correct: false},
      {text: '<HTML>', correct: true}
    ]
  },
  {
    question: 'What is HTML a subset of?',
    answers: [
      {text: 'SGMT', correct: false},
      {text: 'SGML', correct: true},
      {text: 'SGMD', correct: false},
      {text: 'MGMT', correct: false}
    ]
  },
  {
    question: 'How do we enclose HTML tags?',
    answers: [
      {text: '##', correct: false},
      {text: '<>', correct: true},
      {text: '{}', correct: false},
      {text: '[]', correct: false}
    ]
  },
  //7 CSS QUESTIONS
  {
    question: 'Which of these selectors matches a element based on its class attribute?',
    answers: [
      {text: 'Type', correct: false},
      {text: 'Universal', correct: false},
      {text: 'Descendant', correct: false},
      {text: 'Class', correct: true}
    ]
  },
  {
    question: 'Which of these is a way to associate styles with your HTML file?',
    answers: [
      {text: 'External CSS', correct: false},
      {text: 'Imported CSS', correct: false},
      {text: 'Both of these', correct: true},
      {text: 'None of these', correct: false}
    ]
  },
  {
    question: 'How do we define 1% of viewport height?',
    answers: [
      {text: 'vh', correct: true},
      {text: 'px', correct: false},
      {text: 'vmin', correct: false},
      {text: '7zip', correct: false}
    ]
  },
  {
    question: 'How do we set the width of an image border?',
    answers: [
      {text: 'border', correct: true},
      {text: 'width', correct: false},
      {text: 'height', correct: false},
      {text: 'length', correct: false}
    ]
  },
  {
    question: 'CSS stands for Contact Style Sheets',
    answers: [
      {text: 'True', correct: false},
      {text: 'False', correct: true}
    ]
  },
  {
    question: 'Padding-left sets the left padding of an element',
    answers: [
      {text: 'True', correct: true},
      {text: 'False', correct: false}
    ]
  },
  {
    question: 'How do we specify front properties?',
    answers: [
      {text: 'font-weight', correct: false},
      {text: 'font-variant', correct: false},
      {text: 'font', correct: true},
      {text: 'font-size', correct: false}
    ]
  },
  //5 JS QUESTIONS
  {
    question: 'Javascript is directly linked to Java',
    answers: [
      {text: 'True', correct: false},
      {text: 'False', correct: true}
    ]
  },
  {
    question: 'Javascript is case sensitive',
    answers: [
      {text: 'True', correct: true},
      {text: 'False', correct: false}
    ]
  },
  {
    question: 'Which variable type is only seen in the function it is defined under?',
    answers: [
      {text: 'Global', correct: false},
      {text: 'Local', correct: true},
      {text: 'Express', correct: false},
      {text: 'Transfer', correct: false}
    ]
  },
  {
    question: 'Which function reverse the order of elements in an array?',
    answers: [
      {text: 'reduce()', correct: false},
      {text: 'reuse()', correct: false},
      {text: 'recycle()', correct: false},
      {text: 'reverse()', correct: true}
    ]
  },
  {
    question: 'Which function finds a match between an expression and a specific string?',
    answers: [
      {text: 'match()', correct: false},
      {text: 'search()', correct: true},
      {text: 'replace()', correct: false},
      {text: 'concat()', correct: false}
    ]
  },
  //JAVA, PYTHON, AND CSS QUESTIONS
  //8 JAVA QUESTIONS
  {
    question: 'Java is a class-based, object-oriented programming language?',
    answers: [
      {text: 'True', correct: true},
      {text: 'False', correct: false}
    ]
  },
  {
    question: 'Oracle is the developer of the Java language',
    answers: [
      {text: 'True', correct: true},
      {text: 'False', correct: false}
    ]
  },
  {
    question: 'Which is not a Java feature?',
    answers: [
      {text: 'Dynamic', correct: false},
      {text: 'Neutral architecture', correct: false},
      {text: 'Pointers', correct: true},
      {text: 'Object-oriented', correct: false}
    ]
  },
  {
    question: 'What is used to fix bugs in a Java program?',
    answers: [
      {text: 'JDB', correct: true},
      {text: 'JRE', correct: false},
      {text: 'JDK', correct: false},
      {text: 'JTG', correct: false}
    ]
  },
  {
    question: 'ABH8097 is a valid long literal',
    answers: [
      {text: 'True', correct: false},
      {text: 'False', correct: true}
    ]
  },
  {
    question: 'What does the expression "float a = 35 / 0" return?',
    answers: [
      {text: '0', correct: false},
      {text: 'infinity', correct: true},
      {text: 'runrime error', correct: false},
      {text: 'compile', correct: false}
    ]
  },
  {
    question: 'If x=3, y=5, and z=10, what does "++z + y - y + z + x++" return?',
    answers: [
      {text: '23', correct: false},
      {text: '24', correct: false},
      {text: '25', correct: true},
      {text: '26', correct: false}
    ]
  },
  {
    question: 'Which package contains the Random class?',
    answers: [
      {text: 'java.util', correct: true},
      {text: 'java.lang', correct: false},
      {text: 'java.jj', correct: false},
      {text: 'java.io', correct: false}
    ]
  },
  //8 PYTHON QUESTIONS
  {
    question: 'What is the output for "print type(type(int))"',
    answers: [
      {text: 'type int', correct: false},
      {text: 'type type', correct: true},
      {text: '0', correct: false},
      {text: 'error', correct: false}
    ]
  },
  {
    question: 'What is called when a function is defined inside a class?',
    answers: [
      {text: 'Function', correct: false},
      {text: 'Module', correct: false},
      {text: 'Class', correct: false},
      {text: 'Method', correct: true}
    ]
  },
  {
    question: 'Which of the following is the use of id() function in python?',
    answers: [
      {text: 'Id returns an objects identity', correct: true},
      {text: 'Objects have no unique id', correct: false}
    ]
  },
  {
    question: 'Suppose list1 is list1 is [3, 4, 5, 20, 5, 25, 1, 3]. If you do list1.pop(1), you get list1 is [4, 5, 20, 5, 25, 1, 3].',
    answers: [
      {text: 'True', correct: false},
      {text: 'False', correct: true}
    ]
  },
  {
    question: 'print 9//2 returns:',
    answers: [
      {text: '4.5', correct: false},
      {text: '4.0', correct: false},
      {text: '4', correct: true},
      {text: '9//2', correct: false}
    ]
  },
  {
    question: 'Which function overloads the >> operator?',
    answers: [
      {text: 'more()', correct: false},
      {text: 'gt()', correct: false},
      {text: 'ge()', correct: false},
      {text: 'None of these', correct: true}
    ]
  },
  {
    question: 'The "|" operator overloads the or() function',
    answers: [
      {text: 'True', correct: true},
      {text: 'False', correct: false}
    ]
  },
  {
    question: 'Which of the following function convert a string to a float in python?',
    answers: [
      {text: 'int(x)', correct: false},
      {text: 'long(x)', correct: false},
      {text: 'float(x)', correct: true},
      {text: 'string(x)', correct: false}
    ]
  },
  //4 C++ QUESTIONS
  {
    question: 'C++ does not supports which inheritence?',
    answers: [
      {text: 'Multilevel', correct: false},
      {text: 'Hierarchical', correct: false},
      {text: 'Hybrid', correct: false},
      {text: 'All of these are supported', correct: true}
    ]
  },
  {
    question: 'Which of these is an address operator?',
    answers: [
      {text: '$', correct: false},
      {text: '&', correct: true},
      {text: '#', correct: false},
      {text: '@', correct: false}
    ]
  },
  {
    question: 'Which function is used to read a single character from the console in C++?',
    answers: [
      {text: 'cin.get(ch)', correct: true},
      {text: 'scanf(ch)', correct: false},
      {text: 'read(ch)', correct: false},
      {text: 'get(ch)', correct: false}
    ]
  },
  {
    question: 'Which escape sequence represents tab?',
    answers: [
      {text: '"/a"', correct: false},
      {text: '"\r"', correct: false},
      {text: '""\t"', correct: true},
      {text: '""/t"', correct: false}
    ]
  }
]
