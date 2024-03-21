



export default function RootLayout(
 
  {

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
     <>
        <h1>inner Layout Item</h1>
        {children}
    </>
       
  );
}
