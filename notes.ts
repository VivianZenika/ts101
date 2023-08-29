/**
 * Primitives
 */

const firstName: string = "Patrick";
const favNumber: number = 3;

firstName * favNumber;
favNumber * firstName.length;

/**
 * Template literals
 */

type States = "open" | "closed" | "disabled";
type Colors = "primary" | "secondary";
type Elements = "btn" | "menu";

type AllowedCssClasses = `${Elements}:${Colors}__${States}`;

function displayDomElement(cssClass: AllowedCssClasses) {
  if (cssClass.substring(0, 3) === "btn") {
    return `<button class='${cssClass}'></button>`;
  }
  return `<div class='${cssClass}'></div>`;
}

displayDomElement("btn:primary__closed");
displayDomElement("menu:secondary__disabled");
displayDomElement("div:secondary__disabled");

/**
 * Interface et classe
 */

type Role = "operator" | "user";

interface IPeople {
  firstName: string;
  lastName: string;
  age: number;
}

interface IUser extends IPeople {
  role: Role;
}

class User implements IUser {
  age: number;
  firstName: string;
  lastName: string;
  role: Role;
  constructor(age: number, firstName: string, lastName: string, role: Role) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
  }

  getUserFromApi(): Promise<IUser> {
    return Promise.resolve({
      age: this.age,
      firstName: this.firstName,
      lastName: this.lastName,
      role: this.role,
    });
  }
}

new User(32, "Jean", "Guillou", "user").getUserFromApi();
new User(32, "Jean", "Guillou", "client").getUserFromApi();

/**
 * Discriminated unions
 */

type ViennoiserieFrancaise =
  | {
      name: "Pain au chocolat";
      departements: [29, 66];
    }
  | {
      name: "Chocolatine";
      departements: [31, 32, 33];
    };

const handleEvent = (pastry: ViennoiserieFrancaise): number | undefined => {
  switch (pastry.name) {
    case "Pain au chocolat":
      return pastry.departements.reduce((prev, curr) => prev + curr, 0);

    case "Chocolatine":
      return pastry.departements[3];
  }
};
