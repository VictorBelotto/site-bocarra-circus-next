import Link  from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
  img : string,
  title : string, 
  description : string, 
  to : string
}

const CardServicos = ({ img, title, description, to } : CardProps) => {
  const container = {
    hidden: {opacity: 1},
    visible: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 2 } },
  };
  return (
    <Link href={to} className={`flex flex-col w-full h-full justify-center cursor-pointer  group  `} >
      <motion.div
        className='flex flex-col w-full h-full'
        variants={container}
        initial="hidden"
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className='w-full aspect-[4/3] overflow-hidden max-h-[220px] lg:max-h-none'
          variants={item}
     
        >
          <Image
            className='w-full h-full transform transition duration-300 group-hover:scale-110 aspect-[4/3] '
            src={img}
            alt={`Imagem ${title}`}
            width={300}
            height={300}
          />
        </motion.div>

        <motion.div className='flex flex-col h-[230px] lg:h-[280px] mb-8' variants={item}>
          <h4 className='text-[white] mt-6 mb-2'>{title}</h4>
          <p className='pr-2 lg:pr-11 text-white-contraste text'>{description}</p>
          <Image className='w-11 justify-self-end mt-auto transition-transform duration-300 ease-in-out transform group-hover:translate-x-5' src='/icons/arrowRed.svg' alt='Arrow' width={44} height={28}/>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default CardServicos