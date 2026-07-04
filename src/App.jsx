import React, { useState } from 'react'
const App = () => {

  const [headingInput, setheadingInput] = useState('')
  const [desInput, setdesInput] = useState('')
  const [Result, setResult] = useState([])

  const formHandler = (e)=>{
    e.preventDefault();

    const copy = [...Result];

    copy.push({headingInput,desInput})
    setResult(copy);

    console.log("Form submitted...");
    setdesInput('');
    setheadingInput('');
  }

  
  return (
    <div className='min-h-screen w-full lg:flex'>
      {/*Section 1*/}
      <form onSubmit={(e)=>{formHandler(e)}} className=' lg:w-1/2 flex flex-col gap-4 p-4 bg-black text-white pt-6'>
        <h1 className='text-6xl text-center text-amber-500 pb-4'>Add Notes</h1>
        <input 
          type='text' 
          placeholder='Enter Heading' 
          value={headingInput} 
          id='title'
          onChange={(e)=>{
            setheadingInput(e.target.value);
          }} 
          className='p-2 text-2xl  border border-amber-50 rounded-[0.52rem]'
          >
        </input>
        <textarea 
          placeholder='Enter Notes' 
          className='h-60 p-4 border-amber-50 border rounded-[0.52rem]' 
          value={desInput}
          onChange={(e)=>{
            setdesInput(e.target.value)
          }}
          >
        </textarea>
        <button className='bg-white text-black rounded-[0.52rem] p-2 active:scale-98 active:bg-gray-400 '>Add Note</button>
      </form>
        
      <div className='bg-gray-800 lg:w-1/2 p-6'>
        <h1 className='text-center text-6xl text-amber-500 mb-8'>Notes</h1>
        <div className='flex gap-5 flex-wrap justify-around'>
          {Result.map((val,idx)=>{
            return (
              <div key={idx} className='relative h-80 lg:w-80 py-4 px-8 rounded-2xl bg-[url("https://i.pinimg.com/1200x/83/46/d5/8346d59dea6a81fe4a2e0faeab26fec0.jpg")] bg-cover'>
               <i id={idx}
                className="ri-close-large-line text-gray-600 absolute top-0 right-0 rounded-tr-2xl hover:bg-red-600 py-1 px-2" 
                onClick={(e)=>{
                  const copy = [...Result];
                  copy.splice(e.target.id,1);
                  setResult(copy);
                }}
                >
              </i>
                <textarea 
                  type='text'
                  className='text-center text-3xl mb-3 w-full h-10 outline-none text-cyan-500'
                  value={val.headingInput}  
                  onChange={(e)=>{
                    const copy = [...Result];
                    copy[idx].headingInput = e.target.value;
                    setResult(copy)
                  }}            
                  >
                </textarea>
                <hr className='border-amber-200'></hr>
                <textarea 
                  type='text' 
                  className='h-[80%] w-full outline-none p-6 text-white'
                  value={val.desInput}
                  onChange={(e)=>{
                    const copy = [...Result];
                    copy[idx].desInput = e.target.value;
                    setResult(copy);
                  }}
                  >
                </textarea>
              </div>
            )
          })}
        </div>
        
      </div>
    </div>
  )
}

export default App