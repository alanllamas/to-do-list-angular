export interface User {

    id?: Number, // string // UUID
    username: String,
    first_name: String,
    last_name: String,
    email: String,
    password?:String,
    url?: String,
    tasks?: [string],

    created ?: Date,
    modified ?: Date,
    
  

}