import React from 'react'
import ChatMessage from './ChatMessage'
import { generateRandomName, makeRandomMessage } from '../utils/Helper'
import { useDispatch, useSelector } from 'react-redux'
import ChatSlice, { addMessage } from '../utils/ChatSlice'
import { useEffect, useState } from 'react'
const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector( store => store.chat.messages)
    const [liveMessage, setLiveMessage] = useState("");
    const [inputActive, setInputActive] = useState(false)

    useEffect(() => {
      const i = setInterval(() => {
        dispatch(addMessage(
            {
                name: generateRandomName(),
                message: makeRandomMessage(20)
            }
        ))
      }, 500);
    
      return () => clearInterval(i)
    }, [])
    

  return (
    <>
        <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-t-lg rounded-tr-lg  overflow-y-scroll flex flex-col-reverse">
        <div>
            {
                chatMessages.map((c,i) => <ChatMessage key={i} name={c.name} message={c.message} />   )
            }
        </div>
        </div>

        <form
        className="w-full flex  items-center h-10 ml-2 rounded-b-lg border-t-0 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Yash Sarode",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className={`h-full px-2 w-full 
           ${inputActive ? 'rounded-bl-lg ' : 'rounded-bl-xl '}`}
          type="text"
          value={liveMessage}
          onFocus={()=>{setInputActive(true)}}
          onChange={(e) => {
            setLiveMessage(e.target.value);
            
          }}
        />
        <button className=" h-full px-4 rounded-br-lg  bg-green-100">Send</button>
      </form>
    </>
    
  )
}

export default LiveChat