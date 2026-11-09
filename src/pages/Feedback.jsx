import { useState } from "react"
import emailjs from "@emailjs/browser"

const initialForm = {
  name: "",
  type: "General feedback",
  message: "",
}

function Feedback() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: "", message: "" })
  const [isSending, setIsSending] = useState(false)

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setStatus({ type: "", message: "" })
  }

  const sendFeedback = async (event) => {
    event.preventDefault()

    if (!form.name.trim() || !form.message.trim()) {
      setStatus({ type: "error", message: "Please complete all required fields." })
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Feedback is not configured yet. Please try again later.",
      })
      return
    }

    setIsSending(true)
    setStatus({ type: "", message: "" })

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name.trim(),
          feedback_type: form.type,
          message: form.message.trim(),
        },
        { publicKey },
      )

      setForm(initialForm)
      setStatus({
        type: "success",
        message: "Thank you! Your feedback has been sent.",
      })
    } catch (error) {
      console.error("Unable to send feedback:", error)
      setStatus({
        type: "error",
        message: "We could not send your feedback. Please try again.",
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl text-green-500">
      <p className="text-2xl">Send Feedback</p>
      <p className="mt-2 text-base text-red-500">
        Found something useful or have an idea? Send me a message.
      </p>

      <form className="mt-6 flex flex-col gap-4" onSubmit={sendFeedback}>
        <div className="flex flex-col">
          
          <label className="flex gap-1 text-lg">
            Your name <span className="text-red-500">*</span>
          </label>

          <input
            className="border border-b-4 border-l-4 border-white bg-black p-2 text-base text-green-500 outline-none focus:border-green-500"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={updateField}
            maxLength={80}
            autoComplete="name"
            required
          />
        
        </div>

        <label className="flex flex-col gap-1 text-lg">
          Feedback type
          <select
            className="border border-b-4 border-l-4 border-white bg-black p-2 text-base text-red-500 outline-none focus:border-green-500"
            name="type"
            value={form.type}
            onChange={updateField}
          >
            <option>General feedback</option>
            <option>Portfolio design</option>
            <option>Project feedback</option>
            <option>Skills or career</option>
            <option>Bug report</option>
          </select>
        </label>

        <label className="flex gap-1 text-lg">
          Your message <span className="text-red-500">*</span>
          
          <span className="self-end text-sm text-white">
            {form.message.length}/2000
          </span>
        </label>

        <textarea
            className="min-h-36 resize-y border border-b-4 border-l-4 border-white bg-black p-2 text-base text-red-500 outline-none focus:border-green-500"
            name="message"
            value={form.message}
            onChange={updateField}
            maxLength={2000}
            required
          />

        <button
          className="w-fit border-2 border-black border-b-6 border-l-6 bg-green-500 px-5 py-2 text-lg text-black hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send feedback"}
        </button>

        {status.message && (
          <p
            className={status.type === "success" ? "text-green-400" : "text-red-400"}
            role="status"
            aria-live="polite"
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  )
}

export default Feedback