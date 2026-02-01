import { motion, LayoutGroup } from "framer-motion";
import { useState } from "react";

const tabs = ["Overview", "Cases", "Documents", "Settings", "Members"];

export default function AnimatedNav() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [fade, setFade] = useState(false);
  return (
    <LayoutGroup>
      <div
        onMouseEnter={() => setFade(false)}
        onMouseLeave={() => setFade(true)}
        className="w-max h-max  flex flex-wrap gap-2 justify-center border border-white rounded-full p-4"
      >
        {tabs.map((tab) => (
          <button
            onMouseEnter={() => setActiveTab(tab)}
            key={tab}
            className="relative p-6 text-lg font-medium text-white"
          >
            {tab}

            {activeTab === tab && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: fade ? 0 : 1 }}
                layoutId="active"
                transition={{
                  layout: { type: "spring", stiffness: 400, damping: 30 },
                }}
                className="absolute inset-0 -z-10 rounded-full bg-white/30"
              />
            )}
          </button>
        ))}
      </div>
    </LayoutGroup>
  );
}
