

const Contact= () => {

    return(

        <section id="contact" className="container pt-6 pb-10 lg:grid lg:grid-cols-2 lg:mt-0 
        lg:gap-8 lg:h-[90vh] xl:h-[90vh] lg:pt-0 lg:pb-0 justify-center items-center">
            <div className="">
                <h2 className="tittle-contact">
                    Contact me for colaboration
                </h2>
                <p className="pb-5">                   
                Thank you for visiting this portfolio. I’m always open to new projects and opportunities. If you have an interesting idea or just want to talk about technology, feel free to reach out. I'm ready to collaborate and bring my best to the table.
                    <br/>
                    <br/>
                Sincerely,
                JKOC                
                </p>
            </div>

            <form action="https://getform.io/f/axoojwkb" method="POST" className="flex flex-col gap-3 pt-5 pb-10">
                <div className="flex flex-col gap-3 lg:flex-row">
                    <div className="flex flex-col gap-2 ">
                        <label 
                        htmlFor="name"
                        className=""
                        >Name : </label>
                        <input
                        type="text" 
                        className="input"
                        required
                        placeholder="Jonathan Oblitas"
                        name="name" 
                        />
                        
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <label 
                        htmlFor="email" 
                        className=""
                        >Email : </label>
                        <input 
                        type="email" 
                        className="input"
                        required
                        placeholder=" oblitaskevin30@gmail.com"
                        name="email"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 ">
                    <label htmlFor="" className="">Message</label>
                    <textarea 
                    name="message"
                    className="input message "
                    placeholder="Hi!"
                    required
                    id="textarea"
                    ></textarea>
                </div>
                <button type="submit"
                className = "mt-3 w-full rounded-lg h-11 bg-transparent bg-zinc-800 hover:bg-zinc-200 hover:text-zinc-900 text-white font-semibold   border border-zinc-400 hover:border-transparent">
                submit</button>
            </form>            
        </section>

    )
}

export default Contact