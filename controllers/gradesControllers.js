import { promises } from 'fs';
import { media, somatorio } from '../libs/calculos.js';

const { writeFile, readFile } = promises;

async function addGrade(grades) {
  const data = await readFile(global.fileName);
  const json = JSON.parse(data);
  grades = { id: json.nextId++, ...grades, timestamp: new Date() };
  json.grades.push(grades);
  await writeFile(global.fileName, JSON.stringify(json));
  return grades;
}
async function updateGrade(grades) {
  const data = await readFile(global.fileName);
  const json = JSON.parse(data);
  const newGrades = grades;
  grades = json.grades.filter((grade) => grade.id !== newGrades.id);
  grades = [newGrades, ...grades];
  grades = { nextId: json.nextId, grades };
  await writeFile(global.fileName, JSON.stringify(grades));
  return grades;
}

async function deleteGrade(grades) {
  const data = await readFile(global.fileName);
  const json = JSON.parse(data);
  grades = json.grades.filter((grade) => grade.id !== grades.id);
  grades = { nextId: json.nextId, grades };
  await writeFile(global.fileName, JSON.stringify(grades));
  return grades;
}

async function findGrade(grades) {
  const data = await readFile(global.fileName);
  const json = JSON.parse(data);
  grades = json.grades.filter((grade) => grade.id === grades.id);
  return grades;
}

async function sumGrade(grades) {
  const data = await readFile(global.fileName);
  const json = JSON.parse(data);
  return somatorio(json.grades, grades);
}

async function avgGrade(grades) {
  const data = await readFile(global.fileName);
  const json = JSON.parse(data);
  return media(json.grades, grades);
}

async function sortGrade(grades) {
  const data = await readFile(global.fileName);
  const json = JSON.parse(data);
  grades = json.grades.filter(
    (grade) => grade.subject === grades.subject && grade.type === grades.type
  );

  // Object.keys(grades)
  //   .map((key) => ({
  //     key: key,
  //     valueSubject: grades.subject,
  //     valueType: grades.type,
  //     value: grades.value,
  //   }))

  const sortedData = grades
    .sort((first, second) =>
      first.value < second.value ? -1 : first.value > second.value ? 1 : 0
    )
    .sort((first, second) => second.value - first.value)
    .slice(0, 3);
  return JSON.stringify(sortedData);
}

export {
  addGrade,
  updateGrade,
  deleteGrade,
  findGrade,
  sumGrade,
  avgGrade,
  sortGrade,
};
