import React, {useState, useEffect} from 'react';
// useInView hook
import { useInView } from 'react-intersection-observer'
// import circular
import { CircularProgressbar } from 'react-circular-progressbar';
// react circular styles
import 'react-circular-progressbar/dist/styles.css'
// import motion
import { motion } from 'framer-motion';
// import fade in
import { fadeIn } from '../variants';

const Skills = () => {
  // destructure useInView hook
  const {ref, inView} = useInView({
    threshold: 0.2,
  });

  // Baba piercing tattoo state
  const [babyPiercing, setBabyPiercing] = useState(0);
  // Gyermek Piercing tattoo state
  const [kidPiercing, setKidPiercing] = useState(0);
  // Felnőtt Piercing tattoo state
  const [adultPiercing, setAdultPiercing] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (babyPiercing < 90) {
          setBabyPiercing(babyPiercing + 1);
        }
        if (kidPiercing < 75) {
          setKidPiercing(kidPiercing + 1);
        }
        if (adultPiercing < 95) {
          setAdultPiercing(adultPiercing + 1);
        }
      }, 50);
    } else {
      setBabyPiercing(0)
      setKidPiercing(0)
      setAdultPiercing(0)
    }
  }, [inView, babyPiercing, kidPiercing, adultPiercing])

  // Circular progressbar styles
  const styles = {
    path: {
      stroke: '#111111'
    },
    trail: {
      stroke: '#eeeeee'
    },
    text: {
      fill: '#111111',
      fontSize: '24px',
    },
  };

  return (
    <motion.section
    ref={ref}
    className='section font-primary' 
    variants={fadeIn('up')} 
    initial='hidden' 
    whileInView={'show'}
    viewport={{once: false, amount: 0.1}}
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row justify-between items-center gap-y-12'>
          {/* circular item */}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              value={babyPiercing}
              styles={styles}
              text={`${babyPiercing}%`}
            />
            {/* text  */}
            <div className='uppercase font-light tracking-[1.2px] text-center'> Baba piercing </div>
          </div>
          {/* circular item */}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              value={kidPiercing}
              styles={styles}
              text={`${kidPiercing}%`}
            />
            {/* text  */}
            <div className='uppercase font-light tracking-[1.2px] text-center'> Gyermek piercing </div>
          </div>
          {/* circular item */}
          <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
            <CircularProgressbar
              strokeWidth={1}
              value={adultPiercing}
              styles={styles}
              text={`${adultPiercing}%`}
            />
            {/* text  */}
            <div className='uppercase font-light tracking-[1.2px] text-center'> Felnőtt Piercing </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
