'use server'

import { SendEmail } from "@/lib/resend"

export const handleFormSubmit = async (formData:FormData)=>{
    const email = formData.get("senderEmail")?.toString()
    const message = formData.get("message")?.toString()
    
    if(!email){
        return {
            error:'message body is empty'
        }
    }
    if(!message){
        return {error:'message body is empty'}
    }
    if(message.length < 10){
        return {error:'message body is not up to 500'}
    }
    try{

        await SendEmail(email, message)
        return {
            success:'message sent successfully'
        }
    }catch(error){
        return {error:'Internal server error'}
    }
    console.log('this is the form submit button ',email,message)
}


