let employee: {
  id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "babu",
  retire: (date: Date) => {
    console.log(date);
  },
};
