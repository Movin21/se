export default function Head() {
  return (
    <>
      <title>What We Do | SLIIT Software Engineering Student Community</title>
      <meta name="description" content="Learn about what we do at SLIIT Software Engineering Student Community" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Critical CSS to ensure styles don't disappear on refresh */
        :root {
          --primary: 231 48% 28%;
          --primary-foreground: 210 40% 98%;
          --muted: 210 40% 96.1%;
          --muted-foreground: 215.4 16.3% 46.9%;
          --border: 214.3 31.8% 91.4%;
        }
        
        .bg-primary\/5 {
          background-color: rgba(30, 58, 138, 0.05);
        }
        
        .text-primary {
          color: hsl(231, 48%, 28%);
        }
        
        .text-muted-foreground {
          color: hsl(215.4, 16.3%, 46.9%);
        }
        
        .bg-muted {
          background-color: hsl(210, 40%, 96.1%);
        }
        
        .border-border {
          border-color: hsl(214.3, 31.8% 91.4%);
        }
      `,
        }}
      />
    </>
  )
}
