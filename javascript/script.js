
 function mostrarResposta(pergunta, alternativaCorreta) {
      var explicacaoDiv = document.getElementById('explicacao' + pergunta);
      var alternativas = document.getElementsByName(pergunta);

      for (var i = 0; i < alternativas.length; i++) {
        if (alternativas[i].value === alternativaCorreta) {
          alternativas[i].parentNode.classList.add('alternativa-correta');
        }
        alternativas[i].disabled = true;
      }

      explicacaoDiv.style.display = 'block';
      explicacaoDiv.innerHTML = 'Alternativa correta: <span class="alternativa-correta">' + alternativaCorreta.toUpperCase() + '</span>.';
    }

    function verificarRespostas() {
      var respostasCorretas = 0;
      var explicacoesDiv = document.getElementById('explicacoes');
      explicacoesDiv.innerHTML = '';

      // Pergunta 1
      var resposta1Selecionada = document.querySelector('input[name="resposta1"]:checked');
      if (resposta1Selecionada && resposta1Selecionada.value === 'a') {
        respostasCorretas++;
      }
      var explicacao1 = document.createElement('div');
      explicacao1.className = 'explicacao-div';
      if (resposta1Selecionada && resposta1Selecionada.value === 'a') {
        explicacao1.innerHTML = 'Correto! No domínio amazônico, as chuvas são de convecção, em razão da umidade produzida pela evapotranspiração que ascende à atmosfera com o ar quente, onde ocorrem a condensação e a precipitação.';
      } else {
        explicacao1.innerHTML = 'Incorreto! A resposta correta é a letra \'a\'. No domínio amazônico, as chuvas são de convecção, em razão da umidade produzida pela evapotranspiração que ascende à atmosfera com o ar quente, onde ocorrem a condensação e a precipitação..';
      }
      explicacoesDiv.appendChild(explicacao1);

      // Pergunta 2
      var resposta2Selecionada = document.querySelector('input[name="resposta2"]:checked');
      if (resposta2Selecionada && resposta2Selecionada.value === 'a') {
        respostasCorretas++;
      }
      var explicacao2 = document.createElement('div');
      explicacao2.className = 'explicacao-div';
      if (resposta2Selecionada && resposta2Selecionada.value === 'b') {
        explicacao2.innerHTML = 'Correto! Júpiter é o maior planeta do Sistema Solar.';
      } else {
        explicacao2.innerHTML = 'Incorreto! A resposta correta é a letra \'b\'. Júpiter é o maior planeta do Sistema Solar.';
      }
      explicacoesDiv.appendChild(explicacao2);

      // Pergunta 3
      var resposta3Selecionada = document.querySelector('input[name="resposta3"]:checked');
      if (resposta3Selecionada && resposta3Selecionada.value === 'b') {
        respostasCorretas++;
      }
      var explicacao3 = document.createElement('div');
      explicacao3.className = 'explicacao-div';
      if (resposta3Selecionada && resposta3Selecionada.value === 'd') {
        explicacao3.innerHTML = 'Correto! Uma das principais características da floresta amazônica é a existência de árvores com folhas largas e grandes (latifoliadas), de elevada densidade, que não perdem as folhas no outono (perene) e que são adaptadas à água (hidrófilas). No entanto, a fitofisionomia desse domínio morfoclimático não conta com a presença de vegetação herbácea (arbustiva), típica de outros biomas brasileiros.';
      } else {
        explicacao3.innerHTML = 'Incorreto! A resposta correta é a letra \'d\'. Uma das principais características da floresta amazônica é a existência de árvores com folhas largas e grandes (latifoliadas), de elevada densidade, que não perdem as folhas no outono (perene) e que são adaptadas à água (hidrófilas). No entanto, a fitofisionomia desse domínio morfoclimático não conta com a presença de vegetação herbácea (arbustiva), típica de outros biomas brasileiros.';
      }
      explicacoesDiv.appendChild(explicacao3);

      // Pergunta 4
      var resposta4Selecionada = document.querySelector('input[name="resposta4"]:checked');
      if (resposta4Selecionada && resposta4Selecionada.value === 'd') {
        respostasCorretas++;
      }
      var explicacao4 = document.createElement('div');
      explicacao4.className = 'explicacao-div';
      if (resposta4Selecionada && resposta4Selecionada.value === 'd') {
        explicacao4.innerHTML = 'Correto! O oceano Pacífico é o maior oceano do mundo.';
      } else {
        explicacao4.innerHTML = 'Incorreto! A resposta correta é a letra \'d\'. O oceano Pacífico é o maior oceano do mundo.';
      }
      explicacoesDiv.appendChild(explicacao4);

      // Pergunta 5
      var resposta5Selecionada = document.querySelector('input[name="resposta5"]:checked');
      if (resposta5Selecionada && resposta5Selecionada.value === 'c') {
        respostasCorretas++;
      }
      var explicacao5 = document.createElement('div');
      explicacao5.className = 'explicacao-div';
      if (resposta5Selecionada && resposta5Selecionada.value === 'c') {
        explicacao5.innerHTML = 'Correto! A capital da França é Paris.';
      } else {
        explicacao5.innerHTML = 'Incorreto! A resposta correta é a letra \'c\'. A capital da França é Paris.';
      }
      explicacoesDiv.appendChild(explicacao5);

      var resultado = document.createElement('div');
      resultado.innerHTML = 'Você acertou ' + respostasCorretas + ' de 5 perguntas.';
      resultado.style.fontWeight = 'bold';
      explicacoesDiv.appendChild(resultado);
    }