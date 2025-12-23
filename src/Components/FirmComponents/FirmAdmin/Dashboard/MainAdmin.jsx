"use client";

import React from "react";
import Stats from "./Stats";
import QAB from "./QAB";

const MainAdmin = ({ slug }) => {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <main className="flex-1 px-4 md:px-8 py-6">
          <Stats />
          <QAB slug={slug} />
          <div className="text-center text-xs text-gray-400 mt-6">
            Made with ❤️ for local businesses
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainAdmin;
