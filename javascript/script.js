
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
        explicacao1.innerHTML = '-Correto! No domínio amazônico, as chuvas são de convecção, em razão da umidade produzida pela evapotranspiração que ascende à atmosfera com o ar quente, onde ocorrem a condensação e a precipitação.';
      } else {
        explicacao1.innerHTML = '-Incorreto! A resposta correta é a letra \'a\'. No domínio amazônico, as chuvas são de convecção, em razão da umidade produzida pela evapotranspiração que ascende à atmosfera com o ar quente, onde ocorrem a condensação e a precipitação..';
      }
      explicacoesDiv.appendChild(explicacao1);

      // Pergunta 2
      var resposta2Selecionada = document.querySelector('input[name="resposta2"]:checked');
      if (resposta2Selecionada && resposta2Selecionada.value === 'b') {
        respostasCorretas++;
      }
      var explicacao2 = document.createElement('div');
      explicacao2.className = 'explicacao-div';
      if (resposta2Selecionada && resposta2Selecionada.value === 'b') {
        explicacao2.innerHTML = '-Correto! As áreas onde a fertilidade natural dos solos amazônicos manifesta-se é restrita aos solos de várzea, que são periodicamente inundados e recebem uma grande quantidade de nutrientes orgânicos.';
      } else {
        explicacao2.innerHTML = '-Incorreto! A resposta correta é a letra \'b\'. As áreas onde a fertilidade natural dos solos amazônicos manifesta-se é restrita aos solos de várzea, que são periodicamente inundados e recebem uma grande quantidade de nutrientes orgânicos.';
      }
      explicacoesDiv.appendChild(explicacao2);

      // Pergunta 3
      var resposta3Selecionada = document.querySelector('input[name="resposta3"]:checked');
      if (resposta3Selecionada && resposta3Selecionada.value === 'e') {
        respostasCorretas++;
      }
      var explicacao3 = document.createElement('div');
      explicacao3.className = 'explicacao-div';
      if (resposta3Selecionada && resposta3Selecionada.value === 'e') {
        explicacao3.innerHTML = '-Correto! Uma das principais características da floresta amazônica é a existência de árvores com folhas largas e grandes (latifoliadas), de elevada densidade, que não perdem as folhas no outono (perene) e que são adaptadas à água (hidrófilas). No entanto, a fitofisionomia desse domínio morfoclimático não conta com a presença de vegetação herbácea (arbustiva), típica de outros biomas brasileiros.';
      } else {
        explicacao3.innerHTML = '-Incorreto! A resposta correta é a letra \'e\'.Uma das principais características da floresta amazônica é a existência de árvores com folhas largas e grandes (latifoliadas), de elevada densidade, que não perdem as folhas no outono (perene) e que são adaptadas à água (hidrófilas). No entanto, a fitofisionomia desse domínio morfoclimático não conta com a presença de vegetação herbácea (arbustiva), típica de outros biomas brasileiros.';
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
        explicacao4.innerHTML = '-Correto! Os três extratos da Floresta Amazônica apresentam diferentes tipos de vegetação:na mata de igapó, predominam as espécies que se desenvolvem com a presença constante de água; na mata de várzea, as espécies se adaptam às enchentes temporárias (assim como ocorre na mata de igapó, a vegetação é de menor porte);na mata de terra firme, onde não ocorrem inundações, desenvolve-se uma vegetação de maior porte e densa.';
      } else {
        explicacao4.innerHTML = '-Incorreto! A resposta correta é a letra \'d\'. Os três extratos da Floresta Amazônica apresentam diferentes tipos de vegetação:na mata de igapó, predominam as espécies que se desenvolvem com a presença constante de água; na mata de várzea, as espécies se adaptam às enchentes temporárias (assim como ocorre na mata de igapó, a vegetação é de menor porte);na mata de terra firme, onde não ocorrem inundações, desenvolve-se uma vegetação de maior porte e densa.';
      }
      explicacoesDiv.appendChild(explicacao4);


      var resultado = document.createElement('div');
      resultado.innerHTML = 'Você acertou ' + respostasCorretas + ' de 5 perguntas.';
      resultado.style.fontWeight = 'bold';
      explicacoesDiv.appendChild(resultado);
    }