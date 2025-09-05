# Builder Design Patterns

Este repositório demonstra a aplicação do **Builder Pattern** em JavaScript/TypeScript para a criação de objetos `Car` com fluência e flexibilidade, evitando construtores complexos com múltiplos parâmetros.

## 📂 Conteúdo

- `Car.ts` / `Car.js`: Classe `Car` que representa um veículo com atributos como marca, modelo, motor, cor e GPS.  
- `CarBuilder.ts` / `CarBuilder.js`: Implementação do builder com métodos do tipo `setX()` retornando o próprio builder, possibilitando *method chaining*.  
- `DreamCars.ts` / `DreamCars.js`: Vários exemplos de “dream cars” usando métodos estáticos como `buildDreamCar()`, `buildFamilySUV()`, `buildOffRoadBeast()` e `buildHyperCar()`.  
- `index.ts` / `index.js`: Arquivo principal que instancia os veículos utilizando o builder e exibe suas configurações com `showConfig()`.  

## 🚗 Exemplo de uso

```ts
const dream = DreamCars.buildDreamCar();
dream.showConfig();
```
##⚙️ Como executar
- Clone o repositório:

git clone https://github.com/LuizFilipeLinhares/Builder-Design-Patterns.git
cd Builder-Design-Patterns


- Instale dependências:

npm install

- Execute o projeto:

node index.js
