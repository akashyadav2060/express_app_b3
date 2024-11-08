import fs from 'fs';

export function readDataFromFile(filepath){
    const data = fs.readFileSync(filepath, {encoding:"utf8"});
    return data;
}
export function getStudents(){
    const data = readDataFromFile('./src/server/data.json');
    const dataJSON = JSON.parse(data);
    return dataJSON.data;
}
export function getSubjects(){
    const data = readDataFromFile('./src/server/subject.json');
    const dataJSON = JSON.parse(data);
    return dataJSON.data;
}
export function writeDataToFile(filepath, data){
    fs.writeFileSync(filepath, JSON.stringify({data}));
}
