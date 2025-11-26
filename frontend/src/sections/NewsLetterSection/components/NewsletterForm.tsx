export const NewsletterForm = () => {
  return (
    <form className="box-border caret-transparent max-w-[500px] mx-auto">
      <input
        type="hidden"
        name="form_type"
        value="customer"
        className="bg-transparent box-border caret-transparent hidden text-start p-0"
      />
      <input
        type="hidden"
        name="utf8"
        value="✓"
        className="bg-transparent box-border caret-transparent hidden text-start p-0"
      />
      <input
        type="hidden"
        name="contact[tags]"
        value="email_from_website"
        className="bg-transparent box-border caret-transparent hidden text-start p-0"
      />
      <div className="box-border caret-transparent gap-x-2.5 flex flex-col flex-wrap justify-center gap-y-2.5 md:flex-row">
        <input
          type="email"
          name="contact[email]"
          value=""
          placeholder="Email"
          aria-label="Email"
          className="box-border caret-transparent block basis-auto grow-0 shrink-0 h-[50px] leading-[normal] text-start w-full border border-zinc-300 px-2.5 py-0 rounded-bl rounded-br rounded-tl rounded-tr border-solid md:basis-[300px] md:grow md:shrink md:h-auto md:w-auto md:p-4"
        />
        <button
          type="submit"
          aria-label="구독"
          className="text-white bg-neutral-800 caret-transparent block shrink-0 h-[50px] tracking-[0.5px] leading-[normal] w-full px-[30px] py-0 rounded-bl rounded-br rounded-tl rounded-tr md:h-auto md:w-auto md:py-4 hover:shadow-[rgba(0,0,0,0.15)_0px_4px_12px_0px]"
        >
          구독
        </button>
      </div>
    </form>
  );
};
