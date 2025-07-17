'use client'
import Image from 'next/image';
import { CgProfile } from 'react-icons/cg';
import { FaRegMessage } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import GlowingOrbs from './FormComponents/GlowingOrbs';

// form data structure
interface FormData {
    name: string;
    email: string;
    message: string;
}

const page = () => {

    // necessary functions for form handling using react-hook-form
    const {
        register, handleSubmit, formState: { errors, isSubmitting, }, reset,
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            //simulating API Call

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
            );

            alert('Message sent successfully!!');
            reset();
        }
        catch (error) {
            alert('Error submitting the form, please try again later!!')
        }
    }

    return (
        <form className='bg-[#16161a] min-h-screen w-full py-10'>
            <div className='text-white text-sm w-[90%] max-w-[400px] sm:max-w-[500px] lg:max-w-[900px] xl:max-w-[1000px] mx-auto rounded-xl
                [box-shadow:2px_2px_10px_rgba(227,216,216,0.3)] lg:shadow-none lg:flex lg:gap-4 lg:items-center lg:justify-start py-4'>
                <div className="bg-[url(/grain.jpg)] absolute inset-0 -z-10 opacity-5 rounded-xl" />

                {/* Glowing Orbs */}
                <GlowingOrbs />
                <div className='w-full lg:w-[60%] flex flex-col items-start px-3 py-4 rounded-xl z-10 font-poppins'>
                    <h1 className='text-lg mx-auto pb-1 font-semibold [letter-spacing:1px] sm:text-xl lg:text-lg xl:text-xl'>Let's get in touch🤝</h1>
                    <div className='w-full mt-8 flex flex-col gap-3 sm:text-base lg:text-sm xl:text-base'>
                        <label className='inline-flex items-center gap-1'>Full Name<span><CgProfile className='size-3.5' /></span></label>
                        <input id='name' type="text" className='w-full border-b border-b-emerald-300 focus:outline-none px-1 pb-0.5' placeholder='John Doe'
                            {...register('name',//validation rules as second paramenter
                                {
                                    required: 'Name is mandatory',
                                    minLength: {
                                        value: 4,
                                        message: 'Name must be at least 4 characters long',
                                    }

                                })}
                        />
                        {errors.name && (
                            <p className='text-red-600/70 text-sm'>{errors.name.message}</p>
                        )}
                    </div>
                    <div className='w-full my-3 flex flex-col gap-3 sm:text-base lg:text-sm xl:text-base'>
                        <label className='inline-flex items-center gap-1 '>Your Email<span><SiGmail className='size-3.5' /></span></label>
                        <input id='email' type="email" className='w-full border-b border-b-emerald-300 focus:outline-none px-1 pb-0.5' placeholder='johndoe@gmail.com'
                            {...register('email',
                                {
                                    required: 'Email is required.',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Please enter a valid email address.'
                                    }
                                })}
                        />
                        {errors.email && (
                            <p className='text-red-600/70 text-sm'>{errors.email.message}</p>
                        )}
                    </div>
                    <div className='w-full mb-3 flex flex-col gap-3 sm:text-base lg:text-sm xl:text-base'>
                        <label className='inline-flex items-center gap-1 '>Message<span><FaRegMessage className='size-3.5' /></span></label>
                        <textarea id="message" className='w-full border border-emerald-300 rounded-md focus:outline-none px-1 pb-0.5' rows={6}

                            {...register('message',
                                {
                                    required: 'Please enter some message.',
                                    minLength: {
                                        value: 10,
                                        message: 'Message must be at least 10 characters long.'
                                    }
                                })}
                        />
                        {errors.message && (
                            <p className='text-red-600/70 text-sm'>{errors.message.message}</p>
                        )}
                    </div>
                    <button className={`px-4 py-3 cursor-pointer border rounded-md border-white/80 mx-auto lg:mr-0 sm:text-base lg:text-sm xl:text-base
                                    ${isSubmitting ? 'cursor-not-allowed bg-gray-400 text-black/80' : 'focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2'}`
                    }
                        onClick={handleSubmit(onSubmit)}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Send"}
                    </button>
                </div>
                <div className='hidden lg:block lg:w-[35%]'>
                    <Image src='/personCoding.jpg' alt='personCoding' width={3456} height={5184} className='w-full h-full object-cover grayscale' />
                </div>
            </div>
        </form>
    )
}

export default page
