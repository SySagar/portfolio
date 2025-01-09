import { motion } from "framer-motion";

export default function FileHover() {
  const images = [
    "https://images.unsplash.com/photo-1712652056542-58ca6baac1d3?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1721132447246-5d33f3008b05?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1673297180075-411992cad941?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1723496954926-d6b4c06d9276?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <main className="flex flex-col items-center gap-8 py-16 ">
      <div className="flex items-center justify-center">
        <motion.div
          className="relative w-64 h-64 cursor-pointer"
          whileHover="hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 105 80"
            className="w-full h-full"
          >
            <motion.path
              d="M0 10 L30 10 L40 0 L100 0 L100 80 L0 80 Z"
              fill="#4c95d7"
              stroke="#6384d0"
              strokeWidth="2"
              initial={{ d: "M0 10 L30 10 L40 0 L100 0 L100 80 L0 80 Z" }}
              variants={{
                hover: { d: "M0 15 L30 15 L40 5 L100 5 L100 80 L0 80 Z" },
              }}
            />
          </svg>

          <motion.p
            initial={{ y: 0 }}
            variants={{
              hover: {
                y: 20,
              },
            }}
            className="z-10 absolute flex flex-col bottom-36 left-0 ml-5 transform -translate-x-1/2 text-lg font-normal text-xl text-white"
          >
            My Images
            <span className="text-xs">140 images</span>
          </motion.p>

          <motion.p className="absolute flex flex-col bottom-10 left-0 ml-24 transform -translate-x-1/2 text-lg font-normal text-xs text-gray-200">
            Last Edited Time: 4 October, 2024
          </motion.p>

          {images.map((imageUrl, index) => (
            <motion.div
              key={index}
              className="absolute bottom-8 -z-10 left-0 w-[200px] h-[200px] ml-5  border-4 rounded-lg border-white shadow-md rounded-xl transform -translate-x-1/2"
              style={{
                originX: 0.5,
                originY: 1,
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              initial={{ rotate: 0, y: -20 }}
              variants={{
                hover: {
                  rotate: (images.length - index + 1) * 4,
                  y: -60 - (images.length - index * 3) * 8,
                  transition: { duration: 0.3, delay: index * 0.05 },
                },
              }}
            />
          ))}
        </motion.div>
      </div>
    </main>
  );
}

