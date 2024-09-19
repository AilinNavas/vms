import Accordion from "./general/Accordion";

const Faqs = ({ title, description, items }) => {
  return (
    <section className="bg-primary py-10 md:py-16 ">
      <div className='max-w-7xl px-4 mx-auto lg:px-0 pb-16'>
        <h2 className="text-secondary mb-4 font-arapey text-3xl md:text-5xl">{title}</h2>
        <p className="font-assistant text-gray pb-4">{description}</p>
        <Accordion items={items} />
        {/* <p className="font-assistant text-secondary my-8 text-lg lg:text-xl">Encontrá más respuestas en nuestro blog.</p>
        <button className="rounded-full px-6 py-2 bg-secondary text-primary font-assistant text-lg font-semibold z-0">Blog
          <span className="ml-2">&rarr;</span>
        </button> */}

      </div>
    </section >
  )
}

export default Faqs