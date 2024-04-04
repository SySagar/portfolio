import style from './mover.module.css';
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';

export default function DevopsMover({
  startX = 10,
  startY = 10,
  endX = 50,
  endY = 50,
  type = "",
  textContent= "hello",
  duration = 2,
}) {
  const [isForward, setIsForward] = useState(true);

  const variants = {
    forward: {
      x: startX,
      y: startY,
      transition: {
        duration: duration,
      },
    },
    backward: {
      x: endX,
      y: endY,
      transition: {
        duration: duration,
      },
    },
  };

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsForward(!isForward);
    }, 1000);
  };

  const headStyle = `border-b-[20px] border-[#9370DB]`
  const lineStyle = `bg-[#9370DB]`

  return (
    <div >
      <motion.div
        animate={isForward ? "forward" : "backward"}
        variants={variants}
        onAnimationComplete={handleAnimationComplete}
        transition={{ repeat: Infinity, repeatType: "reverse" }}
        className={
            cn(
                style.line,
                lineStyle,
            )
        }
      >
        <div className={cn(
            style.head,
            headStyle,
        )}></div>
        <p className={style.text}>{textContent}</p>
      </motion.div>
    </div>
  );
}
