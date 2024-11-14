import prisma from "../prisma.js";

export async function getAll(){
   const result = await prisma.subject.findMany();
   return result;
}
export async function getById(id){
    const result = await prisma.subject.findFirst({where : {id: parseInt(id)}}); 
    return result;
}
export async function add(data){
const result = await prisma.subject.create(data);
return result;
}
export async function update(data){
    const {id, ...restData} = data;
    const item = await getById(id);
    
    if(item){
        const result = await prisma.subject.update({where: {id: item.id}, data: restData})
        return result;
    }
     throw new Error(`Subject not found with id: ${data.id}`)
    
}
export async function remove(id){
    const item = await getById(id);
    if (item){
        return await prisma.subject.delete({where:{id: item.id} });
        
        
    }
    throw new Error(`Subject not found with id: ${id}`)
}