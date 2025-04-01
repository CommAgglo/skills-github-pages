function checkAnswer() {
    var userAnswer = document.getElementById('answer').value.toLowerCase();
    if (userAnswer === '48 05 50 nord, 5 08 03 est') {
        document.getElementById('feedback').style.display = 'block';
    } else {
        alert('Mauvaise réponse, essayez encore !');
    }
}

function checkAnswer2() {
    var userAnswer2 = document.getElementById('answer2').value.toLowerCase();
    if (userAnswer2 === '3257') {
        document.getElementById('feedback2').style.display = 'block';
    } else {
        alert('Mauvaise réponse, essayez encore !');
    }
}


function checkAnswer3() {
    var userAnswer3 = document.getElementById('answer3').value.trim().toLowerCase();
    // On normalise les espaces
    var formattedAnswer = userAnswer3.replace(/\s*,\s*/g, ", "); // Enlève les espaces en trop autour des virgules

    var correctAnswer = "kendji, ibrahim maalouf, michel jonasz, keenv, louis bertignac, harlem globetrotters, melody gardot";

    if (formattedAnswer === correctAnswer) {
        document.getElementById('feedback3').style.display = 'block';
    } else {
        alert('Mauvaise réponse, essayez encore !');
    }
}


function checkAnswer5() {
    var userAnswer5 = document.getElementById('answer5').value.toLowerCase();
    if (userAnswer5 === 'le feu') {
        document.getElementById('feedback5').style.display = 'block';
    } else {
        alert('Mauvaise réponse, essayez encore !');
    }
}


function checkAnswer6() {
    var userAnswer6 = document.getElementById('answer6').value.toLowerCase();
    if (userAnswer6 === 'son') {
        document.getElementById('feedback6').style.display = 'block';
    } else {
        alert('Mauvaise réponse, essayez encore !');
    }
}


function checkAnswer7() {
    var userAnswer7 = document.getElementById('answer7').value.toLowerCase();
    if (userAnswer7 === '1963') {
        document.getElementById('feedback7').style.display = 'block';
    } else {
        alert('Mauvaise réponse, essayez encore !');
    }
}


function checkAnswer8() {
    var userAnswer8 = document.getElementById('answer8').value.toLowerCase();
    if (userAnswer8 === 'salle de convivialité') {
        document.getElementById('feedback8').style.display = 'block';
    } else {
        alert('Mauvaise réponse, essayez encore !');
    }
}

function checkAnswer9() {
    var userAnswer9 = document.getElementById('answer9').value.toLowerCase();
    if (userAnswer9 === '12 mars 2019') {
        document.getElementById('feedback9').style.display = 'block';
    } else {
        alert('Mauvaise réponse, essayez encore !');
    }
}