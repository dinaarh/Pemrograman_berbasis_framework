// Menerima URL, melakukan fetch, return data sebagai JSON
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default fetcher;
