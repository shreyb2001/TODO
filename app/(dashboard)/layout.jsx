export default function PageLayout({ children }) {
  return (
    <div className="fixed h-full w-full flex items-center justify-center">
      {children}
    </div>
  );
}
