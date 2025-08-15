// import fs from "fs/promises";
// import path from "path";

// const dataFilePath = path.join(process.cwd(), "lib", "todo.json");

// export async function readTodos() {
//   try {
//     const data = await fs.readFile(dataFilePath, "utf-8");
//     return JSON.parse(data);
//   } catch (error) {
//     // If the file doesn't exist, return an empty array
//     if (error.code === "ENOENT") {
//       return [];
//     }
//     throw error;
//   }
// }

// export async function writeTodos(todos) {
//   await fs.writeFile(dataFilePath, JSON.stringify(todos, null, 2));
// }
