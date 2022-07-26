import React, { createContext, useEffect, useState } from 'react';
import { api } from '../services/api.js';
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {

   const navigate = useNavigate();
   const [user, setUser] = useState('');
   const [loading, setLoading] = useState(true);
   const [validUser, setValidUser] = useState(true);
   const [validPassword, setValidPassword] = useState(true);

   useEffect(()=>{
      const storedUser = localStorage.getItem('user');

      if(storedUser){
         setUser(JSON.parse(storedUser));
      }

      setLoading(false);
   },[]);

   function logar(userData) {
      api
         .get('/users')
         .then((response) => {
            const expectedUser = response.data.find(element => element.email === userData.email);
            const expectedPassword = response.data.find(element => element.senha === userData.senha);

            if (expectedUser) {
               setValidUser(true);
               if (expectedPassword) {
                  setValidPassword(true);
                  setUser(expectedUser);
                  localStorage.setItem('user', JSON.stringify({
                     id: expectedUser.id,
                     email: expectedUser.email
                  }));
                  navigate('/home');
               } else {
                  setValidPassword(false);
               }
            } else {
               setValidUser(false);
            }
         })
   }

   function logout(){
      setUser('');
      localStorage.setItem('user', JSON.stringify({
         id: '',
         email: ''
      }));
   }
   
   return (
      <AuthContext.Provider value={{authenticated: !!user, loading, logar, logout, user, setUser, validUser, validPassword}}>
         {children}
      </AuthContext.Provider>
   );
}