import { FadeUp } from '@/components/animations';
import { User, Lock } from 'lucide-react';

export function InstructorSection() {
  return (
    <section id="instructor" className="py-20 sm:py-28 px-5 sm:px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <FadeUp>
          <h2 className="text-[26px] sm:text-[36px] font-extrabold text-gray-900 text-center leading-tight mb-12 sm:mb-16 tracking-tight">
            강사 소개
          </h2>
        </FadeUp>

        {/* 강사 카드 목록 */}
        <div className="space-y-6">
          {/* 강사 1 - 최성락 */}
          <FadeUp delay={0.15}>
            <div className="bg-white border border-gray-100 rounded-3xl p-7 sm:p-10 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                    <User className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">최성락</h3>
                    <span className="text-xs font-medium text-[#2478FF] bg-[#2478FF]/8 px-3 py-1 rounded-full">
                      패딧(faddit) 대표
                    </span>
                  </div>

                  <div className="space-y-4 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                    <p>
                      패션 브랜드를 직접 운영했지만, 구조 없이 시작해 실패를 경험했습니다.
                      그 과정에서 왜 브랜드가 망하는지, 무엇이 잘못됐는지, 어떻게 바꿔야 하는지를 실제로 겪으며 깨닫게 되었습니다.
                    </p>
                    <p>
                      현재는 패션 디자인 에디터 <span className="font-semibold text-gray-900">패딧(faddit)</span>을 운영하며,
                      브랜딩, 생산, 원가, 운영을 하나의 구조로 연결하는 방법을 만들고 있습니다.
                    </p>
                    <p>
                      단순한 이론이 아니라 <span className="font-semibold text-gray-900">실패에서 얻은 인사이트</span>와 실제 운영에서 검증된 구조를 바탕으로
                      패션 브랜드가 지속적으로 성장할 수 있는 방향을 제시합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* 강사 2 - 연매출 30억 브랜드 대표 (Coming Soon) */}
          <FadeUp delay={0.25}>
            <div className="relative bg-white border border-gray-100 rounded-3xl p-7 sm:p-10 shadow-sm overflow-hidden">
              {/* Coming Soon 오버레이 */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full">
                  <Lock className="w-3 h-3" />
                  Coming Soon
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                {/* Avatar - 블러 처리 */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center relative">
                    <User className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 blur-[2px]" />
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] rounded-2xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-400 tracking-widest">? ? ?</h3>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                      연매출 30억 브랜드 대표
                    </span>
                  </div>

                  <div className="space-y-3 text-[14px] sm:text-[15px] text-gray-400 leading-relaxed">
                    <p>
                      실제 연매출 <span className="font-semibold text-gray-500">30억 규모</span>의 패션 브랜드를 운영하고 있는 현직 대표가 합류합니다.
                    </p>
                    <p>
                      브랜드 론칭부터 스케일업까지, 매출을 만드는 구조와 운영 전략을 직접 공유할 예정입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* 강사 3 - SNS 마케팅 강사 (Coming Soon) */}
          <FadeUp delay={0.35}>
            <div className="relative bg-white border border-gray-100 rounded-3xl p-7 sm:p-10 shadow-sm overflow-hidden">
              {/* Coming Soon 오버레이 */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full">
                  <Lock className="w-3 h-3" />
                  Coming Soon
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                {/* Avatar - 블러 처리 */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center relative">
                    <User className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 blur-[2px]" />
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] rounded-2xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-400 tracking-widest">? ? ?</h3>
                    <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                      SNS 마케팅 전문가
                    </span>
                  </div>

                  <div className="space-y-3 text-[14px] sm:text-[15px] text-gray-400 leading-relaxed">
                    <p>
                      SNS 콘텐츠 누적 <span className="font-semibold text-gray-500">1억 조회수</span>를 달성한 마케팅 전문가가 합류합니다.
                    </p>
                    <p>
                      패션 브랜드에 최적화된 SNS 전략과 콘텐츠 마케팅의 핵심을 알려드릴 예정입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
