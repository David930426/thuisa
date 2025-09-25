"use client";
// import { ComplainState, sendSuggest } from "@/actions/supportAction";
import { ComplainState } from "@/actions/supportAction";
import { ButtonSecondary } from "@/components/ui/button";
// import Spinner from "@/components/ui/spinner";
// import { useActionState, useEffect } from "react";
// import { toast } from "sonner";

export function ContactForm() {
  const initialState: ComplainState = { ok: false, message: "" };
  // const [state, formAction, isPending] = useActionState(
  //   sendSuggest,
  //   initialState
  // );
  // useEffect(()=> {
  //   if(!state.message) return;
  //   if (state.ok) toast.success(state.message);
  //   else toast.error(state.message);
  // }, [state.ok, state.message])
  return (
    <div className="bg-red-600 text-white md:py-30 py-20">
      <div className="md:max-w-5xl md:mx-auto mx-10">
        <h1 className="md:text-5xl text-3xl font-bold mb-5">
          Need Help or Want to Reach Out?
        </h1>
        <p className="md:text-xl text-md mb-10">
          If you&apos;re facing any issues, have concerns, or just want to
          suggest improvements, this is the place. Fill out the form below and
          our team will get back to you as soon as possible.
        </p>
      </div>
      <form
        // action={formAction}
        className="md:max-w-5xl md:mx-auto mx-10 flex flex-col md:text-xl text-md"
      >
        <label htmlFor="name">Your Name</label>
        <input
          name="name"
          placeholder="Chris Thompson"
          type="text"
          required
          className="border rounded-2xl px-3 py-2 text-black bg-white mb-5"
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          placeholder="youremail@example.com"
          name="email"
          required
          className="border rounded-2xl px-3 py-2 text-black bg-white mb-5"
        />

        <label htmlFor="subject">What is this about?</label>
        <select
          name="subject"
          className="border rounded-2xl px-3 py-2 text-black bg-white mb-5"
          required
        >
          <option value="general">General Question</option>
          <option value="concern">Concern</option>
          <option value="suggestion">Suggestion</option>
          <option value="support">Support Request</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="message">Your Message</label>
        <textarea
          name="message"
          placeholder="Write your message here..."
          required
          className="border rounded-2xl px-3 py-2 md:min-h-50 min-h-30 text-black bg-white md:mb-20 mb-10"
        />
        {/* <ButtonSecondary className={`text-black`} disabled={isPending}> */}
        <ButtonSecondary className={`text-black`} disabled={true}>
          {/* {isPending ? (
            <Spinner className="size-7 text-red-600 mx-auto" />
          ) : (
            "Submit"
          )} */}
          Submit
        </ButtonSecondary>
      </form>
    </div>
  );
}
