$('#start').on('click',function(){
   game.start(); 
})
$(document).on('click','#end',function(){
    game.done();
})

var questions =[{
    question:'What is the capital of Wisconsin?',
    answers:['Madison','Milwaukee', 'Green Bay', 'Racine'],
    correctAnswer:'Madison'
},
{
    question:'What is the capital of Laos? ',
    answers:['Luang Prabang', 'Vang Vieng', 'Phonsaven', 'Vientiane'],
    correctAnswer:'Vientiane'
},
{
    question:'What is the capital of Cambodia?',
    answers:['Siem Reap','Phnom Penh', 'Kamput', 'Sihanokukivlle'],
    correctAnswer:'Phnom Penh'
},
{
    question:'What is the capital of Malaysia?',
    answers:['George Town', 'Kula Lumpur','Johor Bahru', 'Malacca'],
    correctAnswer:'Kula Lumpur'
},
{
    question:'What is the capital of South Korea?',
    answers:['Busan', 'Jeju', 'Suwon', 'Seoul'],
    correctAnswer:'Seoul'
},
{
    question:'What is the capital of Indonesia?',
    answers:['Denpasar', 'Surabaya', 'Jakarta', 'Bandang'],
    correctAnswer:'Jakarta'
},
{
    question:'What is the capital of Ecuador?',
    answers:['Tena', 'Quito', 'Cuenca', 'Guayaquil'],
    correctAnswer:'Quito'
},
{
    question:'What is the capital of Japan?',
    answers:['Osaka', 'Yokahama', 'Tokyo', 'Sapporo'],
    correctAnswer:'Tokyo'
}];

var game={
    correct:0,
    incorrect:0,
    counter:120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            
            game.done();
        }
    },
    start: function(){
        timer=setInterval(game.countdown,1000);
        $('#container_in_Container').prepend('<h2>Time Remaining: <span id ="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0; i<questions.length; i++){
            $('#container_in_Container').append('<span><h2> '+ questions[i].question+'</h2></span>');
            
        for(var a=0; a<questions[i].answers.length; a++){
            $('#container_in_Container').append("<input type='radio' name='question-"+i+"' value='" +questions[i].answers[a]+"'>"+questions[i].answers[a]) 
    
            }
       
        }
        $('#container_in_Container').append('<br><button id="end">Done</button>');
    },
    done:function(){
        $.each($("input[name='question-0]:checked"),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            }else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1"]:checked'),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            }else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2"]:checked'),function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            }else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3"]:checked'),function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            }else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4"]:checked'),function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            }else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-5"]:checked'),function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            }else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6"]:checked'),function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            }else{
                game.incorrect++;
            }
        });
        $.each($('input[name="question-7"]:checked'),function(){
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            }else{
                game.incorrect++;
            }
        });
        this.result();
        },
        result: function(){
          clearInterval(timer);
          $('#container_in_Container h2') .remove(); 

          $('#container_in_Container').html('<h2>All done.</h2>');
          $('#container_in_Container').append('<h3>Correct Answer: ' + this.correct +'</h3>');
          $('#container_in_Container').append('<h3>Incorrect Answer: ' +this.incorrect+'</h3>');
          $('#container_in_Container').append('<h3>Unanswered: '+(questions.length-(this.incorrect+this.correct))+'</h3>');
        }
    }












