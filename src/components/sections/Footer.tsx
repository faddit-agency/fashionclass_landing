export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5 text-gray-500 py-10 sm:py-14 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.svg" alt="패클스" className="h-5 brightness-0 invert opacity-60" />
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs">
            <a href="#" className="hover:text-gray-300 transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-300 transition-colors">이용약관</a>
          </div>
        </div>

        {/* Business Info */}
        <div className="text-xs text-gray-600 leading-relaxed space-y-1">
          <p>패클스 | 대표: 최성락</p>
          <p>사업자등록번호: 000-00-00000</p>
          <p>이메일: contact@packless.kr</p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-xs text-gray-600">
            © 2025 패클스(Packless). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
