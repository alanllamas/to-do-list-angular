
import { User } from "./user.model";
// import { Concept } from "./concept.model";

export interface Task {

    id?: Number, // string // UUID
    name: String,
    description : String,
    duration : Number,
    priority : String,
    dead_line : Date
    user: User,
    done : Boolean,

    created ?: Date,
    modified ?: Date,
    


}