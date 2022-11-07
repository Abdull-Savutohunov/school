import React from 'react';
import { endpoints} from "../utils/api";

const UseClass = () => {

  const [ loading , setLoading] = React.useState(false)

  const post = React.useCallback((data) => {
    setLoading(true)
    endpoints.heandleCreateClass(data)
      .finally(() => setLoading(false))
  })
  return{
    loading,
    actions: {
      post ,
    }
  }
};

export default UseClass;