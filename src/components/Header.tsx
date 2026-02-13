import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="glass-header sticky top-0 z-50 w-full">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
            <Phone className="h-5 w-5 text-cyan-400" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-white/95">
              امدادات العطاء
            </h1>
            <span className="text-xs text-white/50">دليل التحويلات</span>
          </div>
        </div>
        
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
          <img
            src="/brand/logo.png"
            alt="شعار امدادات العطاء"
            className="h-8 w-8 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </header>
  );
}
