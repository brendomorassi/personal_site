    $( document ).ready(function() {

        RamdomFrase();
        $('#btnRandomFrase').on('click', function(){
            RamdomFrase();
        })

        var date = new Date();
        var msg = '';
        switch(date.getDay()){
            case 0: 
            msg = 'Domingo: Dia da preguiça. Aproveite !'; 
            break;
            case 1: 
            msg = 'Segunda-Feira: café fresco pra acordar e bom humor para recomeçar !';
            break;
            case 2:
            msg = 'Terça-Feira: Que hoje todos os bons momentos façam realidade. ';
            break;
            case 3:
            msg = 'Quarta-Feita: O importante não é vencer todos os dias, mas lutar sempre.';
            break;
            case 4: 
            msg = 'Quinta-Feira: Hoje tudo pode ser perfeito, só depende de você !';
            break;  
            case 5: 
            msg = 'Sexta-Feita: Encha este dia com o que você tem de melhor. '; 
            break;
            case 6: 
            msg = 'Sabado: Que só o amor e outras coisas belas façam parte desta jornada'; 
            break;
        }
        $('#msgDay').html(msg);
    });


    function RamdomFrase(){
        var frases = [
            ['A paciência é um dos elementos chave para o sucesso.', 'Bill Gates'],
            ['A persistência é o caminho do êxito.', 'Charles Chaplin'],
            ['Só existe um êxito: a capacidade de levar a vida que se quer.', 'Cristopher Morley'],
            ['O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível.', 'Max Weber'],
            ['Creia em si, mas não duvide sempre dos outros.', 'Machado de Assis'],
            ['Nenhum mentiroso tem uma memória suficientemente boa para ser um mentiroso de êxito.', 'Abraham Lincoln'],
            ['Sabemos o que somos, mas não sabemos o que poderemos ser.', 'William Shakespeare'],
            ['Deus me enviou à terra com uma missão. Só Ele pode me deter, os homens nunca poderão.', 'Bob Marley'],
            ['Pessimismo leva à fraqueza, otimismo ao poder.', 'William James'],
            ['Não espere por uma crise para descobrir o que é importante em sua vida.', 'Platão'],
            ['A vida é maravilhosa se não se tem medo dela.', 'Charles Chaplin'],
          ]
      
          var numRandom = Math.floor(Math.random() * frases.length);
          $('#FraseTxt').html('“'+ frases[numRandom][0] + '”');
          $('#FraseAuthor').html(frases[numRandom][1]);
    }
   




