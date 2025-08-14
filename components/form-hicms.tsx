// "use client";
// import { ButtonPrimary } from "@/components/ui/buttons";
// import { useActionState, useEffect } from "react";
// import { Spinner } from "@/components/ui/icons";
// import FormInput from "@/components/ui/form-input";
// import FormTextarea from "@/components/ui/form-textarea";
// import FormSelect from "@/components/ui/form-select";
// import FormMultitext from "@/components/ui/form-multitext";
// import FormPassword from "@/components/ui/form-password";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";

// export default function Form({
//     submitFunction,
//     fields,
//     defaultValue,
//     save,
// }: {
//     submitFunction: (prevState: State, formData: FormData) => State | Promise<State>;
//     fields: Field[];
//     defaultValue?: { [key: string]: string | string[] };
//     save?: boolean;
// }) {
//     const initialState: State = { message: null, redirectTo: null, errors: {} };
//     const [state, formAction, isPending] = useActionState(submitFunction, initialState);
//     const router = useRouter();
//     useEffect(() => {
//         if (!isPending) {
//             if (state.status === "success") {
//                 if (state.redirectTo) {
//                     router.push(state.redirectTo);
//                 }
//                 toast.success("Great! Your data has been updated successfully.");
//             } else if ((state.message || state.errors) && state.status === "failed") {
//                 toast.error(state.message || "There is an error");
//             }
//         }
//     });
//     return (
//         <form action={formAction} className="w-full">
//             <div className="flex flex-col space-y-5 px-5 md:space-y-8">
//                 {defaultValue ? <input type="hidden" name="id" value={defaultValue._id} /> : ""}
//                 {fields.map(({ name, label, type, required, placeholder, options }) => {
//                     let FormField;
//                     const errors = !isPending && state.errors?.[name];
//                     switch (type) {
//                         case "select":
//                             FormField = (
//                                 <FormSelect
//                                     name={name}
//                                     id={name}
//                                     defaultValue={state.values?.[name].toString() ?? defaultValue?.[name]}
//                                     required={!!required}
//                                     disabled={isPending}
//                                     errors={errors}
//                                     options={options}
//                                 />
//                             );
//                             break;
//                         case "textarea":
//                             FormField = (
//                                 <FormTextarea
//                                     name={name}
//                                     placeholder={placeholder || label}
//                                     id={name}
//                                     defaultValue={state.values?.[name].toString() ?? defaultValue?.[name]}
//                                     required={!!required}
//                                     disabled={isPending}
//                                     errors={errors}
//                                 />
//                             );
//                             break;
//                         case "multitext":
//                             FormField = (
//                                 <FormMultitext
//                                     name={name}
//                                     placeholder={placeholder || label}
//                                     id={name}
//                                     defaultValue={state.values?.[name].toString() ?? defaultValue?.[name]}
//                                     required={!!required}
//                                     disabled={isPending}
//                                     errors={errors}
//                                 />
//                             );
//                             break;
//                         case "password":
//                             FormField = (
//                                 <FormPassword
//                                     name={name}
//                                     placeholder={placeholder || label}
//                                     id={name}
//                                     defaultValue={state.values?.[name].toString() ?? defaultValue?.[name]}
//                                     required={!!required}
//                                     disabled={isPending}
//                                     errors={errors}
//                                 />
//                             );
//                             break;
//                         default:
//                             FormField = (
//                                 <FormInput
//                                     type={type}
//                                     name={name}
//                                     placeholder={placeholder || label}
//                                     id={name}
//                                     defaultValue={state.values?.[name].toString() ?? defaultValue?.[name]}
//                                     required={!!required}
//                                     disabled={isPending}
//                                     errors={errors}
//                                 />
//                             );
//                             break;
//                     }
//                     return (
//                         <div key={name} className="text-gray-500 md:flex md:items-center">
//                             <div className="mb-1 md:mb-0 md:w-50">
//                                 <label htmlFor={name}>{label}</label>
//                             </div>
//                             <div className="md:w-[65%]">{FormField}</div>
//                             <div className="md:grow">
//                                 <p className="ms-3 text-rose-400">{!isPending && state.errors?.[name]}</p>
//                             </div>
//                         </div>
//                     );
//                 })}
//                 <div className="flex items-center">
//                     <ButtonPrimary type="submit" disabled={isPending} className="flex justify-center">
//                         {isPending ? <Spinner className="size-6 border-gray-50" /> : save ? "Save" : "Submit"}
//                     </ButtonPrimary>
//                 </div>
//             </div>
//         </form>
//     );
// }
