var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, correct=0, name = 0; 
//setting variables
		
//Set array to hold answers
var quizAnswers = [];

var questions = [
{
	question: "Name the method an archaeologist would use to locate a site?",//question
	correctAnswer: "Old maps",//right answer to question
	
	//list of multiple choice answers
	answer0: "Old maps",
	answer1: "TV show",
	answer2: "Old books",
	answer3: "Newspaper ads"
},
{
	question: "Name one of the instruments an archaeologist would use while excavating a site?",//question
	correctAnswer: "Chisel",//right answer to question
	
	//list of multiple choice answers
	answer0: "Saw",
	answer1: "Chisel",
	answer2: "Hammer",
	answer3: "Pliers"
},
{
question: "During the Middle Ages which was one of the stades in the training of a craftsman?",//question
	correctAnswer: "Apprentice",//right answer to question
	
	//list of multiple choice answers
	answer0: "Apprentice",
	answer1: "Junior",
	answer2: "Senior",
	answer3: "Self-taught"
},
{
question: "Name one major characteristic of Gothic architecture?",//question
	correctAnswer: "Pointed arches",//right answer to question
	
	//list of multiple choice answers
	answer0: "Pointed arches",
	answer1: "Square roof",
	answer2: "Simple designs",
	answer3: "Excessive use of columns"	
},
{
question: "What was one of the important effects of the coming of the Normans to Ireland?",//question
	correctAnswer: "Stone castles were built",//right answer to question
	
	//list of multiple choice answers
	answer0: "New shops were opened",
	answer1: "Stone castles were built",
	answer2: "They brought foxes for hunting",
	answer3: "Irish have learned new language"
},
{
question: "What was one of the metal ores in Ireland during the Bronze Age?",//question
	correctAnswer: "Copper",//right answer to question
	
	//list of multiple choice answers
	answer0: "Copper",
	answer1: "Gold",
	answer2: "Lead",
	answer3: "Silver"
},
{
question: "What was the main type of tombs in Neolithic Ireland?",//question
	correctAnswer: "Wedge Tombs",//right answer to question
	
	//list of multiple choice answers
	answer0: "Mastaba Tombs",
	answer1: "Court Tombs",
	answer2: "Wedge Tombs",
	answer3: "Portal Tombs"
},
{
question: "During which historic time period the printing press was invented?",//question
	correctAnswer: "Renaissance",//right answer to question
	
	//list of multiple choice answers
	answer0: "Viking Age",
	answer1: "Age of Discovery",
	answer2: "Medieval Period",
	answer3: "Renaissance"
},
{
question: "In a medieval monastery what was a cellarium?",//question
	correctAnswer: "Store-house of a monastery",//right answer to question
	
	//list of multiple choice answers
	answer0: "Store-house of a monastery",
	answer1: "Sleeping hall",
	answer2: "Covered walkway in a monastery",
	answer3: "Dining hall of a monastery"
},
{
question: "What was the effect of the coming of Christianity to Ireland?",//question
	correctAnswer: "Monasteries sprang up all over the country",//right answer to question
	
	//list of multiple choice answers
	answer0: "Vikings came to Ireland",
	answer1: "Monasteries sprang up all over the country",
	answer2: "The power of druids had began",
	answer3: "Divorce and remarriage was common"
},
{
question: "What was an important result of the Civil War in Ireland, 1922-1923?",//question
	correctAnswer: "Michael Collins was killed",//right answer to question
	
	//list of multiple choice answers
	answer0: "Michael Collins was killed",
	answer1: "Vikings came to Ireland",
	answer2: "Ireland founded a colony in Scotland",
	answer3: "The power of druids had ended"
},
{
question: "Why did James Connoly set up the Irish Citizen Army in 1913?",//question
	correctAnswer: "To protect Dublin workers from police brutality",//right answer to question
	
	//list of multiple choice answers
	answer0: "To organise Garda Siochana",
	answer1: "To protect Dublin workers from police brutality",
	answer2: "To protect the most popular political party",
	answer3: "To organise war between communities"	
},
{
question: "What was one of the consequences for Ireland of the Great Famine?",//question
	correctAnswer: "Many left Ireland",//right answer to question
	
	//list of multiple choice answers
	answer0: "Garda Siochana has been founded",
	answer1: "Many left Ireland",
	answer2: "Michael Collins was killed",
	answer3: "More lowland forests were cleared to make farmland"	
},
{
question: "Name the political party founded by Arthur Griffith in 1905?",//question
	correctAnswer: "Sinn Féin",//right answer to question
	
	//list of multiple choice answers
	answer0: "Sinn Féin",
	answer1: "Labour Party",
	answer2: "Green Party",
	answer3: "Fianna Fáil"
	
},
{
question: "Who was one of the leaders of the Labout Party in Ireland since 1912?",//question
	correctAnswer: "Dick Spring",//right answer to question
	
	//list of multiple choice answers
	answer0: "John Blake",
	answer1: "William Blank",
	answer2: "Dick Spring",
	answer3: "Gerry Adams"

},
{
question: "Who was one of the leaders of Sinn Féin in Ireland since 1983?",//question
	correctAnswer: "Gerry Adams",//right answer to question
	
	//list of multiple choice answers
	answer0: "Gerry Adams",
	answer1: "John Blake",
	answer2: "Arthur Griffith",
	answer3: "Paddy J. McLogan"
},
{
question: "Name one of the terms of the Anglo-Irish Agreement, 1938?",//question
	correctAnswer: "3 treaty ports were returned to Ireland",//right answer to question
	
	//list of multiple choice answers
	answer0: "Labour Party was created",
	answer1: "3 treaty ports were returned to Ireland",
	answer2: "Beginning of a campaign to restore political stability in Asia",
	answer3: "New towns were built"
},
{
question: "By which revolution people in Ireland got inspired to organise similar revolutionin in order to establish the Irish Republic?",//question
	correctAnswer: "The French Revolution",//right answer to question
	
	//list of multiple choice answers
	answer0: "The Haitian Revolution",
	answer1: "Cuban Revolution",
	answer2: "The French Revolution",
	answer3: "The October Revolution"
},
{
question: "What action Cumann na nGaeldheal had taken to establish law and order in the new Irish State(1923-1932)?",//question
	correctAnswer: "Organised Garda Siochana",//right answer to question
	
	//list of multiple choice answers
	answer0: "Organised The Haitian Revolution",
	answer1: "Organised Garda Siochana",
	answer2: "Left Ireland",
	answer3: "Prosecuted individuals who commit violence against police"
},	
{
question: "Name a person who has been Prime Minister of Northern Ireland since 1945?",//question
	correctAnswer: "Basil Brooke",//right answer to question
	
	//list of multiple choice answers
	answer0: "John Roman",
	answer1: "Donald Trump",
	answer2: "Basil Brooke",
	answer3: "Brendan Corish"
}
];
function _(x)
{
	return document.getElementById(x);
}

