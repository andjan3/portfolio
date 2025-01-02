import { motion } from "framer-motion";

export const AnimatedHeroText = () => {
  const textContent = [
    {
      text: "Hi I am",
      className: "font-text  lg:mt-0 text-center lg:text-start",
    },
    {
      text: "Andréa Jandergren",
      className:
        "text-[#FF8233] font-text mb-4 lg:mt-0 lg:mb-0 text-center lg:text-start",
    },
    {
      text: "Front end developer",
      className:
        "big-heading-hero !leading-[60px] lg:!leading-[100px] text-center lg:text-start",
    },
    {
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nemo fugit est deserunt, velit alias voluptas, libero explicabo repellendus sunt excepturi. Esse at labore non?",
      className: "mt-4 mb-4 lg:mt-0 lg:mb-0 text-center lg:text-start",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-[100%]  flex flex-col"
    >
      {textContent.map((item, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.4 }}
          className={item.className}
        >
          {item.text}
        </motion.p>
      ))}
    </motion.div>
  );
};
