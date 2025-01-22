
import { PrismaClient } from "@prisma/client";
import { userTypes } from "../../types/user"


const prisma=new PrismaClient()


export const USER={

    async add(userData:userTypes){

        try {
            const AddUser=await prisma.user.create({
                data:userData
            })
          
           
            
            return  AddUser;
        } catch (error) {
            return error;
            
        }

    },
    async getAll(){
        try {
            const allUsers=await prisma.user.findMany();

            return allUsers;
        } catch (error) {
            return error
        }

    },
    async getByEmail(email:string){
        try {
            const emailVerify=await prisma.user.findUnique({
                where:{
                    email:email
                }
            });

            return emailVerify;
        } catch (error) {
          return error  
        }

    },
    async update(){

    },

    async delete(){

    },
    async deleteAll(){

    }

}
