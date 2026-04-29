import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { LINKS } from '@/lib/constants';
import { Calendar, ArrowRight } from 'lucide-react';

export function StickyBottomCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-[0_-4px_30px_rgba(0,0,0,0.08)]"
        >
          {/* Desktop */}
          <div className="hidden sm:flex max-w-6xl mx-auto px-6 h-[68px] items-center justify-between">
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-[#2478FF]" />
              <span className="text-sm font-semibold text-gray-900">5월 25일 무료 강의</span>
              <span className="text-xs text-gray-400">브랜딩부터 생산, 원가까지</span>
            </div>
            <Button
              asChild
              className="bg-[#2478FF] hover:bg-[#1A5FD6] text-white rounded-xl h-11 px-7 text-sm font-bold shadow-lg shadow-[#2478FF]/20 cursor-pointer"
            >
              <a href={LINKS.openChat} data-meta-lead="free-class">
                오픈채팅방 입장하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          {/* Mobile */}
          <div className="sm:hidden px-4 py-3 space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <Calendar className="w-3.5 h-3.5 text-[#2478FF]" />
              <span className="font-medium">5월 25일 무료 강의</span>
            </div>
            <Button
              asChild
              className="w-full bg-[#2478FF] hover:bg-[#1A5FD6] text-white rounded-xl h-[52px] text-[15px] font-bold shadow-lg shadow-[#2478FF]/20 cursor-pointer"
            >
              <a href={LINKS.openChat} data-meta-lead="free-class">
                오픈채팅방 입장하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
