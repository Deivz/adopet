<p align="center">
<img src="https://user-images.githubusercontent.com/78604613/180907738-a36a7739-e0aa-4522-9650-38db7d349950.svg" alt="Logo da Adopet" />
</p>

# Alura Front End Challenge #4 - Adopet

Repositório criado para o desafio de front end da Alura edição de número 4. O projeto consiste na elaboração de um site para adoção de pets, onde o usuário pode se cadastrar, realizar o login, mandar mensagens para o responsável pelo pet pelo qual tenha se interessado e também editar seu cadastro.


## No que consiste o desafio

O desafio se dá da seguinte forma: é passado alguns cards no Trello com as atividades bem como o layout no Figma. Cada card consiste em uma atividade que deve ser realizada a fim de que todo o backlog possa ser cumprido e o desenvolvedor consiga também se organizar. O layout da página pode ser visto no link abaixo:

https://www.figma.com/file/TlfkDoIu8uyjZNla1T8TpH/Challenge---Adopet

É aconselhado seguir o modelo indicado ao invés de desenvolver um próprio para fins de correção/comparação, entretanto a forma de implementar e a adição de recursos e/ou melhorias fica a critério do desenvolvedor.

Abaixo estão os links com os cards das atividades:

https://trello.com/b/Ie7GgNOS/challenge-front-end-adopet-semana-1-mobile-first

https://trello.com/b/qjZU9naU/challenge-front-end-adopet-semana-2-responsividade

https://trello.com/b/x2IyGYsy/challenge-front-end-adopet-semana-3-e-4-javascript

## Expectativas com o projeto

O projeto deve ser entregue conforme solicitado via Figma e Trello, como já mencionado. Espera-se que com o desafio o desenvolvedor possa por em prática seus conhecimentos seguindo um escopo de atividades que se assemelha as demandas de trabalho em uma empresa. Minha expectativa pessoal era a criação de uma SPA, utilizando React.JS, que seja o mais próximo possível do solicitado. Algumas modificações foram implementadas por mim e serão explicadas mais adiante e o motivo de terem sido feitas.


## Tecnologias e ferramentas utilizadas
### `React.js`
Como já mencionado, o projeto foi todo desenvolvido em React.js. O foco dessa escolha é o aperfeiçoamento do conhecimento teórico e prático nesta biblioteca que é uma das mais utilizadas no mundo, além é claro de tornar o desenvolvimento dinâmico e atingir o objetivo de forma mais rápida e eficaz.

### `CSS puro`
Para fins de prática optei por fazer o estilo da página todo em CSS puro, sem a utilização de nenhum framework ou pré-processador.

### `Yup e react-hook-form`
Para a validação dos dados informados no front end optei por utilizar o yup com o resolver do react-hook-form. Além de serem muito práticos e de fácil utilização, são ferramentas que já domino, o que me traz segurança e eficiência no desenvolvimento da SPA. Esta validação é implementada no formulário de login, no formulário de cadastro e no formulário de alteração de usuário.

### `React-router-dom`
Para a implementação das rotas foi utilizado o react-router-dom, pois é uma ferramenta bastante popular além de fácil implementação.

### `React-icons`
Para a inclusão do ícone do olho que indica a ação de mostrar a senha foi utilizado o react-icons.

### `Axios`
A integração com a API foi utilizada a lib axios. Ferramenta de fácil utilização e amplamente utilizada na comunidade, a escolha se deu por estes motivos. A explicação da API será feita logo adiante.


## API do projeto
Como o foco deste desafio era somente o front end, utilizei o `json.server` pra mockar o back end e fiz o deploy no `Heroku` utilizando o repositório abaixo:

https://github.com/jesperorb/json-server-heroku

A API consiste na realização de um CRUD para os usuários e para realização de um `GET` para extrair as informações que compõem o card dos pets para adoção.


## Modificações realizadas
### Sistema de autenticação
Não fora solicitado a implementação de um sistema de autenticação para acesso à página de usuários, somente uma página de login funcional. Optei por implementar o acesso à pagina de usuário somente quando o mesmo estivesse logado. Ao se logar todas as informações são trazidas do banco de dados e de forma personalizada, cada usuário acessa só e somente só a sua própria página de login:

