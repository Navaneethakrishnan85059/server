import { PrismaClient } from "@prisma/client"
import { userTypes } from "../../types/user"


const prisma=new PrismaClient()


export const USER={

    async add(userData:userTypes){

        try {
            const AddUser=await prisma.user.create({
                data:userData
            })
          
           
            
            return  AddUser
        } catch (error) {
            return error;
            
        }

    },
    async getAll(){

    },
    async getId(){

    },
    async update(){

    },

    async delete(){

    },
    async deleteAll(){

    }

}
