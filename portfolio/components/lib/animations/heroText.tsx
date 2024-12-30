import { motion } from "framer-motion";

export const AnimatedHeroText = () => {
  const textContent = [
    { text: "Hi I am", className: "font-text" },
    { text: "Andréa Jandergren", className: "text-[#FF8233] font-text" },
    { text: "Front end developer", className: "big-heading-hero" },
    {
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nemo fugit est deserunt, velit alias voluptas, libero explicabo repellendus sunt excepturi. Esse at labore non?",
      className: "",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-[100%] flex flex-col"
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