<p align="center">
<img src="https://user-images.githubusercontent.com/78604613/180913985-40726cea-24f9-41f5-86e5-e203c7d86e56.png" alt="Página de usuário da Adopet" />
</p>

O usuário passa a ter então acesso aos demais conteúdos, exceto à página de informações de usuário. Caso ele não esteja logado, será redirecionado para página de login.

### Sistema de validação personalizado
Fora implementado um sistema personalizado a fim de simular o mais próximo de um cenário real, onde a senha, por exemplo, precisa ser uma senha forte. Onde o telefone somente pode conter DDDs existentes no brasil. Nomes não podem conter caracteres não convencionais para nomes (como por exemplo números e operadores matemáticos).

### Alteração na imagem com envio para o banco de dados
A alteração da imagem foi imposta, entretanto o envio para o BD e a forma como foi feita foi personalizada por mim. Ao se adicionar a foto ela mostra um preview antes de armazenar a fim de que o usuário possa verificar se está de acordo com sua expectativa. Ao salvar ela é enviada para o banco como blob. Ao realizar o login ela é trazida do BD podendo ser alterada novamente conforme o usuário desejar.

### Botão de logout
Implementei um botão de logout, uma vez que o usuário é persistido ao realizar o login (através do localstorage). Sendo assim, o usuário pode simplesmente se deslogar ao clicar no botão, permitindo que outro usuário possa se conectar.

<p align="center">
<img src="https://user-images.githubusercontent.com/78604613/180915204-b1f0c0d0-d167-4c68-9ed1-a33af443d831.png" alt="Página de usuário da Adopet" />
</p>


## Desafios, dificuldades e superação
Para a realização deste projeto foi necessário muita pesquisa e estudo, uma vez que não era de meu conhecimento a realização de certas atividades. As principais que posso citar foram a realização do upload da imagem, o sistema de autenticação e a integração completa com uma API.

### `Upload de imagem`
Para o upload ser realizado através de um clique na foto foi necessário a utilização da ref, ferramenta que até então desconhecia. Para essa implementação tive que utilizar class component ao invés de function component. Como nunca tinha utilizado o React desta forma, pra mim foi bastante difícil e ao mesmo tempo desafiador. Conseguir realizar esta implementação me fez aprender bastante, tive que recorrer à documentação e a vídeos para entender seu funcionamento de forma satisfatória. Fora a própria implementação do FileReader para a realização do upload em si.

### `Autenticação`
Para a autenticação tive que usar o useContext. Não estava habituado a trabalhar utilizando contextos, um novo horizonte se abriu. Entender e aplicar contextos no react realmente demandou algumas longas horas de estudo. Foi bastante recompensador ter que lidar com essa dificuldade.

### `Integração completa com API`
Já estava habituado a lidar com integração com APIs de forma básica, mas nunca através de uma SPA. Fazer páginas dinâmicas integrando com APIs foi uma novidade, bastante desafiadora e também muito interessante. O maior desafio se deu em entender como os componentes de renderizam e quais hooks precisam ser utilizados para fazer esta integração acontecer da forma mais performática possível.


## Conclusão
Este projeto, possivelmente, foi o que mais agregou à minha curta (até então) carreira de desenvolvedor. Pude desenvolver um projeto do zero 100% sozinho, tendo que me desdobrar, estudar, aplicar, errar, entender os erros, consertá-los e por fim conseguir entregar o que foi solicitado, sempre visando utilizar de boas práticas e das ferramentas mais atuais possíveis.
A forma como o projeto é idealizado, simulando um trabalho em uma empresa real, me permitiu conhecer uma nova perspectiva e validar todo o conhecimento e potencial que eu tenho. Acredito que com ele estou muito mais preparado do que antes, muito mais maduro e muito mais experiente (óbvio que ainda é uma gota no oceano, no qual pretendo mergulhar ainda mais).

Por fim, o projeto pode ser visualizado no GH Pages: https://deivz.github.io/adopet/
