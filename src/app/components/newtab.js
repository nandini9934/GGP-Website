// components/TabWithNewTag.jsx

import React from "react";
import { motion } from "framer-motion";

const TabWithNewTag = ({ label, isNew, classNames }) => {
  return (
    <div className="relative inline-flex items-center space-x-2 cursor-pointer group">
      <span
        className={
          classNames ? classNames : "text-base font-medium text-gray-800"
        }
      >
        {label}
      </span>

      {isNew && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="text-xs bg-red-500 text-white px-2 mb-4 rounded-full shadow-md animate-pulse"
        >
          New
        </motion.span>
      )}
    </div>
  );
};

export default TabWithNewTag;
