import { FadeUp } from '@/components/animations';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb } from 'lucide-react';

const steps = [
  { label: '브랜딩', color: '#2478FF' },
  { label: '마케팅', color: '#4A93FF' },
  { label: '생산', color: '#2478FF' },
  { label: '원가', color: '#4A93FF' },
  { label: '정부지원사업', color: '#2478FF' },
];

function Chip({ step, delay }: { step: { label: string; color: string }; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      className="flex-1"
    >
      <div className="relative bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4 text-center hover:bg-white/[0.1] transition-colors w-full">
        <span className="text-sm sm:text-[15px] font-semibold text-white">
          {step.label}
        </span>
        <div
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
          style={{ backgroundColor: step.color }}
        />
      </div>
    </motion.div>
  );
}

export function InsightSection() {
  const ref = useRef(null);

  return (
    <section className="py-20 sm:py-28 px-5 sm:px-6 bg-gray-950 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2478FF]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2478FF]/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <FadeUp>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#2478FF]/15 rounded-xl flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-[#2478FF]" />
            </div>
          </div>
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-center leading-tight mb-3 tracking-tight">
            문제는{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2478FF] to-[#4A93FF]">
              디자인이 아닙니다
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-center font-semibold text-gray-300 mb-8">
            브랜드를 <span className="text-[#2478FF]">감</span>으로 만들고 있었습니다.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-center text-[15px] sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
            브랜드는 예쁜 옷 하나로 성장하지 않습니다.
            <br />
            컨셉, 콘텐츠, 판매, 생산, 원가, 지원사업이{' '}
            <span className="text-white font-medium">하나의 흐름</span>으로 연결되어야 합니다.
          </p>
        </FadeUp>

        {/* Process Flow — 2 / 2 / 1 */}
        <div className="flex flex-col gap-3 w-full">
          {/* Row 1: 브랜딩 · 마케팅 */}
          <div className="flex gap-3 w-full">
            <Chip step={steps[0]} delay={0.4} />
            <Chip step={steps[1]} delay={0.5} />
          </div>
          {/* Row 2: 생산 · 원가 */}
          <div className="flex gap-3 w-full">
            <Chip step={steps[2]} delay={0.6} />
            <Chip step={steps[3]} delay={0.7} />
          </div>
          {/* Row 3: 정부지원사업 */}
          <div className="flex w-full">
            <Chip step={steps[4]} delay={0.8} />
          </div>
        </div>
      </div>
    </section>
  );
}
