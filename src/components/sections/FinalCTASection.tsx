import { FadeUp } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { LINKS } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-6 bg-gray-950 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#2478FF]/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeUp>
          <h2 className="text-[26px] sm:text-[36px] font-extrabold leading-tight mb-4 tracking-tight">
            패션 브랜드,{' '}
            <br className="sm:hidden" />
            이제 혼자{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2478FF] to-[#4A93FF]">
              감으로 하지 마세요
            </span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-[15px] sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto mb-10">
            같은 고민을 하는 사람들과 함께 구조를 만들고,
            <br />
            하나씩 해결해보세요.
          </p>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              asChild
              className="w-full sm:w-auto bg-[#2478FF] hover:bg-[#1A5FD6] text-white rounded-xl h-[56px] px-10 text-base font-bold shadow-lg shadow-[#2478FF]/25 hover:shadow-[#2478FF]/35 transition-all cursor-pointer"
            >
              <a href={LINKS.freeClass} target="_blank" rel="noopener noreferrer">
                무료 강의 신청하기
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto bg-white/[0.06] backdrop-blur-sm border-white/15 text-white hover:bg-white/10 hover:text-white rounded-xl h-[56px] px-10 text-base font-bold cursor-pointer"
            >
              <a href={LINKS.openChat} target="_blank" rel="noopener noreferrer">
                오픈채팅방 입장하기
              </a>
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
