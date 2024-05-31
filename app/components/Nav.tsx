'use client';

import {useSession} from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {
  Home as HomeIcon,
  Wallet as WalletIcon,
  Coins as CoinsIcon,
  Landmark as LandmarkIcon,
  Dog as PetsIcon,
  Settings as SettingsIcon,
  Sparkles as SparklesIcon,
  Menu as MenuIcon,
} from 'lucide-react';
import {Button} from '@/components/ui/button';
import FureverLogo from '@/public/furever_logo.png';
import Stripe from 'stripe';
import {Switch} from '@/components/ui/switch';
import {Label} from '@/components/ui/label';
import {useEmbeddedComponentBorder} from '../hooks/EmbeddedComponentBorderProvider';
import * as React from 'react';

const navigationMenuItems = [
  {
    label: 'Home',
    href: '/home',
    icon: HomeIcon,
    paths: [],
  },
  {
    label: 'Pets',
    href: '/pets',
    icon: PetsIcon,
    paths: [],
  },
  {
    label: 'Payments',
    href: '/payments',
    icon: WalletIcon,
    paths: [],
  },
  {
    label: 'Payouts',
    href: '/payouts',
    icon: CoinsIcon,
    paths: [],
  },
  {
    label: 'Finances',
    href: '/finances',
    icon: LandmarkIcon,
    paths: ['/finances/cards'],
    shouldDisplayFilter: (stripeAccount: Stripe.Account) =>
      stripeAccount.controller?.stripe_dashboard?.type === 'none' &&
      stripeAccount.controller?.losses?.payments === 'application' &&
      stripeAccount.controller?.requirement_collection === 'application',
  },
  {
    label: 'Account',
    href: '/settings',
    icon: SettingsIcon,
    paths: ['/settings/documents', '/settings/tax'],
  },
];

const Nav = () => {
  const pathname = usePathname();
  const {data: session} = useSession();

  const stripeAccount = session?.user?.stripeAccount;
  const {handleEnableBorderChange, enableBorder} = useEmbeddedComponentBorder();
  const [border, setBorder] = React.useState(true);

  React.useEffect(() => {
    setBorder(enableBorder);
  }, [enableBorder]);

  const [showMobileNavItems, setShowMobileNavItems] = React.useState(false);

  return (
    <div className="fixed z-40 w-full flex-col border-b bg-white sm:fixed sm:flex sm:h-screen sm:w-52 sm:border-r sm:p-1 lg:w-64 lg:p-3">
      <div className="flex items-center justify-between p-3 sm:mb-4">
        <Link href="/home">
          <div className="flex items-center gap-3 text-xl font-bold text-primary">
            <Image
              src={FureverLogo}
              alt="Furever Logo"
              className="h-9 w-9 sm:h-10 sm:w-10"
              sizes="100px"
              priority
            />
            Furever
          </div>
        </Link>
        <Button
          variant="ghost"
          className="sm:hidden"
          onClick={() => setShowMobileNavItems(!showMobileNavItems)}
        >
          <MenuIcon />
        </Button>
      </div>
      <nav
        className={`${showMobileNavItems ? 'flex' : 'hidden'} w-full flex-1 p-2 pb-3 shadow-xl transition sm:flex sm:p-0 sm:shadow-none`}
      >
        <ul className="w-full flex-col">
          {navigationMenuItems
            .filter(({shouldDisplayFilter}) => {
              // Not all pages require a filter.
              if (!shouldDisplayFilter || !stripeAccount) {
                return true;
              }

              return shouldDisplayFilter(stripeAccount);
            })
            .map((item) => (
              <li key={item.label} className="p-1">
                <Link href={item.href}>
                  <Button
                    className={`w-full justify-start text-lg text-primary hover:bg-accent-subdued ${
                      pathname === item.href || item.paths.includes(pathname)
                        ? 'bg-accent-subdued text-accent'
                        : 'bg-white'
                    }`}
                    onClick={() => setShowMobileNavItems(false)}
                    tabIndex={-1}
                  >
                    <item.icon
                      className="mr-2"
                      size={20}
                      color={`${
                        pathname === item.href || item.paths.includes(pathname)
                          ? 'var(--accent)'
                          : 'var(--primary)'
                      }`}
                    />{' '}
                    {item.label}
                  </Button>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      <div className="fixed bottom-2 right-1/2 flex w-[calc(100%-16px)] translate-x-2/4 flex-row items-center gap-3 rounded-lg border bg-white p-3 font-medium shadow-lg sm:relative sm:bottom-0 sm:right-0 sm:w-full sm:translate-x-0 sm:bg-offset sm:shadow-none">
        <Switch
          className="data-[state=checked]:bg-accent data-[state=unchecked]:bg-[#D8DEE4]"
          id="outline"
          checked={border}
          onCheckedChange={() => handleEnableBorderChange(!border)}
        />
        <Label
          className="cursor-pointer text-left text-base sm:text-sm"
          htmlFor="outline"
        >
          View component outlines
        </Label>
      </div>
    </div>
  );
};

export default Nav;
