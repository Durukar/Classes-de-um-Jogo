# Classes-de-um-Jogo
Terceiro e ultimo desafio do BootCamp da DIO

# Classes de um jogo
**O que de ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja)

  além disso, deve ter um método chamado atacar que deve entender os seguintes requisitos:

  - exibir a mensagem: "o {tipo} atacou usando {ataque}")
  - aonde p {tipo} deve ser concatenando o tipo que está na propriedade da classe
  - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:
 
  se mago -> no ataque exibir (usou magia)
  se guerreiro -> no atauqe exibir (usou espada)
  se monge -> no ataque exibir (usou artes marciais)
  se ninja -> no ataque exibir (usou shuriken)

  ## Saída

  Ao final deve exibir uma mensagem:

  - "O {tipo} atacou usando {ataque}"
    ex: mago atacou usando magia
    guerreiro atacou usando espada
