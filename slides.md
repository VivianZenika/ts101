---
background: "./images/zenika-stary-night-background.png"
class: text-center
highlighter: shiki
lineNumbers: false
transition: slide-left
title: Total TypeScript Advanced Patterns Workshop
theme: dracula
---

# TypeScript Advanced Patterns Workshop

Retour d'expérience de mon JAZ sur la série d'exercices Total TypeScript Advanced Patterns Workshop

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Ready? <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: image-right
image: ./images/profile-bis.jpg

---

# Vivian SARAZIN

<v-clicks>

- Développeur consultant

- Zenika Brest
  
- TypeScript enthousiast
  
- Vue fan
  
- Fifa 2023 new challenger

</v-clicks>

<div class="pt-72 text-xs text-right">
  <carbon:camera class="inline" /> Alex Palma
</div>

---
layout: default

---

# Sommaire

<Toc></Toc>

---
layout: cover
level: 1

---

# TypeScript c'est quoi ?

TypeScript est un langage de programmation qui étend JavaScript en ajoutant des **types statiques** pour détecter les erreurs plus tôt dans le processus de développement.

---
layout: cover
level: 1

---

# Avantages

<v-clicks>

- Typage statique : Les types statiques permettent de détecter les erreurs de type dès la phase de développement, ce qui rend **le code plus fiable et réduit les bugs liés aux types**.

- Meilleure assistance au développement : Les environnements de développement intégrés prenant en charge TypeScript offrent une assistance accrue, **comme l'autocomplétion et la navigation facilitée dans le code**.

- Refactoring simplifié : Les types statiques **facilitent** les modifications de code en identifiant **automatiquement** les endroits où des ajustements sont nécessaires en cas de changements de types.

- Compatibilité avec JavaScript : TypeScript est compatible avec le code JavaScript existant, ce qui permet une **transition progressive** vers TypeScript sans avoir à tout réécrire.

- Évolution d'ECMAScript : TypeScript prend en charge les fonctionnalités des **versions récentes d'ECMAScript**, ce qui permet d'utiliser des caractéristiques modernes de JavaScript.

</v-clicks>

---
layout: iframe

url: https://www.typescriptlang.org/play
---

---
layout: cover
level: 1

---

# Inconvénients

<v-clicks>

- Surcharge de travail : L'annotation de types nécessite un **effort supplémentaire** lors de l'écriture du code, ce qui peut augmenter le temps de développement.

- Taille des fichiers : La transpilation du code TypeScript en JavaScript peut entraîner une **augmentation de la taille des fichiers**, ce qui peut avoir un impact sur le temps de chargement des applications web.

- Dépendance à la compilation : Étant donné que TypeScript nécessite une étape de compilation, cela peut **ajouter une étape supplémentaire** au processus de développement et de déploiement.

- Adoption progressive : Bien que TypeScript soit compatible avec JavaScript, la transition vers TypeScript **peut nécessiter du temps et des ressources** pour que les équipes s'adaptent et apprennent les concepts spécifiques à TypeScript.

- Complexité accrue : L'ajout de types peut parfois rendre le code plus complexe, ce qui peut demander **une courbe d'apprentissage plus longue** pour les développeurs.

</v-clicks>

---
transition: slide-left
layout: image-right
image: ./images/one-does-not-simply.png

---


```ts
type IsDivByThree<T extends unknown[]> = T extends [...infer Start, unknown, unknown, unknown]
? Start extends []
  ? 'Fizz'
  : IsDivByThree<Start>
: false

type IsDivByFive<T extends unknown[]> = T extends [...infer Start, unknown, unknown, unknown, unknown, unknown]
? Start extends []
  ? 'Buzz'
  : IsDivByFive<Start>
: false

type FizzBuzz<N extends number, Acc extends unknown[] = []> = N extends Acc['length']
? Acc
: FizzBuzz<N, [...Acc, 
    `${
        ( IsDivByThree<[...Acc, '']> | IsDivByFive<[...Acc, '']> ) extends false 
          ? [...Acc, '']['length'] extends number ? [...Acc, '']['length'] : never
          : ''
      }${
        IsDivByThree<[...Acc, '']> extends string ? 'Fizz' : ''
      }${
        IsDivByFive<[...Acc, '']> extends string ? 'Buzz' : ''
      }`
  ]>
```

---
transition: slide-up
layout: image-right
image: ./images/matt-pocock.jpg

---

# Matt Pocock & Total TypeScript

<v-clicks>

- 🇬🇧

- Ancien technical writer @Vercel

- Rythme de publication

- Qualité du contenu

- Mediums

- https://www.totaltypescript.com/

</v-clicks>

---

# TypeScript Advanced Patterns Workshop

## Contenu

- **branded types**

- globals

- **type predicates assertion functions**

- classes

- external libraries

- identity functions

- challenges

---

## Branded Types

En TypeScript, les Branded Types sont une technique utilisée pour créer de nouveaux types qui sont en fait des sous-types d'un autre type existant, mais qui sont **marqués** d'une manière spécifique. Cela permet de créer des types distincts pour des valeurs qui, autrement, auraient le même type sous-jacent.

```ts {monaco}
type BzhPlace = string & { __brand: "bzhPlace" };

function checkIfBzhPlace(city: string): BzhPlace | undefined {
  if (city.substring(0, 3) === "ker") {
    return city as BzhPlace;
  }
  return;
}
```

https://verbose-waffle-vx59xprgww6hw9pw.github.dev/

02-form-validation

---

## Type predicates & assertion functions

Les **Type Predicates** et les **Type Assertion Functions** sont des concepts importants en TypeScript pour effectuer des vérifications et des conversions de type plus précises et fiables dans votre code.

```ts {monaco}
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function asObject(value: unknown): asserts value is object {
  if (typeof value !== 'object' || value === null) {
    throw new Error("Value is not an object.");
  }
}
```

https://verbose-waffle-vx59xprgww6hw9pw.github.dev/

12-type-predicates-with-filter

13-assertion-functions

---

## 🤯

https://verbose-waffle-vx59xprgww6hw9pw.github.dev/

16-brands-and-type-predicates

17-brands-and-assertion-functions


---
layout: end

---

# Thanks!

<div class="pb-8">
  La chaîne YouTube de Matt Pocock
  <br />
  <carbon:link class="inline"/>
  https://www.youtube.com/@mattpocockuk 
</div>

<div class="pb-8">
  Total TypeScript
  <br />
  <carbon:link class="inline"/>
  https://github.com/total-typescript 
</div>
