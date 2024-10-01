'use client'
import React, { useEffect } from 'react'
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import { motion } from 'framer-motion';
import Separador from '@/app/ui/components/separador';
import Image from 'next/image';
import Gallery from '@/app/ui/servicos/gallery';
import { SectionProps } from '@/app/lib/types';
import { servicosDetalhes } from '@/app/lib/data';

interface ParamsProps {
  params: {
    name: string
  }
}

const Page = ({ params }: ParamsProps) => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.3,
      },
    },
  };

  const itemY = {
    hidden: { y: '200%', opacity: 0 },
    visible: { y: ['100%', 0], opacity: 1, transition: { duration: 0.5 } },
  };

  const section = servicosDetalhes.find((servico) => servico.id === params.name);

  console.log(servicosDetalhes)
 

  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      Thumbs: {
        type: "modern",
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, [params.name]);

  if (!section) {
    return <h1 className='py-32 text-center'>Section not found</h1>;
  }

  return (
    <motion.main
      className='flex flex-col w-full justify-center items-center pb-32'
      key={section.id}
    >
      <motion.div
        className='bg-blue-default flex flex-col w-full min-h-[100vh] items-center relative'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className='w-maxW max-w-hd grande:max-w-grande absolute top-[calc(45vh-58px)] md:top-[calc(55vh-68px)] overflow-hidden'
          variants={itemY}
        >
          <motion.h2 className='text-[white] w-fit text-wrap bgBlur px-2 md:px-4' variants={itemY}>{section.titulo}</motion.h2>
        </motion.div>

        <Image
          src={''}
          alt={section.titulo}
          className='w-full h-[45vh] md:h-[55vh] object-cover cursor-pointer'
          fill
        />
        <div className='w-maxW max-w-hd grande:max-w-grande mt-3 md:mt-6'>
          <motion.p className='max-w-[1000px] text-white-contraste text-lg sm:text-2xl' variants={itemY}>{section.descricao}</motion.p>
        </div>
      </motion.div>

      <div className='w-maxW max-w-hd grande:max-w-grande mt-16'>
        <h3 className=' mb-4'>Galeria</h3>
        <Separador />


        {/* {id === 'circo' && (
          <>
            <div className='flex flex-col gap-4 mt-16'>
              <h3 className='text-red-default'>Veja os modelos de Circo</h3>
              <Separador />
            </div>
            <SliderOtherServices section={'circo'} sectionsData={sectionDataLona} />
          </>
        )}

      </div>
      <div className='w-full bg-blue-default flex justify-center py-16 mt-16'>
        <div className='w-maxW max-w-hd grande:max-w-grande'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-[white]'>Veja outros serviços</h3>
            <Separador />
          </div>
          <SliderOtherServices section={'servicos'} sectionsData={sectionsData} />
        </div> */}

      </div>
    </motion.main>
  )
}

export default Page