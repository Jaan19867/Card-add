import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Input from "./Input"
import { Card } from "./Card"

function CreateCard() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [age, setAge] = useState("")
  const [gitUser, setGitUser] = useState("")
  const [imgUrl, setImgUrl] = useState(
    "https://avatars.githubusercontent.com/u/9919?s=280&v=4"
  )

  useEffect( () => {


    if (gitUser) {
      const fetchData=async ()=>{
        const response = await fetch(`https://api.github.com/users/${gitUser}`)
        const newData=await response.json();
       
        setImgUrl(newData.avatar_url)
      }
        fetchData()
       
    }
  }, [gitUser])

  const card = { name, description, age, gitUser, imgUrl }
  const navigate = useNavigate()

  const submitCard = async () => {
    if (
      name === "" ||
      description === "" ||
      age === "" ||
      gitUser == "" ||
      imgUrl === ""
    ){alert("Your input is wrong ") }
    else{
      console.log({card})
      await fetch("http://localhost:3000/cardpost", {
        method: "POST",
        body: JSON.stringify({card}),
        headers: { "Content-type": "application/json" },
      })
        .then((response) => response.text())
        .then((data) => console.log(data))
      navigate("/card")

    }
    
    
  }

  return (
    <div className="my-5 flex justify-center items-center">
      <div className="flex-col justify-center items-center">
        <div className="flex justify-center w-[600px] border-2 rounded-lg border-black/30">
          <div className="w-full p-2" action="">
            <h1 className="ml-1 font-semibold text-lg text-slate-700">
              Add your card
            </h1>
            <Input
              type="text"
              placeholder="Your Name..."
              value={name}
              handleChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Description: Full Stack/Frontend/Backend/etc...."
              value={description}
              handleChange={(e) => setDescription(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Your age sir "
              value={age}
              handleChange={(e) => setAge(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Your github username... (card image will be same as github avatar)"
              value={gitUser}
              handleChange={(e) => setGitUser(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => submitCard()}
            type="button"
            className="w-full inline-flex bg-black justify-center items-center rounded-xl px-3 py-4 text-sm font-semibold text-white hover:bg-[#111930]"
          >
            Add Your E-Card
          </button>
        </div>{" "}
        console.log(newData);
        <div className="flex justify-center w-[600px] rounded-lg">
          <Card card={card} />
        </div>
      </div>
    </div>
  )
}

export default CreateCard
