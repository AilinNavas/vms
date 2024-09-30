'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    curtainType: '',
    fabricType: '',
    width: '',
    height: '',
  });

  const fabricOptions = {
    'Cortina tradicional con riel europeo': ['Gasa de Algodón', 'Gasa Hindú', 'Voile de Hilo / Crepe / Crash / Camile / Leonor', 'Tusor Pesado / Tusor Liviano', 'Blackout Juliette / de lino / Melody', 'Necesito asesoramiento'],
    'Cortina tradicional con barral':['Gasa de Algodón', 'Gasa Hindú', 'Voile de Hilo / Crepe / Crash / Camile / Leonor', 'Tusor Pesado / Tusor Liviano', 'Blackout Juliette / de lino / Melody', 'Necesito asesoramiento'],
    'Cortina roller': ['Sunscreen 5%','Sunscreen 4%', 'Sunscreen 1%', 'Blackout Premium', 'Necesito asesoramiento'],
    'Bandas verticales': ['Translúcida', 'Sunscreen 5%','Sunscreen 4%', 'Sunscreen 1%','Blackout Premium', 'Necesito asesoramiento'],
    'Toldos verticales': ['Sunscreen', 'Lona Vinílica', 'PVC Cristal' , 'Necesito acesoramiento'],
    'Necesito asesoramiento': ['']
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Resetea la tela seleccionada si cambia el tipo de cortina
    if (name === 'curtainType') {
      setFormData({ ...formData, [name]: value, fabricType: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hola VMS, quisiera solicitar cotización.
Nombre: ${formData.name}
Tipo de Cortina: ${formData.curtainType}
Tipo de Tela: ${formData.fabricType ? formData.fabricType : 'No especificado'}
Dimensiones de la ventana: ${formData.width ? formData.width + ' metros' : 'No especificado'} x ${formData.height ? formData.height + ' metros' : 'No especificado'}`;

    const whatsappUrl = `https://wa.me/543586011006?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      curtainType: '',
      fabricType: '',
      width: '',
      height: '',
    });
  };

  return (
    <section className='py-16 bg-primary px-4'>
      <div className='max-w-4xl py-16 mx-auto px-4 bg-secondary rounded-lg shadow-lg'>
        <h2 className='text-3xl md:text-5xl font-arapey text-center text-primary pb-6 md:pb-8'>
          Solicitar cotización
        </h2>
        <form onSubmit={handleSubmit} className='font-assistant md:px-16 '>
          <div className=' mb-4'>
            <label className='block text-primary text-xl '>
              Nombre completo
            </label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full p-2 mt-2 rounded-md outline-none '
              placeholder='Luz Diaz'
            />
          </div>
          <div className=' mb-4'>
            <label className='block text-primary text-xl  '>
              Tipo de cortina
            </label>
            <select
              name='curtainType'
              value={formData.curtainType}
              onChange={handleChange}
              required
              className='w-full p-2 mt-2 rounded-md outline-none '
            >
              <option value='' disabled className='font-assistant text-primary'>
                Selecciona el tipo de cortina
              </option>
              {Object.keys(fabricOptions).map((curtainType) => (
                <option key={curtainType} value={curtainType}>
                  {curtainType}
                </option>
              ))}
            </select>
          </div>
          <div className=' mb-4'>
            <label className='block text-primary text-xl '>
              Tipo de tela {formData.curtainType ? '(opcional)' : ''}
            </label>
            <select
              name='fabricType'
              value={formData.fabricType}
              onChange={handleChange}
              className='w-full p-2 mt-2 rounded-md outline-none '
              disabled={!formData.curtainType}
            >
              <option value='' disabled>
                Selecciona el tipo de tela
              </option>
              {formData.curtainType &&
                fabricOptions[formData.curtainType].map((fabric, index) => (
                  <option key={index} value={fabric}>
                    {fabric}
                  </option>
                ))}
            </select>
          </div>
          
          <div className=''>
          <h6 className='text-xl text-primary'>Dimensiones de la ventana</h6>
          <div className='flex space-x-4'>
            <div className='w-1/2'>
              <input
                type='number'
                name='width'
                value={formData.width}
                onChange={handleChange}
                className='w-full p-2 mt-2 rounded-md outline-none '
                placeholder='Ancho  en metros'
              />
            </div>
            <div className='w-1/2'>
              <input
                type='number'
                name='height'
                value={formData.height}
                onChange={handleChange}
                className='w-full p-2 mt-2 rounded-md outline-none '
                placeholder='Alto en metros'
              />
            </div>
          </div>
          </div>
        
          <div className='text-center pt-8'>
            <motion.button
              type='submit'
              className="rounded-full px-6 py-2 bg-primary border-2 border-primary text-secondary font-assistant text-lg font-semibold z-0 hover:bg-transparent hover:text-primary ease-in duration-300"
            >
              Enviar por WhatsApp
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
