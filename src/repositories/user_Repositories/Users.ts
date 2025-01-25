
import { PrismaClient } from "@prisma/client";
import type { userTypes } from "../../types/user"


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
    async update(email:string){
        try {
            const verifiedUser=await prisma.user.update({where:{email:email},data:{verified:true}});
            return verifiedUser
        } catch (error) {
            return error
        }

    },

    async deleteSingleUser(id:string){
        try {
            const deleteUser=await prisma.user.delete({where:{
                id:id
            }})
            return deleteUser
        } catch (error) {
            return error
        }
        
    },
    async deleteAll(){

    }

}
