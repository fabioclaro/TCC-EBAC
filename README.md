# TCC-EBAC

Projeto de conclusão de curso de Teste de Software da EBAC https://ebaconline.com.br/qualidade-de-software.

Trabalho para exercitar todo o conceito aprendiddo no curso, como por exemplo:

* Critérios de aceitação e Histórias do usuário
* Fundamentos de testes
* Planejamento de testes
* Casos de teste
* Técnicas de testes ágeis
* Testes de UI
* Automação de UI utilizando Cypress
* Testes de API e de contrato
* Testes automatizados de API
* Integração contínua com Jenkins
* Testes de performance
* SQL e NOSQL básico

E software/frameworks aprendidos

* Cypress
* Apache Jmeter
* Postman
* MongoDB
* SQL
* Docker
* Appium
* Jenkins
* Cucumber / Gherkin

O arquivo com todo exercício pode ser visualizado no arquivo .pdf na raiz dessa workspace.

## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js https://nodejs.org/en/

-Visual Studio Code https://code.visualstudio.com/download ou qualquer editor de texto 

-Git https://git-scm.com/downloads

Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/rafaelmbarros/tcc-ebac.git
```
```
cd tcc-ebac
```

#### Para instalar as dependencias:
```
npm install 
```

#### Para executar em moodo Headlesss via console:
```
npx cypress run
```

#### Para executar via Dashboard:
```
npx cypress open 
```
Após abrir o dasboard, clique na opção "Running integration tests" para rodar todos os testes.

### Bibliotecas de apoio:
-Cypress: Framework de automação: https://cypress.io/

-Jmeter: Aplicativo projetado para carregar o comportamento funcional de teste e medir o desempenho: https://jmeter.apache.org/

-Jenkins: Ferramenta de automação: https://www.jenkins.io/
