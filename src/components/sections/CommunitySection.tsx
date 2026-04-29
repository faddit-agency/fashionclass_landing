import { FadeUp } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { LINKS } from '@/lib/constants';
import { MessageCircle, Users, ArrowRight } from 'lucide-react';

export function CommunitySection() {
  return (
    <section id="community" className="py-20 sm:py-28 px-5 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp>
          <div className="w-14 h-14 bg-[#2478FF]/8 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-7 h-7 text-[#2478FF]" />
          </div>
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-gray-900 leading-tight mb-3 tracking-tight">
            혼자 고민하지 마세요
          </h2>
          <p className="text-[15px] sm:text-lg text-gray-500 font-medium">
            같은 고민을 하는 분들과 함께 하나씩 해결해갑니다.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-10 sm:mt-14 bg-gray-50 border border-gray-100 rounded-3xl p-7 sm:p-10 text-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-yellow-900" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-[15px]">패클스 단체톡방</p>
                <p className="text-xs text-gray-400">카카오톡 오픈채팅</p>
              </div>
            </div>

            <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed mb-3">
              패클스 단체톡방은 패션 브랜드를 시작하고 운영하는 과정에서 생기는 고민을 함께 해결하기 위한 공간입니다.
            </p>
            <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
              브랜딩, 마케팅, 생산, 원가, 정부지원사업까지 혼자 막히던 부분들을 함께 풀어갑니다.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-8 sm:mt-10">
            <Button
              asChild
              className="bg-[#2478FF] hover:bg-[#1A5FD6] text-white rounded-xl h-[52px] px-8 text-[15px] font-bold shadow-lg shadow-[#2478FF]/20 hover:shadow-[#2478FF]/30 transition-all cursor-pointer"
            >
              <a href={LINKS.openChat} data-meta-lead="free-class">
                오픈채팅방 입장하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
