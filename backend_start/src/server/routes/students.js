import  express  from "express";
import { getStudents, writeDataToFile } from "../util.js";
const route = express.Router();

route.get('/', (req,res)=> {res.json({
    data: getStudents()
  });
  });
  route.get('/:id', (req,res)=>{
    const id = req.params.id;
    const student = getStudents().find(student=> student.id ==id);
    if (student){
      return res.json({data:student});
    }
    else{
     return res.status(404).json({error:'student not found'})
    }
    
  });
  route.post('/', (req,res)=> {
    const student = req.body;
    const students =  getStudents();
   const newStudent = {id:students[students.length -1] ? (students[students.length -1].id + 1) : 1,...student};
   students.push(newStudent);
   writeDataToFile('./src/server/data.json', students);
    res.json({data: newStudent});
  });
  route.put('/:id', (req,res)=>{
    const id = req.params.id;
    const student = req.body;
    const students = getStudents();
    const existing = students.find(student => student.id ==  id);
  
    if (existing) {
      let updatedStudent = {};
      const updatedStudents = students.map(item => {
        if(item.id == id){
          updatedStudent = {...item, ...student};
          return updatedStudent;
        }
        return item;
      })
      writeDataToFile('./src/server/data.json', updatedStudents)
      return res.json({data:updatedStudent});
    }
    else{
     return res.status(404).json({error:'student not found'})
    }
  });
  route.delete('/:id', (req,res) => {
    const id = req.params.id;
    const students = getStudents();
    const student = students.find(student=> student.id ==id);
    if (student){
      const updatedStudents = students.filter(item => item.id != id);
      writeDataToFile('./src/server/data.json', updatedStudents);
      console.log(updatedStudents);
      return res.send('OK');
    }
    else{
     return res.status(404).json({error:'student not found'})
    }
    
  });
  
export default route;