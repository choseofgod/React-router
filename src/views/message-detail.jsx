import React from "react";

const allMessage = [
  {id:1 , title : 'message001' , content: '我爱你 中国'},
  {id:3 , title : 'message003' , content: '我爱你 中'},
  {id:5 , title : 'message005' , content: '我爱你 '}
]


export default function MessageDetail(props) {
  //得到对应id
  const {id} = props.match.params

  //对应数据
  const message = allMessage.find(item => item.id === id*1)


  return (
    <ul>
      <li>{message.id}</li>
      <li>{message.title}</li>
      <li>{message.content}</li>
    </ul>
  )
}