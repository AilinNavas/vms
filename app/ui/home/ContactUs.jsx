import Link from "next/link"

const ContactUs = () => {
  return (
    <div id="contacto" className='pb-16 bg-primary font-assistant text-secondary text-lg lg:text-xl'>
      <div className="px-4 max-w-7xl mx-auto">
        <p className="mb-4">En VMS, convertimos tus espacios en obras de arte. La diferencia está a solo un paso. Si es momento de transformar tu hogar o lugar de trabajo con nuestras soluciones de cortinas personalizadas, no esperes más. </p>
        <p className="mb-4">Nuestro equipo está listo para ayudarte a dar el siguiente paso.</p>
        <div className="text-center">
            <button className="rounded-full px-6 py-2 bg-secondary border-2 border-secondary text-primary font-assistant text-lg font-semibold z-0 hover:bg-transparent hover:text-secondary ease-in duration-300">Contactar ahora</button>

        </div>
      </div>
    </div>
  )
}

export default ContactUs