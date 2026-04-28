import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, staggerChild } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { LINKS } from '@/lib/constants';
import { trackLead } from '@/lib/tracking';
import {
  Calendar,
  ArrowRight,
  Check,
} from 'lucide-react';

const curriculum = [
  '패션 브랜드가 1년도 못 가는 이유',
  '브랜딩부터 생산까지 연결하는 방법',
  '광고비를 낭비하지 않는 콘텐츠 구조',
  '작업지시서와 생산 프로세스의 중요성',
  '원가 구조를 잡아야 하는 이유',
  '정부지원사업을 준비하는 방법',
];

export function FreeClassSection() {
  return (
    <section id="free-class" className="py-20 sm:py-28 px-5 sm:px-6 bg-gray-950 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#2478FF]/6 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2478FF]/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <FadeUp>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-[#2478FF]/15 text-[#4A93FF] rounded-full px-4 py-2 text-sm font-medium">
              <Calendar className="w-4 h-4" />
              5월 25일 온라인
            </div>
          </div>
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-center leading-tight mb-3 tracking-tight">
            온라인 무료 강의에서
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2478FF] to-[#4A93FF]">
              공개합니다
            </span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="mt-4 text-center">
            <p className="text-[15px] sm:text-base text-gray-400">
              강의명
            </p>
            <p className="text-lg sm:text-xl font-bold text-white mt-2">
              "패션 브랜드, 감이 아닌 구조로 성장하는 방법"
            </p>
          </div>
        </FadeUp>

        {/* Curriculum */}
        <div className="mt-12 sm:mt-16 max-w-2xl mx-auto">
          <FadeUp delay={0.2}>
            <p className="text-sm font-semibold text-[#2478FF] uppercase tracking-wider mb-6 text-center">
              강의에서 다룰 내용
            </p>
          </FadeUp>

          <StaggerContainer className="space-y-3">
            {curriculum.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="flex items-start gap-4 bg-white/[0.04] border border-white/8 rounded-xl px-5 py-4 hover:bg-white/[0.07] transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-[#2478FF]/20 rounded-lg flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#2478FF]" />
                </div>
                <p className="text-[14px] sm:text-[15px] text-gray-300 font-medium leading-snug">
                  {item}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        {/* CTA */}
        <FadeUp delay={0.4}>
          <div className="mt-12 sm:mt-14 text-center">
            <Button
              asChild
              className="bg-[#2478FF] hover:bg-[#1A5FD6] text-white rounded-xl h-[56px] px-10 text-base font-bold shadow-lg shadow-[#2478FF]/25 hover:shadow-[#2478FF]/35 transition-all cursor-pointer"
            >
              <a href={LINKS.openChat} target="_blank" rel="noopener noreferrer" onClick={trackLead}>
                오픈채팅방 입장하기
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
