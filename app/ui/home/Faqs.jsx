import Accordion from "./general/Accordion";

const Faqs = ({ title, description, items, id }) => {
  return (
    <section id={id} className="bg-primary py-16">
      <div className='max-w-7xl px-4 mx-auto lg:px-0'>
        <h2 className="text-secondary mb-4 font-arapey text-3xl md:text-5xl">{title}</h2>
        <p className="font-assistant text-gray pb-4">{description}</p>
        <Accordion items={items} />
        <div className='text-center mt-10'>
        <a href={'https://walink.co/82c00b'} target='_blank'  rel="noopener noreferrer" ><button className="rounded-full px-6 py-2 bg-secondary border-2 border-secondary text-primary font-assistant text-lg font-semibold z-0 hover:bg-transparent hover:text-secondary ease-in duration-300">Obtener una asesoria personalizada</button></a>
        </div>

      </div>
    </section >
  )
}

export default Faqs