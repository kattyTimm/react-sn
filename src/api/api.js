 /// это временный DAL
 import React from 'react';
 import * as axios from 'axios';


// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
	        baseURL: 'https://social-network.samuraijs.com/api/1.0/', 
	 		withCredentials: true,
	 		headers: {
                        'API-KEY' : '43040dd6-0e63-4499-9314-9afff1dbb86e'
                      }
	 	
});

export const userAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		               .then(resp => resp.data);
    },

    unfollow(id){
		    return instance.delete(`follow/${id}`)
		    .then(resp => resp.data);
	},

      follow(id){
      	 return instance.post(`follow/${id}`)
      	 .then(resp => resp.data);
      }

}

export const authApi ={	
	getAuth(){
		return instance.get(`auth/me`)
	   //  .then(resp=> resp.data);
	}
}	
	
export const profileApi = {
	getProfile(id){

		return instance.get(`profile/${id}`)
		       // .then(resp => resp.data);
	}
}

/*
axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
		.then(resp => {
			this.props.setProfile(resp.data)
		});
*/		

/*
axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
	  	withCredentials: true  //withCredentials прицепит куку с айди польззователя (на серваке я залогинина)
	  })
	  .then(resp => {
            if(resp.data.resultCode == 0){
            	// деструктуризация : 
            	let {id, email, login} = resp.data.data;
            	this.props.setAuthUserData(id, email, login); // axios в data упаковывет респонс
            }
	  });
}
*/