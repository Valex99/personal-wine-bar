type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Welcome from layout</h1>
      {children}
    </div>
  );
}
