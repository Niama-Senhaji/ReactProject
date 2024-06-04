import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from "@emailjs/browser"

type FormInputs = {
    subject : string,
    email   : string,
    message : string 
}


export const Contact = () => {
    const { register, handleSubmit, formState : { errors } } = useForm<FormInputs>()

    const onSubmit: SubmitHandler<FormInputs> = data => {
        emailjs.send(

        'service_pddh3up',
        'template_fkobqqs',
        {
            subject : data.subject,
            email   : data.email,
            message : data.message   
        },

        'w-LcV5oYI_hdxn33h'
        )
    }

    return (
        <main>
            

            <form className="mt-10" onSubmit={ handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="block text-2xl font-extrabold " htmlFor="subject" style={{ color: "#4A68E7",  fontFamily: "Times New Roman, Times, serif" }}>Sujet du mail</label>
                    <input {...register("subject")} className="border-2 border-gray-300 w-96 p-1" type="text" name="subject" id="subject" placeholder="Quel est le sujet ?" />
                </div>
                <div className="mb-3">
                    <label className="block text-2xl font-extrabold " htmlFor="email" style={{ color: "#4A68E7", fontFamily: "Times New Roman, Times, serif" }}> Email</label>
                    <input {...register("email", {required:true})} className="border-2 border-gray-300 w-96 p-1" type="text" name="email" id="email" placeholder="Votre email" />
                {errors.email && <p style={{ fontFamily: "Times" }} className="text-[red] "> Email requis</p>}
                </div>
                <div className="mb-3">
                    <label className="block text-2xl font-extrabold " htmlFor="message" style={{ color: "#4A68E7", fontFamily: "Times New Roman, Times, serif" }}>Message</label>
                    <textarea {...register("message")} rows={5} className="border w-full resize-none py-5 px-6 " name="message" id="message" placeholder="Votre message"/>
                </div>
                
                <div className="mb-3">
                    <input type="submit" className="block bg-[#000000] text-white py-1 px-3 hover:bg-[#AF8BE4] text-2xl" style ={{fontFamily:'Times, serif', margin: '0 auto', marginLeft: 'auto',padding: '10px', maxWidth: '130px', border: '2px solid #977392', borderRadius: '10px', boxShadow: '0 0 50px rgba(0, 0, 0, 0.4)'}}/>
                </div>
            </form>
        </main>
    );
};
