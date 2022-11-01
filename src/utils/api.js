import { instanse } from "./configa"


export const endpoints = {
  CreateTeacher: (data , userId) => instanse.put(`teacher/${userId}.json`, data),
  createClass :( data ) => instanse.post(`class.json`, data),
  getClass : () => instanse.get('class.json'),
  GetMoreClass: ( id ) => instanse.get(`class/${id}.json`),
  postStudents : ( id , data ) => instanse.post(`class/${id}/students/.json` , data)


}

