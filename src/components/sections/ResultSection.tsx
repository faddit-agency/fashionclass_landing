import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FadeUp, StaggerContainer, staggerChild } from '@/components/animations';
import { TrendingUp, Eye, Award } from 'lucide-react';

const results = [
  {
    icon: TrendingUp,
    label: '월 매출',
    before: '100만원',
    after: '5,000만원',
    accent: 'from-[#2478FF] to-[#4A93FF]',
  },
  {
    icon: Eye,
    label: 'SNS 조회수',
    before: '300회',
    after: '7,000만회',
    accent: 'from-[#4A93FF] to-[#7BB3FF]',
  },
  {
    icon: Award,
    label: '정부지원사업 지원금',
    before: '',
    after: '15억원',
    accent: 'from-[#2478FF] to-[#4A93FF]',
  },
];

function AnimatedNumber({ value, isInView }: { value: string; isInView: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 100 }}
      className="inline-block"
    >
      {value}
    </motion.span>
  );
}

export function ResultSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 sm:py-28 px-5 sm:px-6 bg-gray-50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-gray-900 text-center leading-tight mb-4 tracking-tight">
            구조가 바뀌면{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2478FF] to-[#4A93FF]">
              결과도 바뀝니다
            </span>
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-12 sm:mt-16">
          {results.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={staggerChild}
                className="relative bg-white border border-gray-100 rounded-2xl p-7 sm:p-8 text-center hover:shadow-lg hover:shadow-[#2478FF]/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#2478FF]/8 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-[#2478FF]" />
                </div>
                <p className="text-sm font-medium text-gray-500 mb-3">{item.label}</p>
                {item.before && (
                  <p className="text-sm text-gray-400 mb-1.5">
                    <span className="line-through">{item.before}</span>
                    <span className="mx-2">→</span>
                  </p>
                )}
                <p className={`text-[32px] sm:text-[38px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${item.accent} tracking-tight`}>
                  <AnimatedNumber value={item.after} isInView={isInView} />
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>

        <FadeUp delay={0.3}>
          <div className="mt-10 sm:mt-14 text-center">
            <p className="text-[13px] sm:text-sm text-gray-400 bg-gray-100 inline-block px-5 py-3 rounded-xl leading-relaxed">
              ※ 결과를 보장하는 것이 아니라, 실제 경험을 바탕으로 성장에 필요한 구조를 공유합니다.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
