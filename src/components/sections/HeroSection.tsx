import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LINKS } from '@/lib/constants';
import { ArrowRight, Calendar } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden pt-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2478FF]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2478FF]/30 to-transparent" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center py-20 sm:py-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300">
            <Calendar className="w-4 h-4 text-[#2478FF]" />
            <span>5월 25일 온라인 무료 강의</span>
            <span className="text-[#2478FF] font-medium">→</span>
          </div>
        </motion.div>

        {/* Main Copy */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[28px] sm:text-[40px] md:text-[52px] font-extrabold text-white leading-tight tracking-tight mb-6"
        >
          패션 브랜드,{' '}
          <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2478FF] to-[#4A93FF]">
            대부분 여기서 망합니다
          </span>
        </motion.h1>

        {/* Sub Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-[15px] sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            옷을 못 만들어서가 아닙니다.
            <br />
            브랜딩, 마케팅, 생산, 원가가{' '}
            <span className="text-gray-200 font-medium">구조 없이 움직이기 때문</span>입니다.
          </p>
        </motion.div>

        {/* Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-10"
        >
          <p className="text-[15px] sm:text-base font-semibold bg-gradient-to-r from-[#2478FF] to-[#4A93FF] bg-clip-text text-transparent">
            감이 아닌 구조로, 브랜드 성장을 함께 설계합니다.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8"
        >
          <Button
            asChild
            className="w-full sm:w-auto bg-[#2478FF] hover:bg-[#1A5FD6] text-white rounded-xl h-[52px] px-8 text-[15px] font-semibold shadow-lg shadow-[#2478FF]/20 hover:shadow-[#2478FF]/30 transition-all cursor-pointer"
          >
            <a href={LINKS.freeClass} target="_blank" rel="noopener noreferrer">
              무료 강의 신청하기
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto bg-white/[0.06] backdrop-blur-sm border-white/15 text-white hover:bg-white/10 hover:text-white rounded-xl h-[52px] px-8 text-[15px] font-semibold cursor-pointer"
          >
            <a href={LINKS.openChat} target="_blank" rel="noopener noreferrer">
              오픈채팅방 입장하기
            </a>
          </Button>
        </motion.div>

        {/* Sub info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xs sm:text-sm text-gray-500"
        >
          브랜딩부터 생산, 원가, 정부지원사업까지
        </motion.p>
      </div>
    </section>
  );
}
