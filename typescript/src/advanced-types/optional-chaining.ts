type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

// *********************************************
//* if (customer !== null && customer !== undefined) {
//*   console.log(customer.birthday);
//* }
// ********************************************

//! We can remove the within star line code with below concept in typescript
// ? optional property access operator
console.log(customer?.birthday?.getFullYear());

// ? optional element access operator
//Example -  customers?.[0];
