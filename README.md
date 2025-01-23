# TypeScript

## Exemplos básicos

Como salvar variáveis

```ts
// Salvando String
const name = "Ygor";

// Salvando Number
const age = 25;

// Salvando Booleans
const knowPhp = true;
```

## Any/Null

### Any

O tipo `any` permite que você atribua qualquer valor a uma variável, sem restrições de tipo. É útil quando você não tem certeza do tipo de dado que estará lidando.

```ts
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
```

### Null

O tipo `null` representa a ausência intencional de qualquer valor. Em TypeScript, você pode usar `null` para indicar que uma variável não tem valor.

```ts
let emptyValue: string | null = null;
emptyValue = "Now it has a value";
```

## Diferença entre Interface e Type

Você pode até sobrescrever `Interface`, mas não podemos sobrescrever `Type`. O `Type` também permite utilizar tipos primitivos para criar tipos customizados.

## Interface

```ts
interface UserInterface {
  name: string;
  age: number;
}

const user: UserInterface = { name: "Ygor", age: 25 };
```

## Utilitários de Tipos

### Partial

O tipo `Partial` permite que você defina um tipo com todas as propriedades de outro tipo como opcionais.

```ts
interface IUser {
  name: string;
  age: number;
}

const user: Partial<IUser> = {};
```

Dessa forma, você pode criar um objeto com base em `IUser` sem a necessidade de preencher todas as propriedades.

### Pick

O tipo `Pick` permite que você escolha propriedades específicas de um tipo para criar um novo tipo.

```ts
interface IUser {
  name: string;
  age: number;
  email: string;
}

const user: Pick<IUser, "name" | "email"> = {
  name: "Ygor",
  email: "ygor@combi.com",
};
```

Sem a necessidade de preencher todas as propriedades.

### Omit

O tipo `Omit` permite que você remova propriedades específicas de um tipo para criar um novo tipo.

```ts
interface IUser {
  name: string;
  age: number;
  email: string;
}

const user: Omit<IUser, "age"> = {
  name: "Ygor",
  email: "ygor@combi",
};
```

### Record

O tipo `Record` permite que você crie um tipo com base em um tipo existente e use uma chave para definir o tipo de valor.

```ts
// Objeto onde todas as chaves são string e os valores são números
const scores: Record<string, number> = {
  Ygor: 10,
  John: 20,
};

// Limitando os valores
type Profile = "admin" | "user";

const users: Record<string, Profile> = {
  Ygor: "admin",
  John: "user",
};

// Objetos personalizados
interface IUser {
  name: string;
  age: number;
}

const users: Record<string, IUser> = {
  Ygor: { name: "Ygor", age: 25 },
  John: { name: "John", age: 30 },
};
```

### Typeof

O tipo `typeof` permite que você obtenha o tipo de uma variável ou propriedade.

```ts
const name = "Ygor";

type Name = typeof name; // string
```

### Keyof

O tipo `keyof` permite que você obtenha todas as chaves de um tipo.

```ts
interface IUser {
  name: string;
  age: number;
}

type UserKeys = keyof IUser; // "name" | "age"
```