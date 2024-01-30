const zod=require("zod");



const Card_Zod_Schema = zod.object({
  name: zod.string(),
  age: zod.string(),
  
  description: zod.string(),
  gitUser: zod.string(),
  imgUrl: zod.string(),
  socials:zod.array(zod.object({
social:zod.string(),
url:zod.string(),
id:zod.string()

  }))
  

})

module.exports=Card_Zod_Schema;
