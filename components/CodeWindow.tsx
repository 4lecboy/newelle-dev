import React, { ReactNode, CSSProperties } from 'react';

interface CodeWindowProps {
  children: ReactNode;
  fileName?: string;
  className?: string;
  autoWidth?: boolean;
  style?: CSSProperties;
}

const CodeWindow: React.FC<CodeWindowProps> = ({ children, fileName = "untitled", className = "", autoWidth = false, style }) => {
  const wrapperClasses = `bg-panel border border-panel-border rounded-lg overflow-hidden shadow-xl ${autoWidth ? 'inline-block w-auto max-w-full' : 'w-full'} ${className}`;

  return (
    <div className={wrapperClasses} style={style}>
      {/* Window Title Bar */}
      <div className="bg-card border-b border-panel-border px-4 py-2 flex items-center gap-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
        </div>
        <div className="font-mono text-left text-xs text-muted-foreground grow opacity-70">
          {fileName}
        </div>
        <div className="w-10"></div> {/* Spacer for balance */}
      </div>
      
      {/* Content */}
      <div className="relative overflow-x-auto">
        {children}
      </div>
    </div>
  );
};

export default CodeWindow;
