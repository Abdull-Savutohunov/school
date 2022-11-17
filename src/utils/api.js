import  instance  from "./configs"


export const endpoints = {
  heandleCreateClass :( data ) => instance.post(`class.json`, data),
  getClass : () => instance.get('class.json'),
  heandleClassMore: ( id ) => instance.get(`class/${id}.json`),
  postStudents : ( id , data ) => instance.post(`class/${id}/students/.json` , data),
  deleteToStudent : ( classId , id ) => instance.delete(`class/${classId}/students/${id}.json`),
  changeStudent :(classId, studentId, data) => instance.patch(`/class/${classId}/students/${studentId}/.json`, data),


}


