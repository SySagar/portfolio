import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Mail, Settings, User, Bell } from "lucide-react";

type IconType =
    | typeof Home
    | typeof Mail
    | typeof Settings
    | typeof User
    | typeof Bell;

interface DockItemProps {
    icon: IconType;
    label: string;
    isHovered: boolean;
    index: number;
    hoveredIndex: number | null;
}

const DockItem: React.FC<DockItemProps> = ({
    icon: Icon,
    label,
    isHovered,
    index,
    hoveredIndex,
}) => {
    const dist = Math.abs(index - (hoveredIndex ?? -1));
    const shouldHover = dist <= 2 && hoveredIndex !== null;

    const scaleFactor = hoveredIndex !== null ? 1.1 - dist * 0.1 : 1;

    return (
        <motion.div
            className="flex flex-col items-center justify-center"
            animate={{
                y: shouldHover ? -10 / (dist || 0.5) : 0,
                scale: scaleFactor,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <motion.div
                className="relative p-2 bg-white rounded-full shadow-lg"
                whileHover={{ scale: 1.25 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <Icon className="w-6 h-6 text-gray-800" />
                {isHovered && (
                    <motion.div
                        className="absolute bottom-full left-0 transform  bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap"
                        initial={{ opacity: 0, y: 10, scale: 1 }}
                        animate={{ opacity: 1, y: -5, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                    >
                        {label}
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default function FloatingDock() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const icons: { icon: IconType; label: string }[] = [
        { icon: Home, label: "Home" },
        { icon: Mail, label: "Mail" },
        { icon: Settings, label: "Settings" },
        { icon: User, label: "Profile" },
        { icon: Bell, label: "Notifications" },
    ];

    return (
        <div className="flex justify-center items-end pt-28 pb-8">
            <motion.div
                className="flex space-x-4 bg-gray-200 bg-opacity-80 px-6 py-3 rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onHoverEnd={() => setHoveredIndex(null)}
            >
                {icons.map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        className="cursor-pointer"
                    >
                        <DockItem
                            icon={item.icon}
                            label={item.label}
                            isHovered={hoveredIndex === index}
                            index={index}
                            hoveredIndex={hoveredIndex}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
