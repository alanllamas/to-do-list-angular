import { Task } from "./task.model";

export interface User {

    id?: Number, // string // UUID
    username: String,
    first_name: String,
    last_name: String,
    email: String,
    url: String,
    tasks: [Task],

    created ?: Date,
    modified ?: Date,
    
  

}