function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;//gets percentage and returns to form
}

function myFunction() {
    window.print();
}

function renderQuestion()
{
	test = _("test");
	if(pos >= questions.length)//If position is greater or equal to the number of questions
	{
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct("+percent() + "%)</h2><button onclick='myFunction()'>Print this page</button>";//Print #correct out of 20
		_("test_status").innerHTML += " Thank you for completing the quiz";//Print "thank you..."
		pos = 0;
		correct = 0;
		return false;
	}
    

var bar=document.getElementById("progressBar");//Progress bar value 
_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;

bar.value = (pos+1)// Progress bar increments as we go through questions, starts at 1
/*
question = questions[pos][0];
choiceA = questions[pos][1];
choiceB = questions[pos][2];
choiceC = questions[pos][3];
*/

question = questions[pos].question;//question is in position 0 in the array(zero indexed)

//push all potential answers to the quizAnswers array
quizAnswers[0] = questions[pos].answer0;
quizAnswers[1] = questions[pos].answer1;
quizAnswers[2] = questions[pos].answer2;
quizAnswers[3] = questions[pos].answer3;

console.log("Unshuffled answers" + quizAnswers);

//Shuffle the answers
var shuffleAnswers = shuffleArray(quizAnswers);

console.log("Shuffled answers" + shuffleAnswers);


choiceA = shuffleAnswers[0]; //choice A is in position 1 in the array
choiceB = shuffleAnswers[1]; //choice B is in position 2 in the array
choiceC = shuffleAnswers[2]; //choice C is in position 3 in the array
choiceD = shuffleAnswers[3]; //choice D is in position 4 in the array


test.innerHTML = "<h3>"+question+"</h3>";
test.innerHTML += "<input type='radio' name='choices' value='"+choiceA+"' checked> "+choiceA+"<br>"; //Radio button
test.innerHTML += "<input type='radio' name='choices' value='"+choiceB+"'> "+choiceB+"<br>"; //Radio button
test.innerHTML += "<input type='radio' name='choices' value='"+choiceC+"'> "+choiceC+"<br>"; //Radio button
test.innerHTML += "<input type='radio' name='choices' value='"+choiceD+"'> "+choiceD+"<br><br>"; //Radio button
test.innerHTML += "<button onclick='checkAnswer()' >Submit Answer </button>";
}

//Setting underscore equal to document.getElementById (handy shortcut)
// function which takes an array and shuffles its contents
//used to get different order to multiple choice answers

function shuffleArray(array)
{
	for (var i = array.length - 1; i>0; i--)
	{
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}return array;
}

	


//Insert Javascript functions renderQuestion() & checkAnswer() here

function checkAnswer()
{
	choices = document.getElementsByName("choices"); // Creates an array
	for(var i=0; i<choices.length; i++)//variable i=0, when i is less than the length of the choices, increment it by one
	{
		if(choices[i].checked) //if a choice is checked
		{
		choice = choices[i].value; //take the value of that choice and put it into choice
		}
	}
	if(choice == questions[pos].correctAnswer) //if the value of choice is equal to position 4
	{
		alert('Correct!'); //After correct
		correct++; //increment your correct answers by one
	}
	else//or else
	{
		alert('Sorry wrong answer. The correct answer is ' + questions[pos].correctAnswer);
	}
	pos++; //Increment positionby oneb go on to the next question

	renderQuestion(); //go to render question again
}

//Call the question with an event handler
window.addEventListener("load", renderQuestion, false);