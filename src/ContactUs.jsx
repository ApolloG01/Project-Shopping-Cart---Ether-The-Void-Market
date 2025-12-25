function ContactUs() {
  return (
    <div className="px-4 py-20 text-center">
      <h1 className="mb-4 text-4xl font-bold tracking-tighter uppercase">
        Whisper into the Dark
      </h1>
      <p className="mx-auto mb-10 max-w-md text-zinc-500">
        We usually don't answer, but we are always listening.
      </p>

      <form className="mx-auto max-w-md space-y-4">
        <input
          type="text"
          placeholder="Name (optional)"
          className="w-full rounded-sm border border-zinc-800 bg-zinc-900 p-4 focus:border-zinc-500 focus:outline-none"
        />
        <textarea
          placeholder="Your message to the abyss..."
          rows="5"
          className="w-full rounded-sm border border-zinc-800 bg-zinc-900 p-4 focus:border-zinc-500 focus:outline-none"
        ></textarea>
        <button
          type="button"
          className="w-full bg-zinc-100 py-4 font-bold tracking-widest text-black uppercase transition-colors hover:bg-zinc-300"
        >
          Dispatch to Nowhere
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
