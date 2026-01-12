// SeraUIComponent - CoderProfile

import React from "react";
import { coderProfileData } from "../../data/coderProfileData";
export default function CoderProfile() {
  return (
    <div className="flex items-center justify-center">
      <CoderProfileCard />
    </div>
  );
}

const CoderProfileCard = () => {
  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg">
      {/* CoderProfileHeader */}
      <div className="bg-(--bg-secondary) px-4 lg:px-8 py-5 flex justify-between items-center">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-xs text-(--accent-primary)">profile.js</div>
      </div>

      {/* CoderProfileBody */}
      <div className="overflow-hidden border-t-2 border-white/10 px-4 lg:px-8 py-4 lg:py-8 relative">
        <div className="absolute -top-24 -left-24 w-56 h-56 bg-(--accent-primary) rounded-full opacity-10 filter blur-3xl"></div>
        <div className="absolute -right-24 w-56 h-56 bg-(--accent-primary) rounded-full opacity-10 filter blur-3xl"></div>

        <div className="relative flex">
          <code className="text-xs lg:text-base w-full">
            <div>
              <span className="mr-2 text-red-500">const</span>
              <span className="mr-2 text-green-600">profile</span>
              <span className="mr-2 text-zinc-600">=</span>
              <span className="text-zinc-600">{"{"}</span>
            </div>
            <div className="pl-6">
              <span className="text-orange-400">name:</span>
              <span className="text-zinc-600">&#39;</span>
              <span className="text-green-600">{coderProfileData.name}</span>
              <span className="text-zinc-600">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-orange-400">age:</span>
              <span className="text-zinc-600">&#39;</span>
              <span className="text-green-600">{coderProfileData.age}</span>
              <span className="text-zinc-600">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-orange-400">role:</span>
              <span className="text-zinc-600">&#39;</span>
              <span className="text-green-600">{coderProfileData.role}</span>
              <span className="text-zinc-600">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-orange-400">seniority:</span>
              <span className="text-zinc-600">&#39;</span>
              <span className="text-green-600">
                {coderProfileData.seniority}
              </span>
              <span className="text-zinc-600">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-orange-400">nationality:</span>
              <span className="text-zinc-600">&#39;</span>
              <span className="text-green-600">
                {coderProfileData.nationality}
              </span>
              <span className="text-zinc-600">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-orange-400">location:</span>
              <span className="text-zinc-600">&#39;</span>
              <span className="text-green-600">
                {coderProfileData.location}
              </span>
              <span className="text-zinc-600">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-orange-400">skills:</span>
              <span className="text-zinc-600">{"["}</span>
              <div className="pl-6 flex flex-wrap">
                {coderProfileData.skills.map((skill, index) => (
                  <span key={skill} className="mr-1">
                    <span className="text-zinc-600">&#39;</span>
                    <span className="text-green-600">{skill}</span>
                    <span className="text-zinc-600">&#39;</span>
                    {index < coderProfileData.skills.length - 1 && (
                      <span className="text-zinc-600">, </span>
                    )}
                  </span>
                ))}
              </div>
              <span className="text-zinc-600">{"],"}</span>
            </div>
            <div className="pl-6">
              <span className="text-orange-400">freelance:</span>
              <span className="text-zinc-600">&#39;</span>
              <span className="text-green-600">
                {coderProfileData.freelance}
              </span>
              <span className="text-zinc-600">&#39;,</span>
            </div>
            <div>
              <span className="text-zinc-600">{"};"}</span>
            </div>
          </code>
        </div>
      </div>

      {/* CoderProfileFooter */}
      <div className="px-4 lg:px-8 pb-4 mt-4 border-t border-white/10 bg-(--bg-secondary) pt-3 text-xs text-(--accent-primary) flex justify-center items-center">
        <span>JavaScript</span>
      </div>
    </div>
  );
};
