"use client";

import { useEffect, useState } from "react";
import { Terminal, Code, Cpu, Shield, Sparkles } from "lucide-react";

export default function MacbookMockup() {
  const [typedCode, setTypedCode] = useState("");
  const codeSnippet = `// ProDevOpz AI Engineering Cohort
import { AIModel, CloudCluster } from "@prodevopz/core";

export async function optimizeCluster() {
  const cluster = await CloudCluster.connect("aws-us-east-1");
  const ai = new AIModel({ temperature: 0.2 });

  console.log("Analyzing resource configurations...");
  const recommendation = await ai.analyze(cluster.metrics);

  // Apply optimizations in real-time
  await cluster.scale(recommendation.desiredCapacity);
  return { status: "OPTIMIZED", efficiencyBoost: "+45%" };
}

// Cluster Optimization Complete! ✓`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedCode(codeSnippet.slice(0, index));
      index++;
      if (index > codeSnippet.length) {
        setTimeout(() => {
          index = 0;
        }, 3000); // Pause before re-typing
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto py-12 flex justify-center items-center perspective-[1200px] select-none">
      {/* 3D Scene Wrapper */}
      <div className="relative transform-style-3d rotate-x-[12deg] rotate-y-[-18deg] rotate-z-[2deg] hover:rotate-y-[-10deg] hover:rotate-x-[15deg] transition-all duration-700 ease-out flex flex-col items-center">
        
        {/* Ambient Glow behind Laptop */}
        <div className="absolute -top-12 w-72 h-72 bg-gradient-to-r from-accent-orange/20 to-accent-purple/20 rounded-full filter blur-3xl opacity-60 animate-pulse pointer-events-none" />

        {/* MacBook Screen Panel (Lid) */}
        <div className="relative w-[340px] sm:w-[420px] h-[220px] sm:h-[270px] rounded-t-2xl border-4 border-[#1e1e1e] bg-[#0c0c0d] shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.1)] flex flex-col overflow-hidden transform-style-3d origin-bottom translate-z-[1px]">
          
          {/* Screen Camera & Bezel */}
          <div className="w-full h-4 bg-[#111112] flex items-center justify-center relative shrink-0 border-b border-white/[0.03]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#050505] border border-white/5 flex items-center justify-center">
              <div className="w-0.5 h-0.5 rounded-full bg-[#1e88e5] opacity-80" />
            </div>
          </div>

          {/* Code IDE Mockup Screen */}
          <div className="flex-grow flex flex-col text-left text-[9px] sm:text-[10px] font-mono leading-relaxed bg-[#050506] p-3 text-[#c9d1d9] relative select-none">
            
            {/* Header / Tabs bar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                <div className="flex gap-2 ml-4">
                  <span className="text-[8px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white font-semibold flex items-center gap-1">
                    <Code className="w-2.5 h-2.5 text-accent-orange" /> optimize.ts
                  </span>
                </div>
              </div>
              <span className="text-[7px] text-foreground/30 uppercase tracking-widest font-bold">
                IDE Editor
              </span>
            </div>

            {/* Code typing viewport */}
            <div className="flex-grow overflow-hidden relative">
              <pre className="whitespace-pre-wrap text-foreground/80 leading-normal scrollbar-none">
                <code>
                  {typedCode}
                  <span className="w-1 h-3.5 bg-accent-orange inline-block ml-0.5 animate-pulse" />
                </code>
              </pre>
            </div>

            {/* Bottom mini-terminal status */}
            <div className="border-t border-white/5 pt-2 mt-2 flex justify-between items-center text-[7px] sm:text-[8px] text-foreground/40 shrink-0">
              <span className="flex items-center gap-1">
                <Terminal className="w-3 h-3 text-emerald-400" /> main* • node.js
              </span>
              <span className="text-accent-purple font-bold">Ln 14, Col 24</span>
            </div>

            {/* Glossy screen glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none" />
          </div>
        </div>

        {/* MacBook Body / Keyboard base */}
        <div className="relative w-[380px] sm:w-[470px] h-[10px] sm:h-[12px] bg-[#222224] border-t border-white/10 rounded-b-xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform-style-3d origin-top translate-z-[-1px] flex flex-col justify-end">
          
          {/* Key line/indent */}
          <div className="absolute inset-x-4 top-0 h-[2px] bg-[#0c0c0d] rounded-b opacity-80" />
          
          {/* Trackpad indentation */}
          <div className="w-20 sm:w-28 h-[4px] bg-[#161617] rounded-t border-t border-white/5 mx-auto" />
        </div>

        {/* Base shadow reflection on floor */}
        <div className="w-[340px] sm:w-[410px] h-[15px] sm:h-[20px] bg-black/55 rounded-full filter blur-md mt-1 scale-x-[1.05] opacity-90" />
      </div>
    </div>
  );
}
