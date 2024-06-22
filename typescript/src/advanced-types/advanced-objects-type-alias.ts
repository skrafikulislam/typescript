type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee2: Employee = {
  id: 1,
  name: "babu",
  retire: (date: Date) => {
    console.log(date);
  },
};
