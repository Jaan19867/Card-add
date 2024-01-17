const zod=require("zod");



const Card_Zod_Schema = zod.object({
  name: zod.string(),
  age: zod.string(),
  College_Name: zod.string(),
  description: zod.string(),
  gitUser: zod.string(),
  imgUrl: zod.string(),
  

})

module.exports=Card_Zod_Schema;
