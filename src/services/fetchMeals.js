export async function fetchMeals() {
  const res = await fetch('http://localhost:3031/meals');
  const data = await res.json();
  return data;
}
