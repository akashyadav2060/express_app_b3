import  express  from "express";
import { getSubjects, writeDataToFile } from "../util.js";
const route = express.Router();

route.get('/', (req,res)=> {res.json({
    data: getSubjects()
  });
  });
  route.get('/:id', (req,res)=>{
    const id = req.params.id;
    const subject = getSubjects().find(subject=> subject.id ==id);
    if (subject){
      return res.json({data:subject});
    }
    else{
     return res.status(404).json({error:'subject not found'})
    }
    
  });
  route.post('/', (req,res)=> {
    const subject = req.body;
    const subjects =  getSubjects();
   const newSubject = {id: subjects[subject.length -1] ? (subjects[subject.length -1].id + 1) : 1,...subject};
   subjects.push(newSubject);
   writeDataToFile('./src/server/subject.json', subjects);
    res.json({data: newSubject});
  });
  route.put('/:id', (req,res)=>{
    const id = req.params.id;
    const subject = req.body;
    const subjects = getSubjects();
    const existing = subjects.find(subject => subject.id ==  id);
  
    if (existing) {
      let updatedSubject = {};
      const updatedSubjects = subjects.map(item => {
        if(item.id == id){
            updatedSubject = {...item, ...subject};
          return updatedSubject;
        }
        return item;
      })
      writeDataToFile('./src/server/subject.json', updatedSubjects)
      return res.json({data:updatedSubject});
    }
    else{
     return res.status(404).json({error:'subject not found'})
    }
  });
  route.delete('/:id', (req,res) => {
    const id = req.params.id;
    const subjects = getSubjects();
    const subject = subjects.find(subject=> subject.id ==id);
    if (subject){
      const updatedSubjects = subjects.filter(item => item.id != id);
      writeDataToFile('./src/server/subject.json', updatedSubjects);
      console.log(updatedSubjects);
      return res.send('OK');
    }
    else{
     return res.status(404).json({error:'subject not found'})
    }
    
  });
  
export default route;