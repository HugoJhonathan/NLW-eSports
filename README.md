<br>
   <p align="center">
   <img src="https://i.imgur.com/SBYJi0t.png"/>
</p>

Evento **"NLW eSports"**, realizado entre os dias 11 e 18 de setembro de 2022, pela plataforma da <a href="https://www.rocketseat.com.br/">Rocketseat</a>, pelos instrutores <a href="https://github.com/diego3g">Diego Fernandes</a> e <a href="https://github.com/rodrigorgtic">Rodrigo Gonçalves</a>. Teve como propósito a construção de uma aplicação multiplataforma (Web/Mobile) com o tema de Games, onde podemos criar anúncios para encontrar amigos que jogam algo em comum.


 ### **Tecnologias utilizadas:**
 
 * **Backend**
   
    * Framework: <a href="https://expressjs.com/pt-br">Express</a>
    * ORM: <a href="https://www.prisma.io">Prisma</a>
    * Database: <a href="">SQLite</a>
    
    <br>

 * **Frontend (Web)**
    * Framework: <a href="https://pt-br.reactjs.org/">React + Vite</a>
    * Dependencies: 
    <a href="https://axios-http.com/">Axios</a>, 
    <a href="https://www.radix-ui.com/">Radix UI</a>,
    <a href="https://tailwindcss.com/">Tailwind CSS</a>,
    <a href="https://keen-slider.io/">Keen-Slider</a>,
    <a href="https://phosphoricons.com/">Phosphor Icons</a>,
    <a href="https://sweetalert2.github.io/recipe-gallery/sweetalert2-react.html">SweetAlert2 </a>,
    <a href="https://www.npmjs.com/package/react-copy-to-clipboard">react-copy-to-clipboard </a>
   
   <br>

* **App**
    * Framework: <a href="https://reactnative.dev/">React Native + Expo</a>
    * Dependencies: 
    <a href="https://expo.dev/">Expo</a>, 
    <a href="https://www.npmjs.com/package/phosphor-react-native">phosphor-react-native</a>
    
   <br>

### **Preview (API)**

| Method | URL | Result |
|--------|------|-------|
| **[GET](https://github.com/HugoJhonathan/NLW-eSports/blob/master/server/src/server.ts#L15)**   | `http://localhost:3333/games`           | Retorna todos os Games. |
| **[GET](https://github.com/HugoJhonathan/NLW-eSports/blob/master/server/src/server.ts#L28)**   | `http://localhost:3333/games/:id`       | Retorna um Game específico. |
| **[GET](https://github.com/HugoJhonathan/NLW-eSports/blob/master/server/src/server.ts#L67)**   | `http://localhost:3333/games/:id/ads`   | Retorna todos anúncios de um Game específico. |
| **[GET](https://github.com/HugoJhonathan/NLW-eSports/blob/master/server/src/server.ts#L100)**  | `http://localhost:3333/ads/:id/discord` | Retorna o usuário do Discord cadastrado em um anúncio. |
| **[POST](https://github.com/HugoJhonathan/NLW-eSports/blob/master/server/src/server.ts#L45)**  | `http://localhost:3333/games/:id/ads`   | Cria um anúncio para um Game específico. |

<br>

### **Preview (Web)**

![](https://i.imgur.com/tZdUz6J.png)
![](https://i.imgur.com/jPXqfgJ.png)
![](https://i.imgur.com/oT71cWh.png)

### **Preview (App)**

<div align="center">
<img width="32%" src="https://i.imgur.com/aUDkpBC.png">
<img width="32%" src="https://i.imgur.com/Him4MVj.png">
<img width="32%" src="https://i.imgur.com/t7tffZt.png">
</div>

<br><br><br>

[<img align="left" width="130" margin="10" src="https://i.imgur.com/lSu5YEj.png">](https://devsuperior.com.br/) Projeto da trilha Ignite, desenvolvido durante a semana NLW  eSports (Rocketseat), entre os dias 11 e 18 de setembro de 2022.