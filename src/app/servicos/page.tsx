import { Metadata } from 'next';
import ServicosPage from '../ui/servicos/servicos-page';

export const metadata: Metadata = {
  title: "Veja nossos serviços",
  description: "Na Bocarra Circus, oferecemos soluções personalizadas em coberturas têxteis, combinando tradição e inovação para atender às necessidades únicas de cada cliente.",
  keywords: [
    "Circo",
    "Lonas",
    "Bocarra Circus",
    "fabricante de lonas",
    "serviços",
    "servicos"
  ],
  authors: [{name: 'Victor Belotto'}],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.bocarracircus.com/servicos",
    title: "servicos",
    description: "Veja nossas soluções",
  },
  alternates: {
    canonical: "https://www.bocarracircus.com/servicos",
  },
};

const Page = () => {
 

  return (
    <ServicosPage/>
  );
};

export default Page;
