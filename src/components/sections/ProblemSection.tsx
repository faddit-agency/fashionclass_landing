import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, staggerChild } from '@/components/animations';
import { CircleAlert, TrendingDown, Palette, Factory, Calculator, HelpCircle } from 'lucide-react';

const problems = [
  { icon: CircleAlert, text: '옷은 잘 만들었는데 판매가 안 된다' },
  { icon: TrendingDown, text: '광고비만 쓰고 남는 게 없다' },
  { icon: Palette, text: '브랜드 컨셉이 계속 흔들린다' },
  { icon: Factory, text: '생산 과정이 주먹구구다' },
  { icon: Calculator, text: '원가 계산이 정확하지 않다' },
  { icon: HelpCircle, text: '정부지원사업은 어디서부터 해야 할지 모르겠다' },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 sm:py-28 px-5 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-gray-900 text-center leading-tight mb-4 tracking-tight">
            열심히 하는데{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2478FF] to-[#4A93FF]">
              왜 안 팔릴까요?
            </span>
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-12 sm:mt-16">
          {problems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={staggerChild}
                className="group relative bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#2478FF]/20 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#2478FF]/5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#2478FF]/8 group-hover:bg-[#2478FF]/12 rounded-xl flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5 text-[#2478FF]" />
                  </div>
                  <p className="text-[15px] sm:text-base text-gray-700 font-medium leading-snug pt-1.5">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>

        <FadeUp delay={0.3}>
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-block bg-gray-900 text-white rounded-2xl px-6 sm:px-8 py-4 sm:py-5">
              <p className="text-[14px] sm:text-[15px] font-medium leading-relaxed">
                하나라도 해당된다면, 지금 필요한 건<br className="sm:hidden" />{' '}
                더 많은 정보가 아니라{' '}
                <span className="text-[#2478FF] font-bold">'구조'</span>입니다.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
