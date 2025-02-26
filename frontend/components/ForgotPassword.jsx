// 'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Validation schema
const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
});

function ForgotPassword() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (values, { setSubmitting }) => {
        setIsSubmitting(true);
        // Handle form submission logic here
        // ...
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
    };

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <main className="flex-grow flex flex-col items-center px-4 sm:px-6 md:px-8 mt-12 sm:mt-16 md:mt-[88px]">
                <div className="w-full max-w-max sm:max-w-md md:max-w-fit">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold text-center text-[#29296E] mb-4 md:mb-6">
                        Forgot Password?
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-[24px] text-center text-gray-600 mt-4 sm:mt-6 md:mt-8 mb-6 sm:mb-8 md:mb-12">
                        Enter the email address associated with your account<br className="hidden sm:block" />
                        so we can send a link to reset your password
                    </p>

                    <Formik
                        initialValues={{ email: '' }}
                        validationSchema={ForgotPasswordSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, values, isValid, dirty }) => (
                            <Form className="space-y-4 md:space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm text-gray-600">
                                        Email
                                    </label>
                                    <Field
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full h-10 sm:h-12 md:h-[54px] p-2 border border-[#797979] rounded-[8px] focus:outline-none focus:ring-1 focus:ring-[#797979]"
                                    />
                                    {errors.email && touched.email ? (
                                        <div className="text-red-500 text-xs">{errors.email.toString()}</div>
                                    ) : null}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-[24px] h-12 sm:h-14 md:h-[56px] py-2 md:py-3 bg-[#29296E] text-white font-bold hover:bg-[#1d1d58] disabled:opacity-50"
                                    disabled={!(isValid && dirty) || isSubmitting}
                                >
                                    Continue
                                </button>

                                <div className="text-center">
                                    <Link href="/signin" className="text-base sm:text-lg md:text-xl lg:text-[24px] text-indigo-900 hover:underline">
                                        Return to Login
                                    </Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </main>
        </div>
    );
}

export default ForgotPassword;