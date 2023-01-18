import axios from 'axios'
const BASE_URL = "http://localhost:5001"
const API_URL = '/api/users'

//resigter user
const register = async (userData)=>{
      const response = await axios.post(`${BASE_URL}${API_URL}`,userData)

      if(response.data){
        localStorage.setItem('user, JSON.stringify'(response.data))
      }
      return response.data
}
const login = async (userData)=>{
  const response = await axios.post(`${BASE_URL}${API_URL}${"/login"}`,userData)

  if(response.data){
    localStorage.setItem('user, JSON.stringify'(response.data))
  }
  return response.data
}

const authService = {
    register,login
}

export default authService
