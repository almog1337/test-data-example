export default async function getData(): Promise<{ name: string; age: number }> {
  return {
    name: "almog",
    age: 20,
  };
}
