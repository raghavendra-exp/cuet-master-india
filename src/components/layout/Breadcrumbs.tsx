import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  tab?: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  setCurrentTab: (tab: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, setCurrentTab }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav className="flex items-center text-xs text-slate-500 dark:text-slate-400 py-2.5 px-4 bg-slate-50/80 dark:bg-slate-900/40 border-b border-slate-200/60 dark:border-slate-800/60 overflow-x-auto whitespace-nowrap scrollbar-none">
      <button
        onClick={() => setCurrentTab('home')}
        className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-slate-600 dark:text-slate-300"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </button>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mx-1.5" />
            {isLast ? (
              <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <button
                onClick={() => {
                  if (item.onClick) item.onClick();
                  else if (item.tab) setCurrentTab(item.tab);
                }}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:underline truncate max-w-[150px] sm:max-w-none"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
