import Image from 'next/image';
import AlgorithmiqLogo from './logo_algorithmiq.png';
import BluequbitLogo from './logo_bluequbit.png';
import IbmLogo from './logo_ibm.png';
import RikenLogo from './logo_riken.png';
import UMarylandLogo from './logo_uMaryland.png';

const contributors = [
  { name: 'Algorithmiq', logo: AlgorithmiqLogo },
  { name: 'BlueQubit', logo: BluequbitLogo },
  { name: 'IBM', logo: IbmLogo },
  { name: 'RIKEN', logo: RikenLogo },
  { name: 'University of Maryland', logo: UMarylandLogo },
];

export function Contributors() {
  return (
    <ul className="mx-auto inline-flex flex-row flex-wrap justify-center pt-2">
      {contributors.map((contributor) => (
        <li key={contributor.name}>
          <Image
            src={contributor.logo}
            alt={`${contributor.name} logo`}
            title={contributor.name}
            className="h-16 w-auto grayscale"
          />
        </li>
      ))}
    </ul>
  );
}
