import React from 'react'
// type formVal = FormDataEntryValue | null

const EmailTemplate = ({email,message}:{email:string,message:string}) => {
  return (
    <html>
        
        <body style={{backgroundColor:'#f6f5f6'}}>
            <div style={{ textAlign:'center'}}>
                <h1 style={{fontWeight:'bold'}}>Contact Detail</h1>
                <p>{message}</p>
                <small className='text-yellow-300'> received email from {email} </small>

            </div>
        </body>
    </html>
  )
}

export default EmailTemplate