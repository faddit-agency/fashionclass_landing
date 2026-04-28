import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, staggerChild } from '@/components/animations';
import { Sparkles, Megaphone, Factory, Calculator, Building2 } from 'lucide-react';

const solutions = [
  {
    icon: Sparkles,
    title: '브랜딩 / 컨셉',
    desc: '어떤 고객에게 어떤 이유로 선택될지 정리합니다.',
    num: '01',
  },
  {
    icon: Megaphone,
    title: '마케팅 / 판매',
    desc: '광고비를 쓰기 전, 팔리는 메시지와 콘텐츠 구조를 만듭니다.',
    num: '02',
  },
  {
    icon: Factory,
    title: '생산 / 작업지시서',
    desc: '주먹구구 생산이 아니라 반복 가능한 제작 프로세스를 만듭니다.',
    num: '03',
  },
  {
    icon: Calculator,
    title: '원가 구조',
    desc: '팔수록 남는 구조인지, 손해 보는 구조인지 계산합니다.',
    num: '04',
  },
  {
    icon: Building2,
    title: '정부지원사업',
    desc: '받을 수 있는 지원사업을 놓치지 않도록 준비합니다.',
    num: '05',
  },
];

export function SolutionSection() {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-gray-900 text-center leading-tight mb-4 tracking-tight">
            그래서 필요한 건,{' '}
            <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2478FF] to-[#4A93FF]">
              감이 아닌 구조
            </span>
            입니다
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-12 sm:mt-16">
          {solutions.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={staggerChild}
                className={`group relative bg-white border border-gray-150 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-[#2478FF]/5 hover:border-[#2478FF]/20 ${
                  i >= 3 ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Number */}
                <span className="absolute top-5 right-5 text-xs font-bold text-gray-200 tracking-wider">
                  {item.num}
                </span>

                <div className="w-12 h-12 bg-[#2478FF]/8 group-hover:bg-[#2478FF]/12 rounded-2xl flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-6 h-6 text-[#2478FF]" />
                </div>

                <h3 className="text-[17px] sm:text-lg font-bold text-gray-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
